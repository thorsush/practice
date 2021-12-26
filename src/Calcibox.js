import React,{useState} from 'react';


export default function Calcibox() {
    
    let [display, setdisplay] = useState('');
    const display_fun=(event)=>{
        if( event.target.name==="AC")
            return setdisplay('')
         else if(event.target.name==="CE")
            return display==='ERROR'?alert("Please clear the field"):setdisplay(display = display.substring(0, display.length - 1))
         else 
             return display==='ERROR'?alert("Please clear the field"):setdisplay(display?`${display.concat(event.target.name)}`:event.target.name)
         
    }
    const calculate=()=>{
        try
        {
            setdisplay(eval(display));
            
        }
        catch(err)
        {
            setdisplay("ERROR")
        }
    }
    
    return (
      
        <div className='container'>
               <h1>Calculator</h1>
         <div className='calci-look'>
         <input  value={display}></input>
        
           <div className='buttons'>
           <button className="border operators" name="AC" onClick={display_fun} id='clear'>AC</button>
                <button className="border operators" name="CE" onClick={display_fun} >CE</button>
                
                <button className="border operators" name="**" onClick={display_fun} >^</button>
                <button className="border operators" name="*"  onClick={display_fun} >*</button>
                <button className="border" name="1"  onClick={display_fun} >1</button>
                <button className="border" name="2"  onClick={display_fun} >2</button>
                <button className="border" name="3"  onClick={display_fun} >3</button>
                <button className="border operators" name="+"  onClick={display_fun} >+</button>
                <button className="border" name="4"  onClick={display_fun} >4</button>
                <button className="border" name="5"  onClick={display_fun} >5</button>
                <button className="border" name="6"  onClick={display_fun} >6</button>
                <button className="border operators" name="-"  onClick={display_fun} >-</button>
                <button className="border" name="7"  onClick={display_fun} >7</button>
                <button className="border" name="8"  onClick={display_fun} >8</button>
                <button className="border" name="9"  onClick={display_fun} >9</button>
                <button className="border operators" name="/"  onClick={display_fun} >/</button>
                <button className="border" name="."  onClick={display_fun} >.</button>
                <button className="border" name="0"  onClick={display_fun} >0</button>
                <button className="border operators" name="%"  onClick={display_fun} >%</button>
                <button className="border operators" name="="  onClick={calculate} >=</button>
           </div>
        </div>
      </div>
     
    )
}
