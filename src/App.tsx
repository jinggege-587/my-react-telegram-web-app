import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'
// import bot from './TutorialBot'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState();

  const getData = ()=>{
    fetch('https://api.telegram.org/bot7498712718:AAGQ0ncMXgJt2hHBn_rpB90a3xDLjWlh4fQ/getMe').then((res)=>{
      if(res.status === 200){
        //json是返回的response提供的一个方法,会把返回的json字符串反序列化成对象,也被包装成一个Promise了
        res.json().then((json)=>{
          console.log('res: ', json)
          setData(json);
        })
      }else{
        return {}
      }
    });

  }

  // bot.start();

  const [data0, setData0] = useState();
  const [data1, setData1] = useState();
  const btn0 = () =>{
    setData0(window.Telegram.WebApp)
  }
  const btn1 = () =>{
    setData1(window.Telegram.WebAppUser());
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={()=>getData()}>getData</button>
      <button onClick={()=>btn0()}>btn0</button>
      <p>data0 { JSON.stringify(data0) }</p>
      <button onClick={()=>btn1()}>btn1</button>
      <p>data1 { JSON.stringify(data1) }</p>
        {/* Here we add our button with alert callback */}
      <div className="card">
        <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
        </button>
      </div>
      {JSON.stringify(data)}
    </>
  )
}

export default App
