import React, { useState } from 'react'
import DropdownList from './DropdownList'
import { data } from '../data'

function SearchWithDropdown() {
  const [value, setValue] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    changeDropdownListVisibility(e.target.value)
  }

  const filterData = data.filter((el) => el.toLowerCase().includes(value))

  const changeDropdownListVisibility = (value) => {
    return value.length >= 3 ? setIsVisible(true) : setIsVisible(false)
  }

  return (
    <div>
      <input type="text" placeholder="Search..." value={value} onChange={handleChange}></input>
      {filterData.length > 0 ? (
        <DropdownList filterData={filterData} isVisible={isVisible} />
      ) : (
        <div>Not found!</div>
      )}
    </div>
  )
}

export default SearchWithDropdown
