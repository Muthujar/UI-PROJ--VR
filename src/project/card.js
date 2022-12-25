import React from 'react'
import "./card.css"
import vr from "./vr.png"

export const Card = () => {
  return (
    <div id='can '  className='border'>

        <h1 className='tag1 text-white'>VR's Surprising Benefits</h1>
        <h5 className='tag2 text-white'>Sample text. Click to select the text box. Click again or double click to start editing the text</h5>


{/* <div class="d-flex justify-content-around"> */}

    
<div className="d-flex justify-content-around row">
  <div className="cardy flex text-center" >
    <img classname="draw" alt="dd" src={vr}></img>
    <h4 className='colo'>MENTAL HEALTH</h4><br/> <p className='color'>Sample text. Click to select the <br/> text box. Click again or double<br/> click to start editing the <br/>text. Excepteur sint occaecat <br/>cupidatat non proident.</p>
  <button className='more'>more1</button>
  

  </div>
  <div class="cardy  flex text-center col-md-4"><h4 className='colo'>REALISTIC EXPERIENCE</h4><br/> <p className='color'>Sample text. Click to select the <br/> text box. Click again or double<br/> click to start editing the <br/>text. Excepteur sint occaecat <br/>cupidatat non proident.</p>
  <button className='more'>more</button>
</div>
  <div class="cardy  flex text-center col-md-4"><h4 className='colo'>RELAX</h4><br/> <p className='color'>Sample text. Click to select the <br/> text box. Click again or double<br/> click to start editing the <br/>text. Excepteur sint occaecat <br/>cupidatat non proident.</p>
  <button className='more'>more</button>

  </div>
</div>








    </div>
  )
}


export default Card