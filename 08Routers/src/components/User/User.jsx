import React from 'react'
import { useParams } from 'react-router-dom'

function user() {
    const {userid}=useParams()
  return (
    <div className='text-center text-red-800 my-3 text-4xl p-5'>
      Name : {userid}
    </div>
  )
}

export default user
