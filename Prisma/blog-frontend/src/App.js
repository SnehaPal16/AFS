import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";
import BlogDetails from "./pages/BlogDetails";
import UserAdminLogin from "./pages/UserAdminLogin";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin"
import AdminRegister from "./pages/AdminRegister";
import UserAdminRegister from "./pages/UserAdminRegister";
import Dashboard from "./pages/Dashboard";
import AdminDashboardRoute from "./components/AdminDashboardRoute";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserAdminLogin />} />
        <Route path="/userLogin" element={<UserLogin/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>

        <Route path="/register" element={<UserAdminRegister/>} />
        <Route path="/userRegister" element={<Register/>}/>
        <Route path="/adminRegister" element={<AdminRegister/>}/>

        <Route path="/admin" element=
        {<AdminDashboardRoute>
            <Dashboard/>
          </AdminDashboardRoute>
        }/>

        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;