import React, { useState } from 'react'
import  {useNavigate} from  'react-router-dom'
import  {Paper,IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar() {
  const [searchTerm,setSearchTerm] = useState('')
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }
  return (
    <Paper component='form' onSubmit={handleSubmit} sx={{borderRadius :20, pl:2,
    boxShadow:'none', mr:{sm:5},border:"1px solid #e3e3e3" }}>
        <input className='search_bar' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder="search" style={{border:"none",padding:"10px",borderRadius:"10px"}}   />
        <IconButton type='submit' sx={{p:'10px', color:"red"}}>
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}
