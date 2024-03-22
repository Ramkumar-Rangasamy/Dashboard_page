
//Bootstrap imported
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

//imported all components here
import Navbar from './Components/Navbar/Navbar';
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
     <Navbar/>
     <Sidebar/>
    </>
  );
}

export default App;
