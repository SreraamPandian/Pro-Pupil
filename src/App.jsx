import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import TeacherLayout from './components/TeacherLayout';
import Dashboard from './pages/Dashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import AttendanceScreen from './pages/teacher/AttendanceScreen';
import TeacherReports from './pages/teacher/TeacherReports';
import AddStudent from './pages/students/AddStudent';
import StudentDetails from './pages/students/StudentDetails';
import ImportPage from './pages/ImportPage';
import AddFaculty from './pages/faculty/AddFaculty';
import FacultyDetails from './pages/faculty/FacultyDetails';
import TimetableDetails from './pages/timetable/TimetableDetails';
import TimeslotDetails from './pages/timetable/TimeslotDetails';
import PeriodDetails from './pages/timetable/PeriodDetails';
import OverallTimeslot from './pages/timetable/OverallTimeslot';
import SectionManagement from './pages/master/SectionManagement';
import SemesterDetails from './pages/master/SemesterDetails';
import FacultyTypeDetails from './pages/master/FacultyTypeDetails';
import StateDetails from './pages/master/StateDetails';
import CityDetails from './pages/master/CityDetails';
import RegionDetails from './pages/master/RegionDetails';
import AcademicYearDetails from './pages/master/AcademicYearDetails';
import BlockNoManagement from './pages/master/BlockNoManagement';
import CourseDetails from './pages/master/CourseDetails';
import BloodGroupManagement from './pages/master/BloodGroupManagement';
import SubjectManagement from './pages/master/SubjectManagement';
import FacultyAssignment from './pages/faculty/FacultyAssignment';
import DepartmentManagement from './pages/master/DepartmentManagement';
import TimetableManagement from './pages/timetable/TimetableManagement';
import Settings from './pages/Settings';
import AddDevice from './pages/device/AddDevice';
import DeviceDetails from './pages/device/DeviceDetails';
import FileLogs from './pages/access-logs/FileLogs';
import StudentReport from './pages/analytics/StudentReport';
import FacultyReport from './pages/analytics/FacultyReport';
import LoginPage from './pages/LoginPage';
import { Upload } from 'lucide-react';

const StudentBulkImport = () => <ImportPage title="Student Bulk Import" icon={Upload} fileLabel="Upload Student File" />;
const StudentCourseImport = () => <ImportPage title="Student Course Bulk Import" icon={Upload} fileLabel="Upload Student Course File" />;
const FacultyBulkImport = () => <ImportPage title="Faculty Bulk Import" icon={Upload} fileLabel="Upload Faculty File" />;
const FacultyCourseImport = () => <ImportPage title="Faculty Course Bulk Import" icon={Upload} fileLabel="Upload Faculty Course File" />;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [role, setRole] = useState(localStorage.getItem('userRole') || 'superadmin');
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem('isLoggedIn') === 'true');
      setRole(localStorage.getItem('userRole') || 'superadmin');
    };
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
    setRole(localStorage.getItem('userRole') || 'superadmin');
    localStorage.setItem('isLoggedIn', status);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
  };

  if (!isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      
      {/* Super Admin Routes */}
      {role === 'superadmin' && (
        <Route path="/" element={<MainLayout onLogout={handleLogout} />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="students/add" element={<AddStudent />} />
          <Route path="students/details" element={<StudentDetails />} />
          <Route path="students/bulk-import" element={<StudentBulkImport />} />
          <Route path="students/course-import" element={<StudentCourseImport />} />
          <Route path="faculty/add" element={<AddFaculty />} />
          <Route path="faculty/details" element={<FacultyDetails />} />
          <Route path="faculty/assignment" element={<FacultyAssignment />} />
          <Route path="faculty/bulk-import" element={<FacultyBulkImport />} />
          <Route path="faculty/course-import" element={<FacultyCourseImport />} />
          <Route path="timetable/details" element={<TimetableDetails />} />
          <Route path="timetable/management" element={<TimetableManagement />} />
          <Route path="timetable/timeslot" element={<TimeslotDetails />} />
          <Route path="timetable/periods" element={<PeriodDetails />} />
          <Route path="timetable/overall" element={<OverallTimeslot />} />
          <Route path="master/section" element={<SectionManagement />} />
          <Route path="master/semester" element={<SemesterDetails />} />
          <Route path="master/faculty-type" element={<FacultyTypeDetails />} />
          <Route path="master/state" element={<StateDetails />} />
          <Route path="master/city" element={<CityDetails />} />
          <Route path="master/region" element={<RegionDetails />} />
          <Route path="master/academic-year" element={<AcademicYearDetails />} />
          <Route path="master/block" element={<BlockNoManagement />} />
          <Route path="master/course" element={<CourseDetails />} />
          <Route path="master/subject" element={<SubjectManagement />} />
          <Route path="master/department" element={<DepartmentManagement />} />
          <Route path="master/blood-group" element={<BloodGroupManagement />} />
          <Route path="settings" element={<Settings />} />
          <Route path="device/add" element={<AddDevice />} />
          <Route path="device/details" element={<DeviceDetails />} />
          <Route path="access-logs/file-logs" element={<FileLogs />} />
          <Route path="analytics/student" element={<StudentReport />} />
          <Route path="analytics/faculty" element={<FacultyReport />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      )}

      {/* Teacher Routes */}
      {role === 'teacher' && (
        <Route path="/" element={<TeacherLayout onLogout={handleLogout} />}>
          <Route index element={<Navigate to="/teacher/dashboard" replace />} />
          <Route path="dashboard" element={<Navigate to="/teacher/dashboard" replace />} />
          <Route path="teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="teacher/attendance" element={<AttendanceScreen />} />
          <Route path="teacher/reports" element={<TeacherReports />} />
          <Route path="*" element={<Navigate to="/teacher/dashboard" replace />} />
        </Route>
      )}

      <Route path="*" element={<Navigate to={role === 'teacher' ? "/teacher/dashboard" : "/dashboard"} replace />} />
    </Routes>
  );
}

export default App;
