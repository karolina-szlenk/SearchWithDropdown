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

  const changeResultVisibility = (value: string) => {
    return value.length >= 3 ? setIsVisible(true) : setIsVisible(false)
  }

  useEffect(() => {
    const fetchMyAPI = async () => {
      let response = await fetch(url)
      const json = await response.json()
      setCountries(json)
    }
    fetchMyAPI()
  }, [])

  useEffect(() => {
    setFilteredCountries(
      countries
        .filter((el: Country) => el.name.toLowerCase().includes(value))
    )
  }, [value, countries])

  console.log(countries)

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
