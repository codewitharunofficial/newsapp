import React from 'react'

const SearchInput = () => {
  return (
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-success" type="submit">Search</button>
    </form>
  )
}

export default SearchInput
