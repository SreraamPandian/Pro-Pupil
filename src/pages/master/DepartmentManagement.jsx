import React, { useState } from 'react';
import ProfessionalTable from '../../components/ProfessionalTable';
import { Layout, Search, Plus, Users, BookOpen } from 'lucide-react';

const DepartmentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    { label: 'Dept Name', key: 'name' },
    { label: 'Head of Dept', key: 'hod' },
    { label: 'Total Faculty', key: 'facultyCount' },
    { label: 'Total Students', key: 'studentCount' },
    { label: 'Code', key: 'code' },
    { label: 'Status', key: 'status' }
  ];

  const data = [
    { id: 1, name: 'Computer Science', hod: 'Dr. Faisal Ahmed', facultyCount: '15', studentCount: '450', code: 'CSE', status: 'Active' },
    { id: 2, name: 'Electronics & Comm', hod: 'Dr. Latifa Al Falasi', facultyCount: '12', studentCount: '320', code: 'ECE', status: 'Active' },
    { id: 3, name: 'Mechatronics', hod: 'Prof. Saeed Ali', facultyCount: '8', studentCount: '200', code: 'MCT', status: 'Active' },
    { id: 4, name: 'Business Management', hod: 'Dr. Mariam Obaid', facultyCount: '10', studentCount: '550', code: 'BBA', status: 'Active' },
    { id: 5, name: 'Civil Engineering', hod: 'Dr. Hassan Juma', facultyCount: '9', studentCount: '180', code: 'CIV', status: 'Active' },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-700">
            Department Management
          </h1>
          <p className="text-gray-500 mt-1">Define and oversee academic departments and their administrative heads.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-lg shadow-blue-200">
            <Plus size={18} />
            Create Department
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Layout, label: 'Total Depts', value: '12', color: 'blue' },
          { icon: Users, label: 'Total HODs', value: '12', color: 'indigo' },
          { icon: Users, label: 'Total Faculty', value: '148', color: 'purple' },
          { icon: BookOpen, label: 'Available Courses', value: '24', color: 'emerald' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className={`p-3 bg-${stat.color}-50 text-${stat.color}-600 rounded-xl`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Control Bar */}
      <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search departments..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Dept Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <ProfessionalTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default DepartmentManagement;
