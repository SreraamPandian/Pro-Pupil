import React from 'react';

const StatusChip = ({ status }) => {
  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case 'present':
        return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'absent':
        return 'bg-rose-50 text-rose-600 border-rose-100';
      case 'late':
        return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'early exit':
        return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'on leave':
        return 'bg-slate-50 text-slate-500 border-slate-100';
      case 'stable':
        return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      case 'excellence':
        return 'bg-violet-50 text-violet-600 border-violet-100 shadow-sm shadow-violet-100';
      case 'attention':
        return 'bg-orange-50 text-orange-600 border-orange-100';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <div className={`
      inline-flex items-center px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all
      ${getStatusStyles(status)}
    `}>
      {status}
    </div>
  );
};

export default StatusChip;
