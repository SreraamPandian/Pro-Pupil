import React from 'react';
import { Users, Search, Download, Eye, Edit, Trash2, Filter } from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';

const FilterSelect = ({ label, options }) => (
  <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">-- {label} --</label>
    <select className="bg-white/50 border border-white/40 px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none">
      <option value="">All {label}s</option>
      {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const StudentDetails = () => {
  const columns = [
    { label: 'Device ID', key: 'deviceId' },
    { label: 'Register No', key: 'regNo' },
    { label: 'Admission No', key: 'admNo' },
    { label: 'Student Name', key: 'name', primary: true },
    { label: 'Academic Year', key: 'year' },
    { label: 'Photo', key: 'photo' },
    { label: 'Gender', key: 'gender' },
    { label: 'Updated On', key: 'updated' },
    { label: 'Action', key: 'action' },
  ];

  const data = [
    { 
      deviceId: "H00459328", 
      regNo: "H00459328", 
      admNo: "H00459328", 
      name: "Mr. Ahmed Mutab Mohamed Mutab Almehairbi", 
      year: "202520", 
      photo: <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400"><Users size={16} /></div>,
      gender: "Male",
      updated: "14-04-2026 03:08 PM",
      action: (
        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Eye size={14} /></button>
          <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"><Edit size={14} /></button>
          <button className="p-1.5 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all"><Trash2 size={14} /></button>
        </div>
      )
    },
    { 
      deviceId: "H00463195", 
      regNo: "H00463195", 
      admNo: "H00463195", 
      name: "Mr. Ahmed Mohamed Ahmed Mohamed Alharmoodi", 
      year: "202520", 
      photo: <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400"><Users size={16} /></div>,
      gender: "Male",
      updated: "14-04-2026 03:08 PM",
      action: (
        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Eye size={14} /></button>
          <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"><Edit size={14} /></button>
          <button className="p-1.5 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all"><Trash2 size={14} /></button>
        </div>
      )
    },
    { 
        deviceId: "H00479448", 
        regNo: "H00479448", 
        admNo: "H00479448", 
        name: "Mr. Musallam Saeed Salem Mohamed Alameri", 
        year: "202520", 
        photo: <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400"><Users size={16} /></div>,
        gender: "Male",
        updated: "14-04-2026 03:08 PM",
        action: (
          <div className="flex items-center gap-2">
            <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Eye size={14} /></button>
            <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"><Edit size={14} /></button>
            <button className="p-1.5 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-600 hover:text-white transition-all"><Trash2 size={14} /></button>
          </div>
        )
      },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
            <Users size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Student Details</h1>
            <p className="text-slate-500 font-medium tracking-wide">Browse and manage students across all academic years.</p>
          </div>
        </div>
        
        <button className="bg-emerald-500 text-white px-8 py-3.5 rounded-2xl font-black shadow-xl shadow-emerald-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <Download size={20} />
          Download (xlsx)
        </button>
      </div>

      {/* Filter Bar - Professional Morphism */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/40 p-8 shadow-sm">
        <div className="flex flex-wrap items-end gap-6">
          <FilterSelect label="Gender" options={["Male", "Female"]} />
          <FilterSelect label="Academic Year" options={["202520", "202620"]} />
          <FilterSelect label="Blood Group" options={["A+", "B+", "O+"]} />
          <FilterSelect label="Missing Records" options={["Yes", "No"]} />
          <FilterSelect label="Course" options={["Course A", "Course B"]} />
          
          <button className="bg-blue-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 mb-0.5 min-w-[150px]">
            <Search size={18} />
            SEARCH
          </button>
        </div>
      </div>

      {/* Responsive Data Table */}
      <ProfessionalTable title="Recent Student Records" data={data} columns={columns} />
    </div>
  );
};

export default StudentDetails;
