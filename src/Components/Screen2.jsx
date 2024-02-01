import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Screen2.css';
import {Box, Button, TextField, Typography} from '@mui/material';
import Modal from 'react-responsive-modal';
import CloseIcon from '@mui/icons-material/Close';

export const Screen2 = () => {
    const[view,setView]=useState();
    const location= useLocation();
    const data= location.state
    console.log(data)
    const Close = (<CloseIcon />)
    const [isModelopen, setIsModalopen] = useState(false);

    const[inputs,setInputs]= useState({
        name:"",
        email:"",
        date:""
       
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userData', JSON.stringify(inputs));
        console.log(inputs)
       
 
     }
     const handleChange=(e)=>{
        setInputs(prev=>({
         ...prev,
         [e.target.name]:e.target.value
        }))

    }
  return (
    <div className='screen2-main'>

        <div className='screen2-div'>
        <li>{data.show.image ? (<img src={data.show.image.original} />) : (<div ><img src='' />no photo</div>)}</li>
            <h3>Movie Name: {data.show.name}</h3>
             <p dangerouslySetInnerHTML= {{ __html: data.show.summary }}></p>
             <Link to='/'>Home</Link>
             <Button onClick={() => setIsModalopen(true)}>Book</Button>
        </div>
        {/* modal adding here ........................MODAL */}
      <div className="modal-style">
        <Modal open={isModelopen}   >
          <div className="form_modal">
            <div className="modal-moviename">
              <h2>Movie Name:{data.show.name}</h2>
              <p>Language:{data.show.language}</p>
              {/* form here.................... */}
              <form onSubmit={handleSubmit}>
                <Box width="300px" justifyContent="center"
                    display="flex"
                    flexDirection={"column"}
                    marginLeft="auto"
                    marginRight="auto">
                    <Typography variant='h3'>
                        Book Movie Ticket
                    </Typography>
                    <TextField onChange={handleChange} type='text' value={inputs.name} variant='outlined' placeholder='Name' margin='normal'  name="name"/>
                    <TextField onChange={handleChange} type='email' value={inputs.email} variant='outlined' placeholder='Email' margin='normal'  name='email'/>
                    <TextField onChange={handleChange} type='date' value={inputs.date} variant='outlined' placeholder='Date' margin='normal'  name='date'/>
                    <Button type='submit' variant='contained'>SingUp</Button>
                    <Button onClick={() => setIsModalopen(false)}>Cancle</Button>
                </Box>
            </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
