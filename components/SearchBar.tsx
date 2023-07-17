"use client"

import { useSearchParams } from 'next/navigation'

type Props = {}

const SearchBar = (props: Props) => {

    const searchParams = useSearchParams()

    const search = searchParams.get('search')

  return (
    <div>
        <h2>Search: {search}</h2>
    </div>
  )
}

export default SearchBar