import React from 'react';
import { Laptop, Save, X, Server, Layout } from 'lucide-react';

const InputField = ({ label, required = false, type = "text", placeholder, options = [], icon: Icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative group">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
            <Icon size={16} />
          </div>
        )}
        {type === "select" ? (
          <select className={`w-full bg-white/50 border border-white/40 ${Icon ? 'pl-11' : 'px-4'} py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none cursor-pointer`}>
            <option value="">--Select Any One--</option>
            {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
          </select>
        ) : (
          <input 
            type={type} 
            placeholder={placeholder} 
            className={`w-full bg-white/50 border border-white/40 ${Icon ? 'pl-11' : 'px-4'} py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all`}
          />
        )}
      </div>
    </div>
  );
};

const AddDevice = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
          <Laptop size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Add Device</h1>
          <p className="text-slate-500 font-medium tracking-wide">Register new biometric or network devices to the system.</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] border border-white/40 p-12 shadow-[20px_20px_60px_#d1d9e6,-20px_-20px_60px_#ffffff] max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <InputField label="Block" required={true} type="select" options={["HCT 1st Floor", "Ground Floor"]} icon={Layout} />
          <InputField label="Class Room" required={true} type="select" options={["ADA03ALB0180", "LH-36"]} icon={Layout} />
          <InputField label="Device Name" required={true} placeholder="Enter device name" icon={Laptop} />
          <InputField label="IP Address" required={true} placeholder="192.168.1.1" icon={Server} />
          <InputField label="Username" required={true} placeholder="admin" icon={Server} />
          <InputField label="Password" required={true} type="password" placeholder="••••••••" icon={Server} />
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button className="bg-blue-600 text-white px-12 py-4 rounded-[2rem] font-black shadow-xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
            <Save size={20} />
            Submit
          </button>
          <button className="bg-white text-slate-500 border border-slate-100 px-12 py-4 rounded-[2rem] font-black shadow-lg hover:bg-slate-50 active:scale-95 transition-all flex items-center gap-3">
            <X size={20} />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
export { InputField }; // Re-export for reuse
