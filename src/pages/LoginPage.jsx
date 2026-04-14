import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, GraduationCap, ArrowRight, Mail, Lock } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    localStorage.setItem('userRole', role);
    onLogin(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] flex items-center justify-center p-6 relative overflow-hidden font-['Outfit']">
      {/* Premium Soft Background Blooms */}
      <div className="absolute top-[-15%] right-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[50%] h-[50%] bg-emerald-100 rounded-full blur-[120px] opacity-60" />
      
      <div className="w-full max-w-5xl bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/80 shadow-[40px_40px_100px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-2 overflow-hidden relative z-10">
        
        {/* Visual Brand Side */}
        <div className="p-20 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[40px] border-white/10 rounded-full" />
           </div>

           <div className="relative z-10 text-center lg:text-left">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-10 mx-auto lg:mx-0 shadow-2xl border border-white/30">
                 <ShieldCheck size={40} className="text-white" strokeWidth={1.5} />
              </div>
              <h1 className="text-6xl font-black tracking-tighter mb-4">Pro-Pupil</h1>
              <p className="text-blue-50 font-medium text-lg leading-relaxed opacity-90 max-w-xs mx-auto lg:mx-0">
                The next generation of educational intelligence and smart campus automation.
              </p>
           </div>

           <div className="relative z-10 hidden lg:block">
              <div className="flex items-center gap-3 text-blue-100/40 uppercase tracking-[0.4em] text-[10px] font-black">
                 <span className="w-10 h-[2px] bg-white/20" />
                 UAE Smart Campus Hub
              </div>
           </div>
        </div>

        {/* Professional Form Side */}
        <div className="p-20 flex flex-col justify-center bg-white/60">
           <div className="mb-12">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Portal Access</h2>
              <p className="text-slate-400 font-medium tracking-wide">Enter your credentials or select your role to enter.</p>
           </div>

           <div className="space-y-6">
              <div className="space-y-4">
                 <div className="relative group">
                    <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-white border border-slate-100 pl-14 pr-6 py-4 rounded-2xl text-sm font-bold text-slate-800 outline-none focus:ring-4 focus:ring-blue-50 transition-all shadow-sm"
                    />
                 </div>
                 <div className="relative group">
                    <Lock size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" />
                    <input 
                      type="password" 
                      placeholder="Access Token / PIN" 
                      className="w-full bg-white border border-slate-100 pl-14 pr-6 py-4 rounded-2xl text-sm font-bold text-slate-800 outline-none focus:ring-4 focus:ring-blue-50 transition-all shadow-sm"
                    />
                 </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-slate-400">
                 <div className="flex items-center gap-2 cursor-pointer hover:text-slate-600 transition-colors">
                    <div className="w-4 h-4 rounded border-2 border-slate-200" />
                    Remember Me
                 </div>
                 <span className="text-blue-600 cursor-pointer">Recover Key</span>
              </div>

              <div className="pt-4 space-y-4">
                 <button 
                   onClick={() => handleLogin('superadmin')}
                   className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-sm shadow-xl shadow-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                 >
                   LOGIN AS SUPERADMIN
                   <ArrowRight size={18} />
                 </button>
                 <button 
                   onClick={() => handleLogin('teacher')}
                   className="w-full bg-white text-emerald-600 border-2 border-emerald-50 py-5 rounded-2xl font-black text-sm shadow-lg shadow-emerald-50 hover:bg-emerald-50 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                 >
                   LOGIN AS FACULTY
                   <ArrowRight size={18} />
                 </button>
              </div>
           </div>

           <p className="mt-12 text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
             © 2026 Pro-Pupil • United Arab Emirates
           </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
