
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./components/ENTRY/Entry";
import Login from "./components/Login/login";
import Signup from "./components/SignupPage/Signuup";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Entry/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route to="" element={} /> */}
        {/* <Route to="" element={} /> */}
        {/* <Route to="" element={} /> */}







        </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
  );
}

export default App;
