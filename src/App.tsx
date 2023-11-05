
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState<string>("")
  const [data, setData] = useState<dataDetails[]>([{title:"name",id:Date.now()}])

  type dataDetails ={
    title: string,
    id : number
  }


  function onSumbit():void{
   const newItems :dataDetails = {
    title: input,
    id:Date.now()
   }

   setData(prev => [...prev,newItems])
   setInput("")
  }

  function handleDelete (name:number):void{
    setData((prev)=> prev.filter((val)=> val.id != name))
  
  }
 
 

  return (
    <>
    <input type="text" onChange={(event)=> setInput(event?.target.value)} value={input} />
    <button onClick={onSumbit}>Add</button>

    <div>
      {data?.map((val)=>(
        <div key={val.id}><p >name : {val.title}</p> <button onClick={()=> handleDelete(val.id)}>Delete</button> </div>
      ))}
    </div>
    </>
  )
}

export default App
