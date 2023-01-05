import React,{useState} from 'react'
export default function TextForm(props) {
    let [Text,setText]=useState("");
      let handelEmpety =()=>{
        if(Text===""){
          props.showalert("Enter somethig in textarea" ,"danger")
        }
      }
        let handeCapital =()=>{
          let newText = Text.toUpperCase();
          setText(newText)
          props.showalert(" Text is Coverted to Capital Case" ,"success")
          handelEmpety();
        }

        let handelLower =()=>{
          let newText = Text.toLocaleLowerCase();
          setText(newText)
          props.showalert(" Text is Coverted to Lower Case" ,"success")
          handelEmpety();
        }
        let handelcopy =()=>{
          navigator.clipboard.writeText(Text)
          props.showalert(" Text is Copied" ,"success")
          handelEmpety();
        }
        let handelCleared =()=>{
          let presentText=""
          setText(presentText)
          props.showalert(" Text is Cleared" ,"success")
          handelEmpety();
        }
      let Getvalue =(e)=>{
        let value = e.target.value
        setText(value)
      } 
  return (
      <>
    <div className='container my-3'style={props.mode}>
        <h2 className='text-capitalize'>{props.headding}</h2>
        <textarea className="form-control"  rows="8" value={Text} id="mybox" onChange={Getvalue} style={props.mode}>{props.mode}</textarea>
        <div className='container'>
        <button type="button" className="btn btn-primary my-2 mx-1" onClick={handeCapital}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary my-2   mx-1" onClick={handelLower}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary my-2  mx-1" onClick={handelcopy}>Copy Text</button>
        <button type="button" className="btn btn-primary my-2  mx-1" onClick={handelCleared}>Clear Text</button>
        </div>
    </div>
        <div className='container' style={props.mode}>
            <h2 className='text-capitalize'>your text summary</h2>
            <p className='text-capitalize'>your words is {Text.split(/\s+/).filter((t)=>t!=="").length } and {Text.length} is your characters</p> 
        </div>
      </>
  )
}
