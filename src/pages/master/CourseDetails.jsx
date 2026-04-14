import React from 'react';
import { Database, Plus, Edit } from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';

const CourseDetails = () => {
  const columns = [
    { label: 'Name', key: 'name', primary: true },
    { label: 'Course Code', key: 'code' },
    { label: 'Status', key: 'status' },
    { label: 'Last Updated On', key: 'updated' },
    { label: 'Action', key: 'action' },
  ];

  const data = [
    { name: "MEC-101", code: "MEC-101", status: <span className="text-emerald-600 font-black">Active</span>, updated: "10-04-2026 07:19 PM",
      action: <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><Edit size={16} /></button>
    },
    { name: "MEC-100", code: "MEC-100", status: <span className="text-emerald-600 font-black">Active</span>, updated: "10-04-2026 07:19 PM",
      action: <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><Edit size={16} /></button>
    },
    { name: "MCT-101", code: "MCT-101", status: <span className="text-emerald-600 font-black">Active</span>, updated: "10-04-2026 07:19 PM",
      action: <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><Edit size={16} /></button>
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
            <Database size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Course Details</h1>
            <p className="text-slate-500 font-medium tracking-wide">Manage academic courses and unique course identification codes.</p>
          </div>
        </div>
        
        <button className="bg-emerald-500 text-white px-8 py-3.5 rounded-2xl font-black shadow-xl shadow-emerald-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <Plus size={20} />
          ADD COURSE
        </button>
      </div>

      <ProfessionalTable title="Course Overiew" data={data} columns={columns} />
    </div>
  );
};

export default CourseDetails;
