import React from 'react';
import { Upload, Download, FileText, Save, X } from 'lucide-react';

const ImportPage = ({ title, icon: Icon, fileLabel, extraFields = [] }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
            <Icon size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">{title}</h1>
            <p className="text-slate-500 font-medium tracking-wide">Import bulk records using Excel templates.</p>
          </div>
        </div>
        
        <button className="bg-rose-500 text-white px-8 py-3.5 rounded-2xl font-black shadow-xl shadow-rose-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <Download size={20} />
          DOWNLOAD TEMPLATE
        </button>
      </div>

      {/* Main Container */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] border border-white/40 p-10 shadow-[20px_20px_60px_#d1d9e6,-20px_-20px_60px_#ffffff] max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Dynamic Extra Fields (like Academic Year, Semester) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Academic Year / Batch <span className="text-rose-500">*</span></label>
              <select className="bg-white/50 border border-white/40 px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none">
                <option value="">Select Any One</option>
                <option value="2025-2026">2025-2026</option>
                <option value="2026-2027">2026-2027</option>
              </select>
            </div>
            {extraFields.map((field, i) => (
              <div key={i} className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{field.label} <span className="text-rose-500">*</span></label>
                <select className="bg-white/50 border border-white/40 px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none">
                  <option value="">Select Any One</option>
                  {field.options.map((opt, j) => <option key={j} value={opt}>{opt}</option>)}
                </select>
              </div>
            ))}
          </div>

          {/* Large Morphic File Upload Area */}
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">{fileLabel} <span className="text-rose-500">*</span></label>
            <div className="border-4 border-dashed border-slate-100 rounded-[2.5rem] p-12 flex flex-col items-center justify-center gap-4 hover:border-blue-300 hover:bg-blue-50/30 transition-all group cursor-pointer bg-white/30 backdrop-blur-sm">
              <div className="w-20 h-20 bg-white rounded-[2rem] shadow-lg flex items-center justify-center text-blue-500 group-hover:scale-110 transition-all duration-300">
                <Upload size={36} />
              </div>
              <div className="text-center">
                <p className="text-lg font-black text-slate-700">Choose File</p>
                <p className="text-sm text-slate-400 font-medium mt-1">or drag and drop your Excel file here</p>
                <p className="text-xs text-rose-500 font-bold mt-2 uppercase tracking-tight">File Type: .xlsx</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex items-center justify-center gap-4">
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
    </div>
  );
};

export default ImportPage;
