import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { AuthProvider } from './authContext'; // Import AuthProvider
import AddDepartment from './screens/AddDepartment';
import AddCourse from './screens/AddCourse';
import AddLab from './screens/AddLab';
import AddTeacher from './screens/AddTeacher';
import AddLabTeacher from './screens/AddLabTeacher';
import AddRoom from './screens/AddRoom';
import AddTime from './screens/AddTime';

export default function App() {
 return (
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/add-department' element={<AddDepartment />} />
          <Route path='/add-course' element={<AddCourse />} />
          <Route path='/add-lab' element={<AddLab />} />
          <Route path='/add-teacher' element={<AddTeacher />} />
          <Route path='/add-labteacher' element={<AddLabTeacher />} />
          <Route path='/add-room' element={<AddRoom />} />
          <Route path='/add-time' element={<AddTime />} />

        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
 );
}
