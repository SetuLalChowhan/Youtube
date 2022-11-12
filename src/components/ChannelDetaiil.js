import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import Videos from '../components/Videos'
import ChannelCard from './ChannelCard'
import {fetchFromAPI} from '../utils/fetchFromApi'

export default function ChannelDetaiil() {
  const [channelDetail,setChannelDetail] = useState(null)
  const [videos,setVideos] = useState([])
  const {id} =useParams()
  console.log(channelDetail)
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>{  setChannelDetail(data?.items[0])})
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data2)=>{ setVideos(data2?.items)})

  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,}} />
            <ChannelCard ChannelDetail={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr:{sm:'50px'}}}>
          <Videos  videos={videos}  />


        </Box>

      </Box>


    </Box>
  )
}
