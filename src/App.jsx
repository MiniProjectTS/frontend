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
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
 );
}
