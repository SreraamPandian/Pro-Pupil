import React from 'react';
import { ArrowUpDown, ChevronLeft, ChevronRight, Search, Filter } from 'lucide-react';

const ProfessionalTable = ({ title, data = [], columns = [], hideHeader = false, hideControls = false }) => {
  return (
    <div className={`bg-white/60 backdrop-blur-md rounded-[2.5rem] ${!hideHeader ? 'border border-white/40 shadow-[20px_20px_60px_#d1d9e6,-20px_-20px_60px_#ffffff]' : ''} overflow-hidden transition-all duration-500`}>
      {/* Table Header Section */}
      {!hideHeader && (
        <div className="px-8 py-6 border-b border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-black text-slate-800 tracking-tight">{title}</h3>
            <p className="text-xs text-slate-500 font-medium">Manage and monitor all records efficiently</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-slate-100/50 p-2 rounded-xl text-slate-500 hover:text-blue-600 cursor-pointer transition-colors">
              <Filter size={18} />
            </div>
            <div className="bg-blue-600 text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-lg shadow-blue-200 hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Export Data
            </div>
          </div>
        </div>
      )}
      
      <div className={`${hideHeader ? 'p-0' : 'p-8'}`}>
        {/* Table Controls */}
        {!hideControls && (
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex items-center gap-3 text-sm font-bold text-slate-500 bg-slate-50/50 px-4 py-2 rounded-xl border border-white/40 shadow-inner">
              Show 
              <select className="bg-transparent outline-none text-slate-800 cursor-pointer">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              items
            </div>
            
            <div className="flex items-center gap-2 bg-white/50 border border-white/40 px-4 py-2 rounded-xl shadow-inner w-full md:w-64 group transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-100">
              <Search size={16} className="text-slate-400 group-focus-within:text-blue-500" />
              <input type="text" placeholder="Filter records..." className="bg-transparent outline-none text-sm w-full" />
            </div>
          </div>
        )}

        {/* The Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/20 shadow-sm bg-white/30 backdrop-blur-sm">
          <table className="min-w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                {columns.map((col, idx) => (
                  <th key={idx} className="px-6 py-4 font-bold text-slate-700 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {col.label}
                      <ArrowUpDown size={12} className="text-slate-300" />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-white/10 hover:bg-white/60 transition-all duration-200 group">
                  {columns.map((col, j) => (
                    <td key={j} className={`px-6 py-4 text-slate-600 whitespace-nowrap ${col.primary ? 'font-bold text-blue-600' : 'font-medium'}`}>
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Final Pagination Neomorphism Style */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Showing <span className="text-slate-700">1</span> to <span className="text-slate-700">5</span> of <span className="text-slate-700">{data.length}</span> entries
          </div>
          
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-white/40 text-slate-400 hover:text-blue-600 shadow-sm hover:shadow-md transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 text-white font-black shadow-lg shadow-blue-200">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-white/40 text-slate-400 hover:text-blue-600 shadow-sm hover:shadow-md transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTable;
