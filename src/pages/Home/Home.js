import { useEffect, useState } from 'react';
import './Home.css';
import * as React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';


function Home() {
  const [data, setdata]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/")
    .then(res=> res.json())
    .then(res=>setdata(res))
  },[])

  return (
    <TableContainer component={Paper}>
      <div className='main'>
        <h1>SPORTS</h1>
        <div className='img'></div>
      </div>
        <h1>SHOP SHOES</h1>
      <Box className='boxmain' sx={{}}>
        {data.map((row) => (
          <Box className="box" key={row.id}>
            <img className='Header-logo' src={`http://localhost:3001/images/${row.image}`} alt='logo'/>
            <h2 align="right">{row.name}</h2>
            <p align="right">{row.description}</p>
            <span align="right">{row.price}</span>
          </Box>
          
        ))}
      </Box>
    </TableContainer>
  );
}


export default Home;