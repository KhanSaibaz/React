import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Githubs() {

    const data =useLoaderData()
//   const [data, setData] = useState({});

//   useEffect(() => {
// This approach does not require async/await because .then() handles the asynchronous behavior by chaining callbacks:
// Here, every time .then() is called, it waits for the previous promise to resolve before executing the next step. This is why it works without async/await.

//     fetch(`https://api.github.com/users/KhanSaibaz`)
//       .then((res) => res.json())
//       .then((prev) => {
//         console.log(prev);
//         setData(prev);
//       });
//   }, []); // Empty array ensures effect runs only once on component mount

  console.log(data);

  return (
    <div className="flex flex-wrap justify-center mt-10 bg-slate-600 w-1/2 m-auto p-10">
      <h2 className="text-center text-red-500 text-3xl m-5 py-3 px-2">
        Followers: {data['public_repos']}
      </h2>
      <img src={data['avatar_url']} alt="GitHub Avatar" />
    </div>
  );
}

export default Githubs;


// The async/await syntax is essentially syntactic sugar over promises and .then(). The key difference is that async/await allows you to write asynchronous code that looks synchronous.
export const GithibInfo = async ()=> {
    const response = await fetch(`https://api.github.com/users/KhanSaibaz`)
    return response.json()
}