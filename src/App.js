import React, { useState } from 'react'
import { Box, Button, Typography } from "@mui/material";

const App = () => {
  const [height,setHeight]=useState(0)
  const [weight,setWeight]=useState(0)
  const [bmi,setBmi]=useState("")
  const [message,setMessage]=useState("")

  const calculate=(e)=>{
    e.preventDefault()
    if(weight===0||height===0){
      alert("Please enter valid height and weight")
    }
    else{
      let bmi=(weight/(height*height)*703)
      setBmi(bmi.toFixed(1))
      if(bmi<25){
        setMessage("You are underweight")
      }else if(bmi>=25&&bmi<30){
        setMessage("You are healthy weight")
      }
      else{
        setMessage("You are overweight")
      }
    }
    console.log("calculated bmi")
  }
  const reload=()=>{
    window.location.reload()
  }
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} >
      <Box sx={{width:"25rem",height:"25rem",borderRadius:"0.5rem",boxShadow:"10px 10px 25px #000",display:"flex",flexDirection:"column",padding:"1rem"}} >
      <Typography fontFamily={"monospace"} fontSize={"2rem"} fontWeight={"700"} textAlign={"center"}>BMI-Calculator</Typography>
        <form style={{height:"90%"}} onSubmit={calculate} >
          <label style={{fontFamily:"sans-serif",fontSize:"20px",marginBottom:"2rem"}} >Height (in cm):</label>
          <br></br>
          <input type='number' placeholder='Enter the height' value={height} onChange={(e)=>setHeight(e.target.value)} style={{width:"95%",height:"40px",borderRadius:"10px",margin:"15px 0",color:"black",paddingInlineStart:"1rem"}} />
          <br></br>
          <label style={{fontFamily:"sans-serif",fontSize:"20px",marginBottom:"2rem"}}>Weight (in kg):</label>
          <br></br>
          <input type='number' placeholder='Enter the weight' value={weight} onChange={(e)=>setWeight(e.target.value)} style={{width:"95%",height:"40px",borderRadius:"10px",margin:"15px 0",color:"black",paddingInlineStart:"1rem"}} />
          <div style={{width:"100%",display:'flex',justifyContent:"space-between"}} >
            <Button variant='contained' type='submit'>Submit</Button>
            <Button variant='outlined' color='error' onClick={reload} >Reload</Button>
          </div>
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </form>
      </Box>
    </Box>
  )
}

export default App