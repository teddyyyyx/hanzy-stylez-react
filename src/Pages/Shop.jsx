import React from 'react'
import { Intro } from '../components/Intro/Intro'
import { Popular } from '../components/Popular/Popular'
import { Offers } from '../components/Offers/Offers'
import { NewCollections } from '../components/NewCollections/NewCollections'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'
 
export const Shop = () => {
  return (
    <div>
        <Intro />
        <Popular />
        <Offers />
        <NewCollections />
    </div>
  )
}
