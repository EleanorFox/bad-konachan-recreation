import { useState } from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Home from './Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div className="App">
        <div>
          <Topbar />
        </div>
        <div className="Content">
          <div className="side">
          <Sidebar />
          </div>
          <div className="cont">
            <Home />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
