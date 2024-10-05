//  onclick accept one function so instead of directly passing  the  setcolor we can wrap it into the call back back like that onCLick=( ()=>{setColor} )

import { useState } from 'react'

function App() {
const[color,setColor]=useState('green')


  return (
      <div className="className w-full h-screen duration-100"
      style={{ backgroundColor: color }} > 
      <div className="fixed flex flex-wrap justify-center bottom-60 inset-x-0 px-2" >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button className="outline-none px-4 rounded-full py-1  text-2xl" style={{backgroundColor:'red'}}  onClick={()=>setColor('red')}>red</button>
          <button className="outline-none px-4 rounded-full py-1  text-2xl" style={{backgroundColor:'blue'}} onClick={()=>setColor('blue')}>blue</button>
          <button className="outline-none px-4 rounded-full py-1  text-2xl" style={{backgroundColor:'green'}} onClick={()=>setColor('green')}>green</button>
          <button className="outline-none px-4 rounded-full py-1  text-2xl border-slate-950 shadow-lg" style={{backgroundColor:'pink'}} onClick={()=>setColor('pink')}>pink</button>
          <button className="outline-none px-4 rounded-full py-1  text-2xl text-white" style={{backgroundColor:'black'}} onClick={()=>setColor('black')}>black</button>
          <button className="outline-none px-4 rounded-full py-1  text-2xl" style={{backgroundColor:'olive'}} onClick={()=>setColor('olive')} >olive</button>
          <button className="outline-none px-4 rounded-full py-1  text-2xl" style={{backgroundColor:'grey'}} onClick={()=>setColor('grey')}>grey</button>
        </div>
      </div>
      </div>

  )
}

export default App
