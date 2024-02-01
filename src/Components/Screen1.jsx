import React, { useEffect, useState } from 'react';
import './Screen1.css'
import { Screen2 } from './Screen2';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

export const Screen1 = () => {
  const [data, setData] = useState();
  const [details, setDetails] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

  }, []);
  const viewdetails = (i) => {
    let getdetail = {
      ...data[i]
    }
    setDetails(getdetail);
    navigate('/screen2', { state: getdetail })
  }
  console.log(data)
  console.log(details)

  return (
    <div className='main'>
      
      {data && data.map((iteam, i) => {
        return (
          
          <div key={i}>
            <li>{iteam.show.image ? (<img src={iteam.show.image.original} />) : (<div ><img src='' />no photo</div>)}</li>
            <h3>Movie Name:{iteam.show.name}</h3>
            <button onClick={() => viewdetails(i)} >View Details</button>
            
          </div>

        )
      })}

    </div>

  )
}
