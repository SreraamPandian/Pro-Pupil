import React from 'react';
import { BarChart, Search, RotateCcw, Download, Calendar, BookOpen, Layers, UserCheck } from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';
import { FilterSelectWithIcon } from '../timetable/TimetableDetails';
import { StatusChip } from './StudentReport';

const FacultyReport = () => {
  const columns = [
    { label: 'Date', key: 'date', primary: true },
    { label: 'Device UID', key: 'uid' },
    { label: 'Faculty Name', key: 'name' },
    { label: 'I Period Section & Course', key: 's1' },
    { label: 'I Period', key: 'p1' },
    { label: 'II Period Section & Course', key: 's2' },
    { label: 'II Period', key: 'p2' },
    { label: 'III Period Section & Course', key: 's3' },
    { label: 'III Period', key: 'p3' },
    { label: 'IV Period Section & Course', key: 's4' },
    { label: 'IV Period', key: 'p4' },
    { label: 'V Period Section & Course', key: 's5' },
    { label: 'V Period', key: 'p5' },
    { label: 'VI Period Section & Course', key: 's6' },
    { label: 'VI Period', key: 'p6' },
    { label: 'VII Period Section & Course', key: 's7' },
    { label: 'VII Period', key: 'p7' },
    { label: 'VIII Period Section & Course', key: 's8' },
    { label: 'VIII Period', key: 'p8' },
  ];

  const data = [
    { 
      date: "14-04-2026", uid: "Fac001", name: "Dr. Huned Bohari", 
      s1: "ADAFCR0170 ^^ EGN-1003", p1: <StatusChip status="10:00 AM (P)" />,
      s2: "ADA03ALB0180 ^^ MEC-101", p2: <StatusChip status="11:00 AM (P)" />,
      s3: "LH-36 ^^ MAT-101", p3: <StatusChip status="12:00 PM (P)" />,
      s4: "Lab-A ^^ CS-101", p4: <StatusChip status="Absent" />,
      s5: "", p5: "", s6: "", p6: "", s7: "", p7: "", s8: "", p8: ""
    },
    { 
      date: "14-04-2026", uid: "Fac005", name: "Adnan Saeed", 
      s1: "ADAFCR0170 ^^ EGN-1003", p1: <StatusChip status="10:05 AM (LP)" />,
      s2: "ADA03ALB0180 ^^ MEC-101", p2: <StatusChip status="11:03 AM (P)" />,
      s3: "", p3: "", s4: "", p4: "", s5: "", p5: "", s6: "", p6: "", s7: "", p7: "", s8: "", p8: ""
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
            <BarChart size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Faculty Report</h1>
            <p className="text-slate-500 font-medium tracking-wide">Detailed audit of faculty lecture activity across all 8 academic periods.</p>
          </div>
        </div>
        
        <button className="bg-emerald-500 text-white px-8 py-3.5 rounded-2xl font-black shadow-xl shadow-emerald-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <Download size={20} />
          DOWNLOAD (xlsx)
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/40 p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          <FilterSelectWithIcon icon={Calendar} label="Academic Year" options={["All", "2026-27"]} />
          <FilterSelectWithIcon icon={BookOpen} label="Semester" options={["All", "HCT 1"]} />
          <FilterSelectWithIcon icon={UserCheck} label="Status" options={["All", "Present", "Absent"]} />
          
          <div className="flex items-center gap-4 lg:col-span-1 justify-end">
            <button className="bg-blue-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 w-full">
              <Search size={18} />
              Generate
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-[2rem] border border-white/40">
        <div className="min-w-[1500px]">
          <ProfessionalTable title="Faculty Performance Matrix" data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default FacultyReport;
