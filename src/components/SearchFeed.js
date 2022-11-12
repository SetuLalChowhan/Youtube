import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { Typography,Box } from '@mui/material'
import { useParams } from 'react-router-dom'

export default function SearchFeed() {

  const {searchTerm} = useParams()

  const [videos,setVideos] =useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{
      setVideos(data.items)

    })

  },[searchTerm])
  return (
    <Box p={2} sx={{overflowY:"auto", height:'90vh', flex:2}}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:"white"}}>
            Search Results for: <span style={{color:"red",}}>{searchTerm}</span>

            </Typography>
            <Videos videos={videos}/>

        </Box>
  )
}
