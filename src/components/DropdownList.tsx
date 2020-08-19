import React from 'react'
import DropdownItem from './DropdownItem'

interface DropdownListProps {
  filteredCountries: any[]
}

const DropdownList: React.FC<DropdownListProps> = (props) => {
  const renderData = () =>
    props.filteredCountries.map((el) => <DropdownItem key={el}>{el}</DropdownItem>)

  return <div>{renderData()}</div>
}

export default DropdownList

