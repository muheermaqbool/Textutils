import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  let [sty,setsty]=useState(true)
      useEffect(()=>{
        let nav = document.getElementById("nav")
        window.addEventListener("scroll",function(){
        if (window.pageYOffset >100) {
          nav.style.position="fixed"
          nav.style.boxShadow="2px 2px 2px black"
          nav.style.top="0px"
          nav.style.width="100%"
        }else{
          nav.style.position=""
          nav.style.boxShadow=""
        }
      })
      })    
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div className="container-fluid" style={props.navcolor} id='nav' >
        <a className="navbar-brand" href="/" style={props.navcolor}>TEXTUTILS</a>
        <button className='navbar-toggler p-0' type="button"   data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id='toggle_button'>
          <span className={sty ? "  rounded border-0  p-3  navbar-toggler-icon" : "  p-3  rounded  border-0  material-symbols-outlined" }  onClick={()=>setsty(!sty)} ></span>
          {console.log(sty)}
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={props.newcolor}>    
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="about" >About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" html="flexSwitchCheckDefault" >{props.textmode}</label>
              </div>
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}
