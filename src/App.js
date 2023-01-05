import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import { useState } from 'react';
function App() {
  let [alert,setalert]=useState(null)
  let [navcolor,setnavcolor]=useState({
    backgroundColor:"white",
    color:"black"
  })
  const showalert = (message,type)=>{
    setalert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  let [modeText,settext]=useState("Enable Dark Mode")
  let[mode, setmode]=useState({
    color:"#353935",
    backgroundColor:"white"
  })
  const toggleMode = ()=>{
    if(mode.color==="#353935"){
      setmode({  color:"white",
      backgroundColor:"#353935"})
      settext("Disable Dark mode")
      document.body.style.backgroundColor="#353935"
     showalert("dark mode is enabled","success")
      setnavcolor({
        backgroundColor:"#717171",
        color:"white"
      })
    }else{
      setmode({  color:"#353935",
      backgroundColor:"white"})
     settext("Enable Dark mode")
      document.body.style.backgroundColor="white"
     showalert("light mode is enables","success")
     setnavcolor({
      backgroundColor:"white",
      color:"black"
    })
    }
  }
  return (
    <>
    <Navbar showalert={showalert} textmode={modeText} toggleMode={toggleMode} navcolor={navcolor} />
    <Alerts alert={alert} />
      <Routes>
        <Route path='/' element={<TextForm headding="enter your text below to analyz" showalert={showalert}  mode={mode}/>}/>
        <Route path='about' element={<About mode={mode}/>}/>
      </Routes>
    </>
  );
}
export default App;
