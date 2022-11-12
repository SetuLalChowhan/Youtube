import React from 'react'
import {Box,CardContent,CardMedia,Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../utils/constants'
import { height } from '@mui/system'

export default function ChannelCard({ChannelDetail,marginTop}) {
 
  return (
    <Box sx={{boxShadow:"none",borderRadius:"20px",display:"flex",justifyContent:"center", alignItems:"center", width:{xs:"356px",md:"320px"}, height:'326px',margin:"auto",marginTop}}>

      <Link to={`/channel/${ChannelDetail?.snippet?.channelId}`}>
        <CardContent sx={{display:"flex",flexDirection:"column", justifyContent:"center", textAlign:"center",
      color:"#fff"}}>
        <CardMedia image={ChannelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={ChannelDetail?.snippet?.title} sx={{borderRadius:"50%", height:"180px",width:"180px"}}/>
        <Typography variant='h6'>
          {ChannelDetail?.snippet?.title}
          <CheckCircle sx={{fontSize:15,color:"gray",ml:"5px"}} />

        </Typography>
         
        {ChannelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(ChannelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
          
        )}

        </CardContent>
      
      </Link>

    </Box>
  )
}
