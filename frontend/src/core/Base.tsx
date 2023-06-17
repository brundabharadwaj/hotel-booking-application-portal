import React from 'react'
import Header from '../components/Header'

const Basepage = ({children}: any) => {
  return (
    <div className='max-w-screen max-h-screen'>
     <Header /> 

     {children}
    </div>
  )
}

export default Basepage