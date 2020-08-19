import React from 'react'
import DropdownItem from './DropdownItem'

const reactStringReplace = require('react-string-replace')

interface DropdownListProps {
  filteredCountries: string[]
  value: string
}

const DropdownList: React.FC<DropdownListProps> = (props) => {
  const renderData = () =>
    props.filteredCountries
      .map((text: string) =>
        reactStringReplace(text, props.value, (match: string, i: number) => (
          <strong key={i}>{match}</strong>
        ))
      )
      .map((el) => <DropdownItem key={el}>{el}</DropdownItem>)

  return <div>{renderData()}</div>
}

export default DropdownList
