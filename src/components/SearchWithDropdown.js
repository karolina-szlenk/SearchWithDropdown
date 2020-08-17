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

  const sortData = (item1, item2) => {
    item1 = item1.toLowerCase();
    item2 = item2.toLowerCase();
    return item1 > item2 ? 1 : item2 > item1 ? -1 : 0
  }

  const filterData = data.filter((el) => el.toLowerCase().includes(value)).sort(sortData)

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
