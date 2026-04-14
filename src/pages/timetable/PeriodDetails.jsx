import React from 'react';
import { Calendar, Search, Plus, Edit, Clock, BookOpen, Layers } from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';
import { FilterSelectWithIcon } from './TimetableDetails';

const PeriodDetails = () => {
  const columns = [
    { label: 'Academic Year', key: 'year' },
    { label: 'Semester', key: 'semester' },
    { label: 'Section', key: 'section' },
    { label: 'Day', key: 'day' },
    { label: 'From Time', key: 'from', primary: true },
    { label: 'To Time', key: 'to', primary: true },
    { label: 'Status', key: 'status' },
    { label: 'Updated On', key: 'updated' },
    { label: 'Action', key: 'action' },
  ];

  const data = [
    { 
      year: "2026-27", semester: "HCT 1", section: "ADA03ALB0180", day: "Tuesday", from: "11:05 AM", to: "11:20 AM", status: <span className="text-emerald-600 font-black">Active</span>, updated: "14-04-2026 11:59 AM",
      action: <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><Edit size={16} /></button>
    },
    { 
      year: "2026-27", semester: "HCT 1", section: "ADAFCR0170", day: "Tuesday", from: "11:05 AM", to: "11:20 AM", status: <span className="text-emerald-600 font-black">Active</span>, updated: "14-04-2026 11:59 AM",
      action: <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><Edit size={16} /></button>
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
            <Layers size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Period Details</h1>
            <p className="text-slate-500 font-medium tracking-wide">Manage specific lecture periods and timings.</p>
          </div>
        </div>
        
        <button className="bg-emerald-500 text-white px-8 py-3.5 rounded-2xl font-black shadow-xl shadow-emerald-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <Plus size={20} />
          ADD PERIOD
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/40 p-8 shadow-sm">
        <div className="flex flex-wrap items-end gap-6">
          <FilterSelectWithIcon icon={Calendar} label="Academic Year" options={["2026-27"]} />
          <FilterSelectWithIcon icon={BookOpen} label="Semester" options={["HCT 1", "HCT 2"]} />
          <FilterSelectWithIcon icon={Layers} label="Section" options={["ADAFCR0170", "ADA03ALB0180"]} />
          <FilterSelectWithIcon icon={Clock} label="Day" options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]} />
          
          <button className="bg-blue-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 mb-0.5">
            <Search size={18} />
            SEARCH
          </button>
        </div>
      </div>

      <ProfessionalTable title="Registration of Periods" data={data} columns={columns} />
    </div>
  );
};

export default PeriodDetails;
