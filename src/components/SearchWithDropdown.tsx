import React, { useState, useEffect } from 'react'
import DropdownList from './DropdownList'

const url = 'https://restcountries.eu/rest/v2/all'

interface Country {
  name: string
}

const SearchWithDropdown: React.FC = () => {
  const [countries, setCountries] = useState<any>([])
  const [value, setValue] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(value)
    changeResultVisibility(value)
  }

  const sortData = (item1: string, item2: string) => {
    item1 = item1.toLowerCase()
    item2 = item2.toLowerCase()
    return item1 > item2 ? 1 : item2 > item1 ? -1 : 0
  }

  const changeResultVisibility = (value: string) => {
    return value.length >= 3 ? setIsVisible(true) : setIsVisible(false)
  }

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(url)
      const json = await response.json()
      setCountries(json.map((el: Country) => el.name))
    }
    fetchMyAPI()
  }, [])

  useEffect(() => {
    setFilteredCountries(
      countries.filter((el: string) => el.toLowerCase().includes(value)).sort(sortData)
    )
  }, [value, countries])

  return (
    <div>
      <input type="text" placeholder="Search..." value={value} onChange={handleChange}></input>
      {isVisible ? (
        filteredCountries.length > 0 ? (
          <DropdownList filteredCountries={filteredCountries} value={value} />
        ) : (
          <div>Not found!</div>
        )
      ) : null}
    </div>
  )
}

export default SearchWithDropdown
