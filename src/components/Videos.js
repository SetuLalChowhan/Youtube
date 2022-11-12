import React from 'react'
import{Stack,Box} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'


export default function Videos({videos}) {
  
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent="start" gap={2}>
      {videos.map((item,index)=>{
        return(
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />} 
            {item.id.channelId && <ChannelCard ChannelDetail={item} />} 
            
            
          </Box>

        )
      })}


    </Stack>
  )
}
