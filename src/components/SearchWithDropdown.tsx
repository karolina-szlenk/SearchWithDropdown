import React, { useState, useEffect } from 'react'
import DropdownList from './DropdownList'
import { Country } from '../myModule'

const url = 'https://restcountries.eu/rest/v2/all'

const SearchWithDropdown: React.FC = () => {
  const [countries, setCountries] = useState<Array<Country>>([])
  const [value, setValue] = useState('')
  const [filteredCountries, setFilteredCountries] = useState<Array<Country>>([])
  const [isVisible, setIsVisible] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setValue(value)
    changeResultVisibility(value)
  }

  const changeResultVisibility = (value: string) => {
    setIsVisible(value.length >= 3)
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
    if (value.length >= 3 && countries) {
      setFilteredCountries(
        countries
          .filter((el: Country) => el.name.toLowerCase().includes(value))
      )
    }
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
