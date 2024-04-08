import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './dashboard.css'

function Dashboard() {
  // const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const navigate=useNavigate()

  const handleSignOut=()=>{
    googleLogout();
    sessionStorage.removeItem("userName");
    setUserName('');
   toast.info("Signing Out")
    
      navigate('/')
 
 
  }
  useEffect(()=>{
    if(sessionStorage.getItem("userName"))
    {
      const storedUserName = sessionStorage.getItem('userName');
      setUserName(storedUserName);

    }
  },[])

 
  return (
<>
<header>

</header>
<div className="div">
 <Button id='btn' onClick={handleSignOut}  variant="outline-secondary">Sign Out </Button>{' '}
<div className="mainDiv  d-flex justify-content-center" >
 <h1 className='mt-5' style={{ fontFamily: "Playfair Display",fontSize:'50px' }} >Welcome, {userName.split(" ")[0]}</h1>
</div>
<p style={{textAlign:"center"}}>You have successfully logged in</p>
<div className="mainDiv  d-flex justify-content-center"  >
{/* <img src={user} width={'600px'}></img> */}
<ToastContainer position='top-center' theme='colored' autoClose={3000} />
</div>

</div>

</>
  )
}

export default Dashboard