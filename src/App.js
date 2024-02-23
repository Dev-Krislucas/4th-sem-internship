
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./components/ENTRY/Entry";
import Login from "./components/Login/login";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Entry/>} />
        <Route path="/login" element={<Login />} />
        {/* <Route to="" element={} /> */}
        {/* <Route to="" element={} /> */}
        {/* <Route to="" element={} /> */}
        {/* <Route to="" element={} /> */}







        </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
  );
}

export default App;
