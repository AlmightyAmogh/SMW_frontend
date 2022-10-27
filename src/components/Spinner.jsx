import React from 'react'
import {Circles}from 'react-loader-spinner'

const Spinner = ({message}) => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <Circles
        
        color = "#00BFFF"
        height = {50}
        width = {200}
        className = 'm-10'
        />
        <p className='text-lg text-center px-2 mt-5'>{message}</p>
    </div>
  )
}

export default Spinner