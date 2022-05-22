import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import BodyComponent from './component/body'

function BodyContainer(props) {
    const [showNavbar,setShowNavbar]=useState(true);
    const history=useHistory();
    const [showData,setShowData]=useState(false);
    useEffect(()=>{
        axios.get('https://trello-like-vip.herokuapp.com/api/user/token',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            setShowData(true);
            localStorage.setItem('user',response.data);
        })
        .catch(()=>{
            history.push('/login');
        })
    },[])
    return (
        showData && <BodyComponent showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>
    )
}

export default BodyContainer
