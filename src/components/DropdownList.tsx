import React from 'react'
import DropdownItem from './DropdownItem'

interface DropdownListProps {
  filteredData: any[]
}

const DropdownList: React.FC<DropdownListProps> = (props) => {
  const renderData = () =>
    props.filteredData.map((el) => <DropdownItem key={el}>{el}</DropdownItem>)

  return <div>{renderData()}</div>
}

export default DropdownList
