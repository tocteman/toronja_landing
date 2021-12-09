import React from 'react'

const Raja = () => {
  return (
    <div className="py-4 mx-8 rounded-lg">
      <div className="flex mx-auto ml-4 my-4">
        <div className="w-1/2 mr-1">
          <a href="https://issuu.com/rajarevista" target="_blank">
          <img src="/images/raja01.jpg" className="border-2 border-black shadow" alt=""/>
          </a>
        </div>
        <div className="w-1/2 ml-1">
          <img src="/images/raja2-ecua.jpg" className="border-2 border-black shadow" alt=""/>
        </div>
      </div>
      <div className="flex border-2 border-black mx-auto ml-4 shadow my-4">
        <div>
          <img src="/images/raja3-34.jpg" alt=""/>
        </div>
        <div>
          <img src="/images/raja3-35.jpg" alt=""/>
        </div>
      </div>
      <div className="flex border-2 border-black mx-auto ml-4 shadow mb-4">
        <div>
          <img src="/images/raja2-ence.jpg" alt=""/>
        </div>
        <div>
          <img src="/images/raja2-ence2.jpg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Raja