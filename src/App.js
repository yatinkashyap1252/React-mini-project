import React, { useState } from 'react'
import "./index.css"
import { Box, Button, Typography } from '@mui/material'

const App = () => {
  const [principleamt,setPrincipleamt]=useState("")
  const [roi,setROI]=useState("")
  const [interval,setInterval]=useState("")
  const [message,setMessage]=useState("")
  const [invalid,setInvalid]=useState("")
  const process=(e)=>{
    e.preventDefault()
    if(principleamt==="" || roi==="" || interval===""){
      console.log("hello")
      setMessage("Invalid")
      setInvalid("Enter the valid data and fill all fields!")
      setTimeout(() => {
        reload()
      }, 2000);
    }
    else{
      let finalamount=parseInt(principleamt)+((parseInt(principleamt)*parseInt(roi)*parseInt(interval))/100)
      setMessage(parseInt(finalamount))
      setTimeout(() => {
        reload()
      }, 5000);
    }
  }
  const reload=()=>{
    window.location.reload()
  }
  return (
    <div className='flex items-center justify-center bg-gray-600 h-screen' >
      <Box sx={{ width: "25rem", height: "37rem", backgroundColor: "rgb(40 45 52 / 86%)", color: "white", padding: "1rem", display: "flex", alignItems: "center", flexDirection: "column" }} >
        <Typography fontSize={"30px"} fontWeight={"700"} textTransform={"capitalize"} >interest-Calculator</Typography>
        <form className='w-full h-full mt-3 flex items-center flex-col' >
          <div className='bg-lime-400' style={{width:"100%",height:"5.5rem",fontSize:"3rem",display:'flex',justifyContent:"center",alignItems:"center",color:"black",marginBottom:"1rem"}} >{"$"+message}</div>
          <label>Principle Amount($):</label>
          <input type='number' placeholder='Enter the principle amount' value={principleamt} onChange={(e)=>setPrincipleamt(e.target.value)} style={{width:"100%",height:"45px",margin:"1rem 0",paddingInlineStart:"10px",borderRadius:"15px",color:"black"}} />
          <label>Rate of Interest(ROI):</label>
          <input type='number' placeholder='Enter the rate of interest' value={roi} onChange={(e)=>setROI(e.target.value)} style={{width:"100%",height:"45px",paddingInlineStart:"10px",margin:"1rem 0",borderRadius:"15px",color:"black"}} />
          <label>Interval(in years):</label>
          <input type='number' placeholder='Enter the Interval' value={interval} onChange={(e)=>setInterval(e.target.value)} style={{width:"100%",height:"45px",paddingInlineStart:"10px",margin:"1rem 0",borderRadius:"15px",color:"black"}} />
          <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"1rem"}} >
            <Button type='submit' variant='contained' onClick={process} >Calculate</Button>
            <Button type='submit' variant='outlined' color='error' onClick={reload} >Refresh</Button>
          </div>
          <p style={{color:"red"}} >{invalid}</p>
        </form>
      </Box>
    </div>
  )
}

export default App