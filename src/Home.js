import React, { useEffect, useState } from "react";
import {useNavigate } from 'react-router-dom';

export default function Home() {
    const [Use,setUse]=useState([]); 
    const navigate = useNavigate();
        useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories').
        then((response)=>{return response.json()})
        .then((responsedata)=>{  
            console.log(responsedata);
            setUse(responsedata);
        })
        .catch((error)=>{
            console.log('error',error)
        })
        },[])
        return(
            <>
            <div className="App">
           <h1 style={{padding:15}}>All Categories</h1>
            {Use.map((item1)=>{
                return(
                    <button onClick={() => navigate(`/${item1}`)}>{item1}</button>
           // <Button color="primary" sx={{ m: "7rem" , width: 300  }} variant="contained" onClick={() => navigate(`/${item1}`)}>{item1}</Button>
                )
            })
        }
        </div>
            </>
        )
    }