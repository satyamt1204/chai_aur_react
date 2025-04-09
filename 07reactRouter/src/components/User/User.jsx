import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
    return (
        <div className='text-center p-4 text-xl text-white bg-gray-600 hover:text-yellow-500'>User: {userid}</div>
    )
}

export default User