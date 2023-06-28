
import { useState } from 'react'
import Header from "./components/header"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div>
        <h1>Testing a Skip Link</h1>
        <div className="card">
          <button id="count-button" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          
        </div>
        
      </div>
    </div>
  )
}

export default App


