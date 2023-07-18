import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About"; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {

  //Whether dark mode is enabled or not
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = (message, type) => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
        <BrowserRouter>
          <Navbar toggleMode={toggleMode} title="TextModulator" mode={mode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
            <Routes>
              <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word
               Counter, Character Counter, Remove extra spaces" mode={mode}/>}/>
              <Route exact path='/about' element={<About mode={mode}/>} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;