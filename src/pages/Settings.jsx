import React from 'react';
import { Settings as SettingsIcon, Mail, Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
          <SettingsIcon size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Settings</h1>
          <p className="text-slate-500 font-medium tracking-wide">Configure primary system settings and security preferences.</p>
        </div>
      </div>

      {/* Settings Container */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] border border-white/40 p-12 shadow-[20px_20px_60px_#d1d9e6,-20px_-20px_60px_#ffffff] max-w-4xl">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 pb-10 border-b border-slate-100/50">
            <div className="flex-1">
              <label className="text-lg font-black text-slate-800 block mb-1">Password Reset Send Email ID <span className="text-rose-500">*</span></label>
              <p className="text-sm text-slate-400 font-medium tracking-tight">The email address from which password recovery links will be sent.</p>
            </div>
            <div className="flex-1 relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                defaultValue="hariharan@iproat.com" 
                className="w-full bg-white/50 border border-white/40 pl-12 pr-4 py-4 rounded-2xl text-sm font-black text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder:text-slate-300"
                placeholder="Enter email ID"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-16 py-4 rounded-[2rem] font-black shadow-xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 text-lg">
              <Save size={22} />
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
