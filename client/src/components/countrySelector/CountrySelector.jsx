import React, { useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector({country, setCountry}) {
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = country => {
        setCountry(country)
    }

    return <Select options={options} value={country} onChange={changeHandler} />
}

export default CountrySelector