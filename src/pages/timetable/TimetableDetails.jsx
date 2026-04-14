import React from 'react';
import { Calendar, Search, Info, Clock, BookOpen, Layers } from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';

const FilterSelectWithIcon = ({ icon: Icon, label, options }) => (
  <div className="flex flex-col gap-2 flex-1 min-w-[180px]">
    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">-- {label} --</label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
        <Icon size={16} />
      </div>
      <select className="w-full bg-white/50 border border-white/40 pl-11 pr-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none cursor-pointer">
        <option value="">Select {label}</option>
        {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
      </select>
    </div>
  </div>
);

const TimetableDetails = () => {
  const columns = [
    { label: 'Date', key: 'date', primary: true },
    { label: 'Academic Year', key: 'year' },
    { label: 'Semester', key: 'semester' },
    { label: 'Section', key: 'section' },
    { label: 'Last Updated On', key: 'updated' },
    { label: 'Action', key: 'action' },
  ];

  const data = [
    { 
      date: "14-04-2026", year: "2026-27", semester: "HCT 1", section: "ADAFCR0170", updated: "14-04-2026 12:01 PM",
      action: <button className="p-2 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-100 hover:scale-110 active:scale-90 transition-all"><Info size={16} /></button>
    },
    { 
      date: "13-04-2026", year: "2026-27", semester: "HCT 1", section: "ADAFCR0170", updated: "14-04-2026 12:08 AM",
      action: <button className="p-2 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-100 hover:scale-110 active:scale-90 transition-all"><Info size={16} /></button>
    },
    { 
      date: "11-04-2026", year: "2026-27", semester: "HCT 1", section: "ADA03ALB0180", updated: "14-04-2026 12:01 PM",
      action: <button className="p-2 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-100 hover:scale-110 active:scale-90 transition-all"><Info size={16} /></button>
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
          <Calendar size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Timetable Details</h1>
          <p className="text-slate-500 font-medium tracking-wide">Monitor academic schedules and section updates.</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/40 p-8 shadow-sm">
        <div className="flex flex-wrap items-end gap-6">
          <FilterSelectWithIcon icon={Calendar} label="Academic Year" options={["2026-27"]} />
          <FilterSelectWithIcon icon={BookOpen} label="Semester" options={["HCT 1", "HCT 2"]} />
          <FilterSelectWithIcon icon={Layers} label="Section" options={["ADAFCR0170", "ADA03ALB0180"]} />
          
          <div className="flex flex-col gap-2 flex-1 min-w-[180px]">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">-- Date --</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                <Calendar size={16} />
              </div>
              <input type="text" placeholder="Select Date" className="w-full bg-white/50 border border-white/40 pl-11 pr-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
            </div>
          </div>
          
          <button className="bg-blue-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 mb-0.5 min-w-[150px]">
            <Search size={18} />
            SEARCH
          </button>
        </div>
      </div>

      <ProfessionalTable title="Recent Timetable entries" data={data} columns={columns} />
    </div>
  );
};

export default TimetableDetails;
export { FilterSelectWithIcon }; // Export for reuse
