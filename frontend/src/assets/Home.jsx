import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Home() {
  const [auth, setAuth] = useState(false)
  const [message, setMessage] = useState('')
  const [name,setName] = useState('')

  axios.defaults.withCredentials = true; 

  useEffect(()=> {
    axios.get('http://localhost:8800')
    .then(res => {
      if(res.data.Status === "Success"){
        setAuth(true)
        setName(res.data.name)
      }else{
        setAuth(false)
        setMessage(res.data.Error)
      }
    })
    .catch(err => console.log(err));
  }, [])

  const handleclick = () => {
      axios.get('http://localhost:8800/logout')
      .then(res => {
        window.location.reload(true);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='container mt-2'>
        {
          auth ?
          <div>
            <h3>You are Authorized -- {name}</h3>
            <button className='btn btn-danger' onClick={handleclick}>logout</button>
          </div>
          :
          <div>
          <h3>{message}</h3>
          <h3>Login Now</h3>
          <Link to='/login'>Login</Link>
        </div>
        }
    </div>
  )
}

export default Home