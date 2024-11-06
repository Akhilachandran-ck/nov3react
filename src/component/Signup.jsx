import React from 'react'
import '../App.css'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid2';

const Signup = () => {
  return (
    

      <Box
        sx={{flexGrow:1}}style={{marginTop:'10%',marginLeft:'20%',width:'50%'}} >
          <Grid container spacing={2}>
        <Grid size={6}>
          <TextField fullWidth
            
            id="outlined-basic"
            label="Name"
            variant='outlined'
            
          />

          </Grid>
         


          <Grid size={6}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Email"
          variant='outlined'
          
        />
        </Grid>
        

        <Grid size={12}>
        

          
        <TextField fullWidth
          
          id="outlined-multiline-flexible"
          label="Address"
          multiline rows={4}
          
        />
        </Grid>
        

        <Grid size={6}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Phone-number"
          variant='outlined'
          
        />
        </Grid>
          
        
       
          
        <Grid size={6}>
        

          
        <TextField fullWidth
          
          id="outlined-basic"
          label="Password"
          variant='outlined'
          
        />
        
        </Grid>
        
        <Grid size={12}>
 
        
        <Button variant="contained">SignUp</Button>
        </Grid>
        <Grid size={12}>
 
<Typography style={{color:'darkblue'}}>
  <Link to={'/'}>Registered user? Please Click here</Link></Typography>

</Grid>
</Grid>
      </Box>




    
  )
}
export default Signup