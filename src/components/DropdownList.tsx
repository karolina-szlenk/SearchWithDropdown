import React from 'react'
import DropdownItem from './DropdownItem'

const reactStringReplace = require('react-string-replace')

interface DropdownListProps {
  filteredCountries: any[]
  value: string
}

interface MyInterface {
  type: string;
}

function sortData (item1: MyInterface, item2: MyInterface): number {
  return item1 > item2 ? 1 : item2 > item1 ? -1 : 0
}

const DropdownList: React.FC<DropdownListProps> = (props) => {
  console.log(props.filteredCountries)
  const renderData = () =>
    props.filteredCountries
      .map((el) => (
        <DropdownItem key={el.name}>
          {reactStringReplace(el.name, props.value, (match: string, i: number) => (
            <strong key={i}>{match}</strong>
          ))}
        </DropdownItem>
      ))
      .sort(sortData)

  return <div>{renderData()}</div>
}

export default DropdownList
