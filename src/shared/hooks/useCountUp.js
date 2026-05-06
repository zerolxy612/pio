import { useEffect, useMemo, useState } from 'react';

const easeOutQuint = (value) => 1 - Math.pow(1 - value, 5);

function getDecimalPlaces(value) {
  const text = String(value);
  const [, decimals = ''] = text.split('.');

  return decimals.length;
}

function parseNumericValue(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value !== 'string') {
    return Number.NaN;
  }

  return Number.parseFloat(value.replace(/,/g, ''));
}

function shouldReduceMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useCountUp(value, { duration = 900, delay = 0 } = {}) {
  const target = useMemo(() => parseNumericValue(value), [value]);
  const isNumeric = Number.isFinite(target);
  const decimals = useMemo(() => getDecimalPlaces(value), [value]);
  const [currentValue, setCurrentValue] = useState(isNumeric ? 0 : value);

  useEffect(() => {
    if (!isNumeric) {
      return undefined;
    }

    if (shouldReduceMotion()) {
      const animationFrame = window.requestAnimationFrame(() => {
        setCurrentValue(target);
      });

      return () => {
        window.cancelAnimationFrame(animationFrame);
      };
    }

    let animationFrame = 0;
    let timeoutId = 0;
    let startTime = 0;

    const tick = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const nextValue = target * easeOutQuint(progress);

      setCurrentValue(nextValue);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    timeoutId = window.setTimeout(() => {
      setCurrentValue(0);
      animationFrame = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [delay, duration, isNumeric, target, value]);

  if (!isNumeric) {
    return {
      displayValue: value,
      isNumeric: false,
    };
  }

  return {
    displayValue: currentValue.toLocaleString('en-US', {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
    }),
    isNumeric: true,
  };
}
