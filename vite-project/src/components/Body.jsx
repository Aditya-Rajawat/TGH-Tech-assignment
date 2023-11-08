import React from 'react'
import QuoteContainer from './QuoteContainer'
import Dropdown from './Dropdown'
import useTagsdata from '../utils/useTagsdata'
import QuoteGenerator from './QuoteGenerator'
import useNextQuote from '../utils/useNextQuote'

const Body = () => {
    useNextQuote();

  return (
    <div className='relative'>
        <QuoteContainer />
        <Dropdown />
        <QuoteGenerator />
    </div>
  )
}

export default Body