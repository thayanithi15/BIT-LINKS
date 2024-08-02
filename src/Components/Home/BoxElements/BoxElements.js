import React from 'react'
import './BoxElements.css';
import Exclaim from '../assets/Group 6.png'; 
import Complete from '../assets/Group 7.png';
import Star from '../assets/Group 8.png';
import Mark from '../assets/hotel_class.png';
const BoxElements = () => {
  return (
    <div className='box-elem'>
      <div className='r1'>
        <div className='white'>
          <div className='col1'>
        <img src={Mark} alt='' className='el'></img> 
        <p className='grey'>Rank 4</p></div>
        <span className='down'>430 Networks</span>
        </div>
        <div className='white'>
          <div className='col1'>
        <img src={Exclaim} alt='' className='el'></img><p className='orange'>Rank 3</p>
        </div>
        <span className='down'>430 Networks</span>

        </div>
      </div>
      <div className='r1'>
      <div className='white'>
        <div className='col1'>
        <img src={Complete} alt='' className='el'></img><p className='green'>Rank 2</p>
        </div>
        <span className='down'>430 Networks</span>
        </div>
        <div className='white'>
          <div className='col1'>
        <img src={Star} alt='' className='el'></img><p className='purple'>Rank 1</p>
        </div>
        <span className='down'>430 Networks</span>
        </div>
      </div>
      
    </div>
  )
}

export default BoxElements;