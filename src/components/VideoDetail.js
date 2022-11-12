import React, { useEffect, useState } from 'react'
import {useParams,Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {fetchFromAPI} from '../utils/fetchFromApi'
import Videos from './Videos'

export default function VideoDetail() {
const [videoDetails,setVideoDetails] =  useState(null)
  const {id} =useParams();

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=>{ setVideoDetails(data.items[0])})
  },[id])
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:"column",md:"row"}}>
        <Box flex={1}>
          <Box sx={{width:"100%", position:"sticky",top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>

          </Box>

        </Box>

      </Stack>

    </Box>
  )
}
