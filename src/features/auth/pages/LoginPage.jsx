import { EyeOff, Eye } from 'lucide-react';
import { useState } from 'react';

const introSlides = [
  {
    title: 'Public Intelligence Observatory',
    description:
      'PIO introduces the concept of public intelligence infrastructure — the informational, cognitive, and institutional systems that allow societies to reason collectively, make decisions, and maintain trust. As AI reshapes these systems at scale, PIO provides the methods, tools, and frameworks to monitor, analyze, and guide that transformation.',
  },
  {
    title: 'Trust Index Monitoring',
    description:
      'Track global and regional AI trust indicators, compare shifts across public narratives, and identify where confidence in institutions, media, and AI systems is changing fastest.',
  },
  {
    title: 'Risk and Signal Detection',
    description:
      'Surface misinformation pressure, governance activity, and early-warning signals from public data streams so teams can move from scattered observations to shared situational awareness.',
  },
  {
    title: 'Research Dashboard',
    description:
      'Bring maps, KPI cards, incident lists, and analytical charts into one workspace for researchers, policy teams, and operators studying public intelligence in the AI era.',
  },
];

export function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState('login');
  const [activeIntro, setActiveIntro] = useState(0);

  const isRegister = mode === 'register';
  const currentIntro = introSlides[activeIntro];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Column - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-[400px]">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[#f0f6ff] flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center">
                <img src="/assets/login.png" alt="Logo" className="w-11 h-11 object-contain" />
              </div>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-[28px] font-bold text-center text-gray-900 mb-2">
            {isRegister ? 'Register for PIO' : 'Welcome to PIO'}
          </h1>
          <p className="text-center text-gray-500 mb-10 text-[15px]">Public Intelligence Observatory</p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {isRegister && (
              <div>
                <label className="block text-[13px] text-gray-600 mb-1.5 ml-1">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#469aff] focus:ring-1 focus:ring-[#469aff] transition-colors text-sm"
                />
              </div>
            )}

            <div>
              <label className="block text-[13px] text-gray-600 mb-1.5 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="me@ust.hk"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#469aff] focus:ring-1 focus:ring-[#469aff] transition-colors text-sm"
              />
            </div>
            
            <div>
              <label className="block text-[13px] text-gray-600 mb-1.5 ml-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#469aff] focus:ring-1 focus:ring-[#469aff] transition-colors text-sm font-medium tracking-wider placeholder:tracking-normal"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[13px] pt-1">
              <label className="flex items-center text-gray-600 cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  className="mr-2.5 w-4 h-4 rounded border-gray-300 text-[#469aff] focus:ring-[#469aff]" 
                />
                Remember Me
              </label>
              {!isRegister && (
                <a href="#" className="text-[#469aff] hover:underline font-medium">Forgot Password ?</a>
              )}
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full py-3.5 px-4 bg-[#469aff] text-white rounded-full font-medium hover:bg-blue-500 transition-colors shadow-sm shadow-blue-200"
              >
                {isRegister ? 'Register' : 'Sign In'}
              </button>
            </div>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-[13px]">Or</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <p className="text-center text-[13px] text-gray-500">
              {isRegister ? 'Already have account ? ' : "Don't have account ? "}
              <button
                type="button"
                onClick={() => setMode(isRegister ? 'login' : 'register')}
                className="text-[#469aff] hover:underline font-medium"
              >
                {isRegister ? 'Sign In' : 'Register'}
              </button>
            </p>
          </form>
        </div>
      </div>

      {/* Right Column - Hero */}
      <div className="hidden lg:flex flex-1 bg-[#469aff] flex-col justify-center p-16 relative overflow-hidden">
        <div className="w-full max-w-[600px] mx-auto z-10">
          {/* Map Card */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
            <img src="/assets/World.png" alt="World Map with markers" className="w-full h-auto object-contain" />
          </div>
          
          {/* Text Content */}
          <h2 className="text-[32px] font-semibold text-white mb-4 tracking-wide">{currentIntro.title}</h2>
          <p className="text-blue-50 text-[15px] leading-relaxed mb-10 opacity-90 font-light">
            {currentIntro.description}
          </p>

          {/* Carousel Indicators */}
          <div className="flex space-x-2.5">
            {introSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Show ${slide.title}`}
                onClick={() => setActiveIntro(index)}
                className={`h-1.5 rounded-full transition-all ${
                  activeIntro === index ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
