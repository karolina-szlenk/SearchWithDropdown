import React from 'react'
import DropdownItem from './DropdownItem'

function DropdownList(props) {
  const renderData = () =>
    props.filteredData.map((el) => <DropdownItem key={el}>{el}</DropdownItem>)

  return <div>{renderData()}</div>
}

export default DropdownList

