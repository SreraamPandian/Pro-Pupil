import React from 'react';
import { UserCheck, Search, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';

const FacultyDetails = () => {
  const columns = [
    { label: 'Photo', key: 'photo' },
    { label: 'Device UID', key: 'uid' },
    { label: 'Faculty Title', key: 'title' },
    { label: 'Name', key: 'name', primary: true },
    { label: 'Faculty Type', key: 'type' },
    { label: 'Contact No', key: 'contact' },
    { label: 'Email', key: 'email' },
    { label: 'Status', key: 'status' },
    { label: 'Action', key: 'action' },
  ];

  const data = [
    { 
      photo: <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400"><UserCheck size={16} /></div>,
      uid: "H00001",
      title: "Professor",
      name: "Hari",
      type: "Regular",
      contact: "9176268070",
      email: "hariharan89440@gmail.com",
      status: <span className="text-emerald-600 font-black">Active</span>,
      action: (
        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Eye size={14} /></button>
          <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"><Edit size={14} /></button>
        </div>
      )
    },
    { 
      photo: <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400"><UserCheck size={16} /></div>,
      uid: "H00654818",
      title: "Professor",
      name: "Samantha Stephen",
      type: "Regular",
      contact: "9176268070",
      email: "hariharan89440@gmail.com",
      status: <span className="text-emerald-600 font-black">Active</span>,
      action: (
        <div className="flex items-center gap-2">
          <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Eye size={14} /></button>
          <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"><Edit size={14} /></button>
        </div>
      )
    },
    { 
        photo: <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400"><UserCheck size={16} /></div>,
        uid: "H00376008",
        title: "Professor",
        name: "Raza Ali",
        type: "Regular",
        contact: "9176268070",
        email: "hariharan89440@gmail.com",
        status: <span className="text-emerald-600 font-black">Active</span>,
        action: (
          <div className="flex items-center gap-2">
            <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"><Eye size={14} /></button>
            <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"><Edit size={14} /></button>
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
            <UserCheck size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Faculty Details</h1>
            <p className="text-slate-500 font-medium tracking-wide">Manage and monitor faculty staff information.</p>
          </div>
        </div>
        
        <button className="bg-emerald-500 text-white px-8 py-3.5 rounded-2xl font-black shadow-xl shadow-emerald-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <Plus size={20} />
          ADD FACULTY
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/40 p-8 shadow-sm">
        <div className="flex items-end gap-6">
          <div className="flex flex-col gap-2 flex-1 max-w-[300px]">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">-- Course --</label>
            <select className="bg-white/50 border border-white/40 px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none">
              <option value="">All Courses</option>
              <option value="C1">Course 01</option>
              <option value="C2">Course 02</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 mb-0.5">
            <Search size={18} />
            SEARCH
          </button>
        </div>
      </div>

      {/* Responsive Data Table */}
      <ProfessionalTable title="Faculty Staff List" data={data} columns={columns} />
    </div>
  );
};

export default FacultyDetails;
