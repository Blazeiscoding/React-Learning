import React,{ useState,useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from "./store/authSlice"
import { Footer, Header } from './components'



function App() {
  
  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> {setLoading(false)})
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-600'>
      <div className='w-full block'>
        <Header/>
        <main>
        TODO:  {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : "Loading....."
  
}

export default App
