import React from 'react'
import AddForm from './Components/AddForm'
import second from './app.css'

const App = () => {
  return (
    <div className='app'>
      
      <header className="header">
      <h1>Step Addition</h1>
    </header>
      
      <AddForm/>
    </div>
  )
}

export default App