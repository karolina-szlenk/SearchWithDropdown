import React from 'react'
import SearchWithDropdown from './components/SearchWithDropdown'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>My awesome Dropdown</h2>
      <SearchWithDropdown />
    </div>
  )
}

export default App