import React, { useState } from 'react';
import ProfessionalTable from '../../components/ProfessionalTable';
import { BookOpen, Search, Filter, Plus, Download } from 'lucide-react';

const SubjectManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    { label: 'Subject Code', key: 'code' },
    { label: 'Subject Name', key: 'name' },
    { label: 'Department', key: 'department' },
    { label: 'Type', key: 'type' },
    { label: 'Credits', key: 'credits' },
    { label: 'Status', key: 'status' }
  ];

  const data = [
    { id: 1, code: 'SUB-101', name: 'Digital Signal Processing', department: 'Electronics', type: 'Core', credits: '4', status: 'Active' },
    { id: 2, code: 'SUB-102', name: 'Cloud Computing', department: 'Computer Science', type: 'Elective', credits: '3', status: 'Active' },
    { id: 3, code: 'SUB-103', name: 'Robotics & AI', department: 'Mechatronics', type: 'Core', credits: '4', status: 'Inactive' },
    { id: 4, code: 'SUB-104', name: 'Cyber Security', department: 'Computer Science', type: 'Core', credits: '3', status: 'Active' },
    { id: 5, code: 'SUB-105', name: 'Business Ethics', department: 'Management', type: 'Elective', credits: '2', status: 'Active' },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-700">
            Subject Management
          </h1>
          <p className="text-gray-500 mt-1">Configure and manage academic subjects across all departments.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium shadow-sm">
            <Download size={18} />
            Export
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-lg shadow-blue-200">
            <Plus size={18} />
            Add Subject
          </button>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search subjects by name or code..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-600">
            <Filter size={16} />
            <select className="bg-transparent border-none focus:ring-0 text-sm font-medium">
              <option>All Departments</option>
              <option>Computer Science</option>
              <option>Electronics</option>
              <option>Management</option>
            </select>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-600">
            <BookOpen size={16} />
            <select className="bg-transparent border-none focus:ring-0 text-sm font-medium">
              <option>All Types</option>
              <option>Core</option>
              <option>Elective</option>
            </select>
          </div>
        </div>
      </div>

      {/* Subjects Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <ProfessionalTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default SubjectManagement;
