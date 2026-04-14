import React, { useState } from 'react';
import ProfessionalTable from '../../components/ProfessionalTable';
import { UserPlus, Search, Filter, CheckCircle, Clock } from 'lucide-react';

const FacultyAssignment = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    { label: 'Faculty Name', key: 'facultyName' },
    { label: 'Department', key: 'department' },
    { label: 'Assigned Subjects', key: 'subjects' },
    { label: 'Load (Hrs/Week)', key: 'load' },
    { label: 'Semester', key: 'semester' },
    { label: 'Assigned By', key: 'assignedBy' }
  ];

  const data = [
    { id: 1, facultyName: 'Dr. Ahmed Al Mansoori', department: 'Computer Science', subjects: 'Advanced AI, Machine Learning', load: '12', semester: 'Fall 2024', assignedBy: 'Super Admin' },
    { id: 2, facultyName: 'Dr. Fatma Belhoul', department: 'Electronics', subjects: 'Signals & Systems', load: '9', semester: 'Fall 2024', assignedBy: 'Super Admin' },
    { id: 3, facultyName: 'Prof. Zayed Khalifa', department: 'Computer Science', subjects: 'Data Structures', load: '15', semester: 'Fall 2024', assignedBy: 'Super Admin' },
    { id: 4, facultyName: 'Dr. Sarah Smith', department: 'Management', subjects: 'HR Management', load: '6', semester: 'Spring 2024', assignedBy: 'Admin (Branch A)' },
    { id: 5, facultyName: 'Dr. Mohammed Rashid', department: 'Civil Engineering', subjects: 'Structural Analysis', load: '10', semester: 'Fall 2024', assignedBy: 'Super Admin' },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-700">
            Faculty-Subject Assignment
          </h1>
          <p className="text-gray-500 mt-1">Allocate subjects to faculty members and manage their teaching workload.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-lg shadow-blue-200">
            <UserPlus size={18} />
            New Assignment
          </button>
        </div>
      </div>

      {/* Load Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100/50">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 text-white rounded-xl">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-600">Assigned Faculty</p>
              <h3 className="text-2xl font-bold text-blue-900">42 / 45</h3>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100/50">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-600 text-white rounded-xl">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-green-600">Total Weekly Load</p>
              <h3 className="text-2xl font-bold text-green-900">480 Hrs</h3>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 rounded-2xl border border-purple-100/50">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-600 text-white rounded-xl">
              <Filter size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-purple-600">Pending Slots</p>
              <h3 className="text-2xl font-bold text-purple-900">8 Classes</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by faculty name or subject..."
            className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-600">
            <Filter size={16} />
            <select className="bg-transparent border-none focus:ring-0 text-sm font-medium">
              <option>Full-Time</option>
              <option>Visiting</option>
            </select>
          </div>
        </div>
      </div>

      {/* Assignment Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <ProfessionalTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default FacultyAssignment;
