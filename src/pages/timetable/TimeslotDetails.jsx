import React from 'react';
import { Calendar, Search, Table as TableIcon, CheckCircle, Clock, BookOpen, Layers } from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';
import { FilterSelectWithIcon } from './TimetableDetails';

const TimeslotDetails = () => {
  const columns = [
    { label: 'Academic Year', key: 'year' },
    { label: 'Semester', key: 'semester' },
    { label: 'Section', key: 'section' },
    { label: 'Day', key: 'day', primary: true },
    { label: 'Status', key: 'status' },
    { label: 'Last Updated On', key: 'updated' },
    { label: 'Action', key: 'action' },
  ];

  const data = [
    { 
      year: "2026-27", semester: "HCT 1", section: "ADA03ALB0180", day: "Tuesday", status: <span className="text-slate-400 font-bold">In Active</span>, updated: "14-04-2026 11:56 AM",
      action: (
        <div className="flex items-center gap-2">
          <button className="p-2 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-100 hover:scale-110 active:scale-90 transition-all"><TableIcon size={16} /></button>
          <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><CheckCircle size={16} /></button>
        </div>
      )
    },
    { 
      year: "2026-27", semester: "HCT 1", section: "ADAFCR0170", day: "Monday", status: <span className="text-slate-400 font-bold">In Active</span>, updated: "14-04-2026 12:03 AM",
      action: (
        <div className="flex items-center gap-2">
          <button className="p-2 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-100 hover:scale-110 active:scale-90 transition-all"><TableIcon size={16} /></button>
          <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><CheckCircle size={16} /></button>
        </div>
      )
    },
    { 
        year: "2026-27", semester: "HCT 1", section: "ADA03ALB0180", day: "Friday", status: <span className="text-emerald-600 font-black">Active</span>, updated: "14-04-2026 05:47 PM",
        action: (
          <div className="flex items-center gap-2">
            <button className="p-2 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-100 hover:scale-110 active:scale-90 transition-all"><TableIcon size={16} /></button>
            <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><CheckCircle size={16} /></button>
          </div>
        )
      },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
          <Clock size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Timeslot Details</h1>
          <p className="text-slate-500 font-medium tracking-wide">Configure and manage specific time blocks for classes.</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/40 p-8 shadow-sm">
        <div className="flex flex-wrap items-end gap-6">
          <FilterSelectWithIcon icon={Calendar} label="Academic Year" options={["2026-27"]} />
          <FilterSelectWithIcon icon={BookOpen} label="Semester" options={["HCT 1", "HCT 2"]} />
          <FilterSelectWithIcon icon={Layers} label="Section" options={["ADAFCR0170", "ADA03ALB0180"]} />
          <FilterSelectWithIcon icon={Clock} label="Day" options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} />
          
          <button className="bg-blue-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 mb-0.5">
            <Search size={18} />
            SEARCH
          </button>
        </div>
      </div>

      <ProfessionalTable title="Timeslot Overview" data={data} columns={columns} />
    </div>
  );
};

export default TimeslotDetails;
