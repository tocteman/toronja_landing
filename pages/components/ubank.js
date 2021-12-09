import React from 'react'

const Ubank = () => {
  return (
    <div className="py-4 mx-8">
      <div>
        <a href="https://ubankapp.com" target="_blank">
        <img src="/images/ubank-home.jpg" className="mb-2 mx-2 border-2 border-black shadow" alt=""/>
        </a>
      </div>
      <div className="flex flex-col md:flex-row mx-auto my-4 justify-center">
        <img src="/images/bcopacifico-01.png" className="w-48 md:w-64 mx-auto md:mx-2 my-2" alt=""/>
        <img src="/images/bcopacifico-02.png" className="w-48 md:w-64 mx-auto md:mx-2 my-2" alt=""/>
      </div>
    </div>
  )
}

export default Ubank