import { Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import AdminLogin from "./pages/AdminLogin";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import StudentRegister from "./pages/StudentRegister";
import AdminRegister from "./pages/AdminRegister";
import LearningSections from "./pages/LearningSections";
import Verbal from "./pages/verbal/Verbal";
import Logical from "./pages/Logical Reasoning/Logical";
import Quants from './pages/Quantitative Aptitude/Quants';
import PracticePage from "./pages/PracticePage";
import TestPage from "./pages/TestPage";
import ResultPage from "./pages/ResultPage";
import ProgressPage from "./pages/ProgressPage";
import Chatbot from "./pages/Chatbot";
import Navbar from "./components/Navbar";
import Technical from "./pages/technical";
import Language from "./pages/language";
import Python from "./pages/python";
import Java from "./pages/java";
import C from "./pages/c";
import CPlusPlusPage from "./pages/cpp";
import SelfPreparation from "./pages/SelfPreparation";
import ManageStudents from "./pages/ManageStudents";
import AddQuestion from "./pages/AddQuestion";
import CreateTest from "./pages/CreateTest";
import ViewReports from "./pages/ViewReports";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />

      {/* FIXED PATHS TO MATCH YOUR NAVIGATION */}
      <Route path="/login/student" element={<StudentLogin />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
      
      <Route path="/register/student" element={<StudentRegister />} />
      <Route path="/register/admin" element={<AdminRegister />} />
      
      <Route path="/learning" element={<LearningSections />} />
      <Route path="/verbal" element={<Verbal />} />
      <Route path="/logical" element={<Logical />} />
      <Route path="/quant" element={<Quants />} />
      
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/tests" element={<TestPage />} />
      <Route path="/results" element={<ResultPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/navbar" element={<Navbar />} /> 
      <Route path="/technical" element={<Technical />} />
      <Route path="/language" element={<Language />} />
      <Route path="/language/python" element={<Python />} />
      <Route path="/language/java" element={<Java />} />
      <Route path="/language/C" element={<C />} />
      <Route path="/language/C++" element={<CPlusPlusPage />} />
      <Route path="/self-prep" element={<SelfPreparation />} />
      <Route path="/admin/manage-students" element={<ManageStudents />} />
      <Route path="/admin/add-question" element={<AddQuestion />} />
      <Route path="/admin/create-test" element={<CreateTest />} />
        <Route path="/admin/view-reports" element={<ViewReports />} />

    </Routes>
  );
}

export default App;