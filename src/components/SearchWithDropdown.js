import React, { useState } from 'react'
import DropdownList from './DropdownList'
import { data } from '../data'

const reactStringReplace = require('react-string-replace')

function SearchWithDropdown() {
  const [value, setValue] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    changeResultVisibility(e.target.value)
  }

  const sortData = (item1, item2) => {
    item1 = item1.toLowerCase()
    item2 = item2.toLowerCase()
    return item1 > item2 ? 1 : item2 > item1 ? -1 : 0
  }

  const filteredData = data
    .filter((el) => el.toLowerCase().includes(value))
    .sort(sortData)
    .map((text) => reactStringReplace(text, value, (match, i) => <strong key={i}>{match}</strong>))

  const changeResultVisibility = (value) => {
    return value.length >= 3 ? setIsVisible(true) : setIsVisible(false)
  }

  return (
    <div>
      <input type="text" placeholder="Search..." value={value} onChange={handleChange}></input>
      {isVisible ? (
        filteredData.length > 0 ? (
          <DropdownList filteredData={filteredData} isVisible={isVisible} />
        ) : (
          <div>Not found!</div>
        )
      ) : null}
    </div>
  )
}

export default SearchWithDropdown
