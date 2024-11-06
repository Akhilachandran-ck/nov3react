import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';

const Blogs = () => {
    const data=[{blogname:'Foodblog',blogimg:'',blogdesc:'Food blog'},{blogname:'Travel blog',blogimg:'',blogdesc:'Travel blog'},{blogname:'Movie blog',blogimg:'',blogdesc:'Movie blog '},]
  return (

<Grid container spacing={2}>
    {data.map((row)=>(
  <Grid size={4}>
  <Card sx={{ maxWidth: 345 }} style={{marginTop:'0%'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.blogimg}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {row.blogname}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {row.blogdesc}

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

  </Grid>
    ))}
 

  
</Grid>

    

    
  )
}

export default Blogs