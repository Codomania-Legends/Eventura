import React, { useEffect } from 'react'
import {useLocation} from "react-router"
import axios from "axios"

function ValidCertificate() {
  const path = useLocation()
  const c_id = path.pathname.split("/")[1]
  const [ valid , setValid ] = useEffect(null)
  useEffect( () => {
    async function handleValidCertificate() {
        try{
            const res = axios.get( `http://localhost:5000/check?c_id=${c_id}` , 
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            )
            ( res.data.valid ) ? setValid(true) : setValid(false)
        } catch(err){
            console.log(err.message)
        }
    }
    if( c_id ){
        handleValidCertificate()
    }
  } , [c_id] )
  return (
    <>
        { valid ? <>Valid Certificate</> : <>InValid Certificate</>  }
    </>
  )
}

export default ValidCertificate
