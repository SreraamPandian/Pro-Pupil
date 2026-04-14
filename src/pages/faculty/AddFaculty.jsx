import React from 'react';
import { UserPlus, Upload, Save, X } from 'lucide-react';

const InputField = ({ label, required = false, type = "text", placeholder, options = [] }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      {type === "select" ? (
        <select className="bg-white/50 border border-white/40 px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none">
          <option value="">Select Any One</option>
          {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
        </select>
      ) : (
        <input 
          type={type} 
          placeholder={placeholder} 
          className="bg-white/50 border border-white/40 px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        />
      )}
    </div>
  );
};

const AddFaculty = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
          <UserPlus size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Add Faculty</h1>
          <p className="text-slate-500 font-medium tracking-wide">Register a new faculty member with complete details.</p>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] border border-white/40 p-10 shadow-[20px_20px_60px_#d1d9e6,-20px_-20px_60px_#ffffff]">
        <h2 className="text-2xl font-black text-slate-800 mb-8 tracking-tight flex items-center gap-3">
          <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
          Faculty Information
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-8">
            <InputField label="Faculty Type" required={true} type="select" options={["Regular", "Visiting"]} />
            <InputField label="Title" required={true} type="select" options={["Professor", "Associate Professor", "Assistant Professor"]} />
            <InputField label="Name" required={true} />
            <InputField label="Contact No" required={true} />
            <InputField label="Email ID" required={true} />
          </div>

          <div className="space-y-8">
            <InputField label="Device Unique ID" required={true} />
            <InputField label="Sections For Excel Upload" />
            
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Photo upload</label>
              <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-10 flex flex-col items-center justify-center gap-3 hover:border-blue-300 hover:bg-blue-50/50 transition-all group cursor-pointer bg-white/30">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-all duration-300">
                  <Upload size={24} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-600">Choose Photo</p>
                  <p className="text-[10px] text-slate-400">Max size: 1MB (JPG, PNG)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-[2rem] font-black shadow-xl shadow-blue-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
            <Save size={20} />
            Submit
          </button>
          <button className="bg-white text-slate-500 border border-slate-100 px-10 py-4 rounded-[2rem] font-black shadow-lg hover:bg-slate-50 active:scale-95 transition-all flex items-center gap-3">
            <X size={20} />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFaculty;
