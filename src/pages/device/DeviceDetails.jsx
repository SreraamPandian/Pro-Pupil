import React from 'react';
import { Laptop, Edit, Search } from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';

const DeviceDetails = () => {
  const columns = [
    { label: 'Block', key: 'block', primary: true },
    { label: 'Class Room', key: 'room' },
    { label: 'Name', key: 'name' },
    { label: 'IP', key: 'ip' },
    { label: 'Protocol', key: 'protocol' },
    { label: 'Model', key: 'model' },
    { label: 'Status', key: 'status' },
    { label: 'Updated On', key: 'updated' },
    { label: 'Action', key: 'action' },
  ];

  const data = [
    { 
      block: "HCT 1st Floor", room: "ADA03ALB0180", name: "HCT Classroom 2 Entry", ip: "165.40.10.102", protocol: "ISAPI", model: "-", status: <span className="text-emerald-600 font-black">Active</span>, updated: "20-06-2024 12:13 PM",
      action: <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><Edit size={16} /></button>
    },
    { 
      block: "HCT 1st Floor", room: "ADA03ALB0180", name: "HCT Classroom 1 Entry", ip: "165.40.10.102", protocol: "ISAPI", model: "-", status: <span className="text-emerald-600 font-black">Active</span>, updated: "20-06-2024 12:13 PM",
      action: <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><Edit size={16} /></button>
    },
    { 
      block: "Ground Floor Switch", room: "Language department", name: "Language department", ip: "165.40.10.102", protocol: "ISAPI", model: "-", status: <span className="text-emerald-600 font-black">Active</span>, updated: "20-06-2024 12:13 PM",
      action: <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><Edit size={16} /></button>
    },
    { 
        block: "Ground Floor Switch", room: "Aptitude Lab", name: "Aptitude Lab", ip: "165.40.10.101", protocol: "ISAPI", model: "-", status: <span className="text-emerald-600 font-black">Active</span>, updated: "20-06-2024 12:13 PM",
        action: <button className="p-2 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-100 hover:scale-110 active:scale-90 transition-all"><Edit size={16} /></button>
      },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
          <Laptop size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Device Details</h1>
          <p className="text-slate-500 font-medium tracking-wide">Manage and monitor all connected hardware devices synchronously.</p>
        </div>
      </div>

      <ProfessionalTable title="Connected Device List" data={data} columns={columns} />
    </div>
  );
};

export default DeviceDetails;
