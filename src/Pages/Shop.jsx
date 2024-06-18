import React from 'react'
import { Intro } from '../components/Intro/Intro'
import { Popular } from '../components/Popular/Popular'
import { Offers } from '../components/Offers/Offers'
import { NewCollections } from '../components/NewCollections/NewCollections'
 
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
