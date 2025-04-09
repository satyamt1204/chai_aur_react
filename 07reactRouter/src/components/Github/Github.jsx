import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
  const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/satyam1204')
    //     .then(reponse => reponse.json())
    //     .then(data => {
    //         setData(data);
    //     })
    // }, []);
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl items-center justify-center'>Github Followers : {data.id}   <img className='align-middle' src={data.avatar_url} alt = 'Git Picture'/>
    </div>
  )
}

export default Github   

export const githubIntoLoader = async () => {
  const response = await fetch('https://api.github.com/users/satyam1204');
  return response.json();
}