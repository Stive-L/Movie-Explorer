import { useState } from 'react'

function Filters({ onFiltersChange }) {
  const [year, setYear] = useState('')
  const [type, setType] = useState('')

  const handleYearChange = (e) => {
    setYear(e.target.value)
    onFiltersChange({ year: e.target.value, type })
  }

  const handleTypeChange = (e) => {
    setType(e.target.value)
    onFiltersChange({ year, type: e.target.value })
  }

  const clearFilters = () => {
    setYear('')
    setType('')
    onFiltersChange({ year: '', type: '' })
  }

  return (
    <div className="filters">
      <select value={year} onChange={handleYearChange} className="filter-select">
        <option value="">Toutes les années</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
      </select>
      
      <select value={type} onChange={handleTypeChange} className="filter-select">
        <option value="">Tout type</option>
        <option value="movie">Films</option>
        <option value="series">Séries</option>
      </select>

      {(year || type) && (
        <button onClick={clearFilters} className="clear-filters">
          Effacer
        </button>
      )}
    </div>
  )
}

export default Filters
