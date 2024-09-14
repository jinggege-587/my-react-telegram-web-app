import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState();

  const getData:any = ()=>{
    fetch('https://api.github.com/users/ruanyf').then((res: any)=>{
      if(res.status === 200){
        //json是返回的response提供的一个方法,会把返回的json字符串反序列化成对象,也被包装成一个Promise了
        res.json().then((json:any)=>{
          console.log('res: ', json)
          setData(json);
        })
      }else{
        return {}
      }
    });

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

function res(value: Response): Response | PromiseLike<Response> {
  throw new Error('Function not implemented.')
}
