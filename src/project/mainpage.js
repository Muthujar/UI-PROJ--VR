import React from 'react'
import image from "../project/headset.jpeg"
import "../project/mainpage.css"


export const Mainpage = () => {
  return (
    <div className='row m-0  '>
        <div className='col-md-4 text-center-start py-5 px-5'>
            <hr className='line'></hr>

            <h1>VR headsets</h1>

            <p>  Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat 
                cupidatat non proident.</p>

                <p>
Image by FREEPIK    </p>

<button><h2>READMORE</h2></button>



        </div>
        <div className='col-md-8 grad'>
            <img className='w-100 h-100 clip'
            
            alt="djj" src={image}></img>




        </div>













    </div>
  )
}

export default Mainpage