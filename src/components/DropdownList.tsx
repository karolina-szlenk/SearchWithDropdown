import React from 'react'
import DropdownItem from './DropdownItem'
import { Country } from '../myModule'

const reactStringReplace = require('react-string-replace')

interface DropdownListProps {
  filteredCountries: Country[]
  value: string
}

function sortData (c1: Country, c2: Country): number {
  const name1 = c1.name.toLowerCase()
  const name2 = c2.name.toLowerCase()
  return name1 > name2 ? 1 : name2 > name1 ? -1 : 0
}

const DropdownList: React.FC<DropdownListProps> = ({ filteredCountries, value }) => {
  const renderData = () =>
    filteredCountries
    .sort(sortData)
    .map((el) => (
      <DropdownItem key={el.name}>
        {reactStringReplace(el.name, value, (match: string, i: number) => (
          <strong key={i}>{match}</strong>
        ))}
      </DropdownItem>
    ))
    

  return <div>{renderData()}</div>
}

export default DropdownList
