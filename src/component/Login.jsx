import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
 
  return (
    <div>

<Typography variant='h3' style={{color:'darkblue'}}>BlogApp Login</Typography><br></br>
   
      
        <TextField
          
          id="outlined-basic"
          label="Email" 
          
variant="outlined"
          
          
        />
        <br></br>
        <br></br>
        <TextField
          
          id="outlined-basic"
          label="Password" 
          
variant="outlined"
          
          
        />
        <br></br>
        <br></br>
        
<Button variant='contained'>Login</Button>
<br></br>
<br></br>
<Typography style={{color:'darkblue'}}>
  <Link to={'/signup'}>New user? Please Click here</Link></Typography>


</div>
  )
}

export default Login