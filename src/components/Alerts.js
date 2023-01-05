import React from 'react'

export default function Alerts(props) {
  return (
    <div style={{height:"50px" }} className="container my-2">
 { props.alert&& <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
  <strong> {props.alert.typ}</strong>  {props.alert.msg}
</div>}
  </div>
  )
}
