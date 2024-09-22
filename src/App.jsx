import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [ques, setQues] = useState("")
  const [answer,setAnswer]=useState("")
    const generateAnswer=async()=>{
      console.log("Loading....");
        const response=await axios({
          url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCXoyG0DMg3ZZH5lg7buc9zDuwaBR18e78",
          method:"post",
          data:{
            contents:[
              {parts:[{text:ques}]},
            ],
          },
        });
        console.log(
          setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]))
    }
  return (
    <>
    <div className="app">
      <h1 className='chat-ai'>Chat AI</h1>
      <input type="textarea" value={ques} className='input-style'
      placeholder='Ask anything to me?'
      onChange={(e)=>setQues(e.target.value)}/>
      <br />
      <button onClick={generateAnswer}>Generate Answer</button>
      <p>{answer}</p>
      </div>
    </>
  )
}

export default App
