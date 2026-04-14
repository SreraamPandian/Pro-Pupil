import React from 'react';
import { BarChart, Search, RotateCcw, Download, Calendar, BookOpen, Layers, UserCheck } from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';
import { FilterSelectWithIcon } from '../timetable/TimetableDetails';

const StatusChip = ({ status }) => {
  let style = "";
  if (status.includes("(P)")) style = "text-emerald-600 bg-emerald-50 border-emerald-100";
  else if (status.includes("(LP)")) style = "text-amber-500 bg-amber-50 border-amber-100";
  else if (status === "Absent") style = "text-rose-500 bg-rose-50 border-rose-100";
  else return status;

  return (
    <span className={`px-2 py-1 rounded-lg border font-black text-[10px] whitespace-nowrap ${style}`}>
      {status}
    </span>
  );
};

const StudentReport = () => {
  const columns = [
    { label: 'Date', key: 'date', primary: true },
    { label: 'Student ID', key: 'uid' },
    { label: 'Name', key: 'name' },
    { label: 'Department', key: 'dept' },
    { label: 'Course/Subject', key: 'course' },
    { label: 'Subject Teacher', key: 'teacher' },
    { label: 'In Time', key: 'inTime' },
    { label: 'Out Time', key: 'outTime' },
    { label: 'Total Duration', key: 'duration' },
    { label: 'Status', key: 'status' },
  ];

  const data = [
    { 
      date: "14-04-2026", uid: "STU- UAE-1024", name: "Haneen Al Hammadi", dept: "Computer Science",
      course: "EGN-1003 (Python)", teacher: "Dr. Huned Bohari", 
      inTime: "08:32 AM", outTime: "09:30 AM", duration: "58m",
      status: <StatusChip status="Present (P)" />
    },
    { 
      date: "14-04-2026", uid: "STU-UAE-1025", name: "Naveed Abdullah", dept: "Mechanical Eng.",
      course: "MEC-101 (Dynamics)", teacher: "Prof. Sarah Khan", 
      inTime: "08:45 AM", outTime: "09:30 AM", duration: "45m",
      status: <StatusChip status="Late (LP)" />
    },
    { 
      date: "14-04-2026", uid: "STU-UAE-1026", name: "Surya Prakash", dept: "Civil Eng.",
      course: "CIV-202 (Structures)", teacher: "Engr. Zayed Rashid", 
      inTime: "-", outTime: "-", duration: "0",
      status: <StatusChip status="Absent" />
    },
    { 
      date: "14-04-2026", uid: "STU-UAE-1027", name: "Latifa Mohammed", dept: "Business",
      course: "BUS-301 (Marketing)", teacher: "Dr. Faisal Ahmed", 
      inTime: "10:02 AM", outTime: "11:00 AM", duration: "58m",
      status: <StatusChip status="Present (P)" />
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
            <BarChart size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">Student Attendance Report</h1>
            <p className="text-slate-500 font-medium tracking-wide">Period-wise activity logs with in/out timestamps and total durations.</p>
          </div>
        </div>
        
        <button className="bg-emerald-500 text-white px-8 py-3.5 rounded-2xl font-black shadow-xl shadow-emerald-100 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
          <Download size={20} />
          DOWNLOAD (xlsx)
        </button>
      </div>

      <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/40 p-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          <FilterSelectWithIcon icon={Calendar} label="Academic Year" options={["All", "2026-27"]} />
          <FilterSelectWithIcon icon={BookOpen} label="Semester" options={["All", "Sem 1"]} />
          <FilterSelectWithIcon icon={Layers} label="Course" options={["All", "MEC-101"]} />
          <FilterSelectWithIcon icon={UserCheck} label="Status" options={["All", "Present", "Absent"]} />
          
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">From Date</label>
            <input type="date" className="bg-white/50 border border-white/40 px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">To Date</label>
            <input type="date" className="bg-white/50 border border-white/40 px-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
          </div>

          <div className="flex items-center gap-4 lg:col-span-2 justify-end">
            <button className="bg-blue-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2">
              <Search size={18} />
              Generate
            </button>
            <button className="bg-white text-slate-400 border border-slate-100 px-6 py-3.5 rounded-2xl font-black shadow-sm hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center gap-2">
              <RotateCcw size={18} />
              Clear
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-[2rem] border border-white/40 shadow-xl overflow-hidden">
        <ProfessionalTable title="Attendance Ledger" data={data} columns={columns} />
      </div>
    </div>
  );
};

export default StudentReport;
export { StatusChip };
