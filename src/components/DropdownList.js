import React from 'react'
import DropdownItem from './DropdownItem'

function DropdownList(props) {
  console.log(props.filterData)

  const renderData = () => props.filterData.map((el) => <DropdownItem key={el}>{el}</DropdownItem>)

  return <div>{props.isVisible ? renderData() : null}</div>
}

export default DropdownList
