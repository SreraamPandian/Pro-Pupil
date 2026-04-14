import React from 'react';
import ProfessionalTable from '../components/ProfessionalTable';

const PagePlaceholder = ({ title, icon: Icon, description }) => {
  // Mock data for the table to preserve "content" look
  const columns = [
    { label: 'Staff Name', key: 'staff', primary: true },
    { label: 'Dept/Block', key: 'block' },
    { label: 'Category', key: 'category' },
    { label: 'Status', key: 'status' },
    { label: 'Last Updated', key: 'updated' },
  ];

  const data = [
    { staff: "Dr. Huned Bohari", block: "HCT 1st Floor", category: "Core", status: "Active", updated: "14-04-2026" },
    { staff: "Mutaz Ayed", block: "HCT 1st Floor", category: "Support", status: "Pending", updated: "14-04-2026" },
    { staff: "Adnan Saeed", block: "Ground Floor", category: "Admin", status: "Active", updated: "14-04-2026" },
    { staff: "Janar Jeksen", block: "HCT 1st Floor", category: "Core", status: "Active", updated: "14-04-2026" },
    { staff: "Samantha Stephen", block: "HCT 1st Floor", category: "Core", status: "Inactive", updated: "14-04-2026" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">{title}</h1>
          <p className="text-slate-500 font-medium tracking-wide">{description || "Access and manage all modules securely."}</p>
        </div>
      </div>


      {/* The main content table */}
      <ProfessionalTable title={`${title} Overview`} data={data} columns={columns} />
    </div>
  );
};

export default PagePlaceholder;
