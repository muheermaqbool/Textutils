import React from 'react'
import { Link } from 'react-router-dom'
export default function About(props) {
  return ( 
        <>
    <div className='container my-3' style={props.mode}>
        <div className="card" style={{width:"18rem"}}>
        <img src="./apple-touch-icon.png" className="card-img-top" alt="..."/>
            <div className="card-body" style={props.mode}>
            <h5 className="card-title">About TEXTUTILS</h5>
            <p className="card-text text-capitalize">created by <strong>muheer maqbool</strong> click the down button to his twitter and know more abou him thanks.</p>
            <Link to="www.twitter.com/@MUHEER_MAQBOOL" className="btn btn-primary stretched-link">Go To Twitter</Link>
            </div>
        </div>
    </div>
        </>
  )
}
