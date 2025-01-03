// import logo from './logo.svg';
// import './App.css';
// import CompanyManagement from './components/admin/admin';
// import Dashboard from './components/user/user';
// import CalendarView from './components/view/CalendarView';



// function App() {
//   return (
   
//        <Router>
//       <nav>
//         <Link to="/admin">Admin</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/log">Log Communication</Link> | <Link to="/calendar">Calendar</Link>
//       </nav>
//       <Routes>
//         <Route path="/admin" element={<CompanyManagement />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/log" element={<LogCommunication />} />
//         <Route path="/calendar" element={<CalendarView events={[]} />} />
//       </Routes>
//     </Router>
   
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CalendarView from "./components/user/Calendar";
import LogCommunication from "./components/user/LogCommunication"; 
import Dashboard from "./components/user/Dashboard"; 
import CompanyManagement from "./components/admin/CompanyManagement";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/admin">Admin</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/log">Log Communication</Link> | <Link to="/calendar">Calendar</Link>
      </nav>
      <Routes>
        <Route path="/admin" element={<CompanyManagement />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/log" element={<LogCommunication />} />
        <Route path="/calendar" element={<CalendarView events={[]} />} />
      </Routes>
    </Router>
  );
}

export default App;
