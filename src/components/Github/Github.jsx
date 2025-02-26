// //import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

// function Github() {
//     const data = useLoaderData()
//     // const [data, setData] = useState([])
//     // useEffect(() => {
//     //  fetch('https://api.github.com/users/hiteshchoudhary')
//     //  .then(response => response.json())
//     //  .then(data => {
//     //     console.log(data);
//     //     setData(data)
//     //  })
//     // }, [])
    
//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
//     <img src={data.avatar_url} alt="Git picture" width={300} />
//     </div>
//   )
// }

// export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/AnkitSoni03')
//     return response.json()
// }







import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  
  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden md:max-w-2xl m-6">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img 
            className="h-48 w-full object-cover md:h-full md:w-48 transition-transform duration-300 hover:scale-105" 
            src={data.avatar_url} 
            alt="GitHub Profile" 
          />
        </div>
        <div className="p-8 flex flex-col justify-center items-center md:items-start">
          <div className="uppercase tracking-wide text-sm text-indigo-400 font-semibold">GitHub Profile</div>
          <h1 className="block mt-1 text-2xl leading-tight font-bold text-white">{data.name || data.login}</h1>
          <p className="mt-2 text-gray-300">{data.bio || "GitHub Developer"}</p>
          <div className="mt-4 flex space-x-4">
            <div className="text-center">
              <span className="block text-xl font-bold text-white">{data.followers}</span>
              <span className="text-sm text-gray-400">Followers</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold text-white">{data.following}</span>
              <span className="text-sm text-gray-400">Following</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold text-white">{data.public_repos}</span>
              <span className="text-sm text-gray-400">Repos</span>
            </div>
          </div>
          <a 
            href={data.html_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-6 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/AnkitSoni03');
  return response.json();
};