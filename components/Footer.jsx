import React from 'react'

const Footer = () => {
  return (
    <div className='text-white flex justify-between py-10'>
        <div className=''>
        <a href='https://bchaindev.com/' target='_blank' rel="noreferrer" alt="BChainDev Website">
            <button className='border-4 bg-black p-3 font-extrabold'>BChainDev</button>
        </a>
        <p className='pt-3'>Copyright 2023 BChainDev All Rights Reserved</p>
        </div>
        <div>
        <a href='https://github.com/bchaindeveloper' alt='GitHub Portfolio' target='_blank' rel="noreferrer">
            <img 
                src='./github-mark-white.svg'  
                alt='GitHub Logo'
            />
        </a>
        </div>
    </div>
  )
}

export default Footer