import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import './TreeChart.css'; // Create a CSS file for styling
import Exclaim from '../assets/Group 6.png'; 
import Complete from '../assets/Group 7.png';
import Star from '../assets/Group 8.png';
import Border from '../assets/Star 1.png';
import Circle from '../assets/Rank 4.png';

const TreeChart = () => {
  return (
    <div className='ranking-tree'>
      <Tree 
        style={{ borderImage: `url(${Border}) 30 round` }} 
        lineColor='#f9b694' 
        lineStyle='dashed' 
        lineWidth='2px' 
        lineHeight='20px' 
        className='contact-tree'
        label={<div className="node-title"><span>Expertise</span></div>}
      >
        <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Exclaim} alt='' className='corner-img' /></div></div>}>
          <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Complete} alt='' className='corner-img' /></div></div>}>
            <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Star} alt='' className='corner-img' /></div></div>}>
              <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Circle} alt='' className='corner-img' /></div></div>}/>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Exclaim} alt='' className='corner-img' /></div></div>}>
          <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Complete} alt='' className='corner-img' /></div></div>}>
            <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Star} alt='' className='corner-img' /></div></div>}>
              <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Circle} alt='' className='corner-img' /></div></div>}/>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Exclaim} alt='' className='corner-img' /></div></div>}>
          <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Complete} alt='' className='corner-img' /></div></div>}>
            <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Star} alt='' className='corner-img' /></div></div>}>
              <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Circle} alt='' className='corner-img' /></div></div>}/>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Exclaim} alt='' className='corner-img' /></div></div>}>
          <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Complete} alt='' className='corner-img' /></div></div>}>
            <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Star} alt='' className='corner-img' /></div></div>}>
              <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Circle} alt='' className='corner-img' /></div></div>}/>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Exclaim} alt='' className='corner-img' /></div></div>}>
          <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Complete} alt='' className='corner-img' /></div></div>}>
            <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Star} alt='' className='corner-img' /></div></div>}>
              <TreeNode label={<div className="node child"><div className='dot'></div><div className="border-image-container"><img src={Border} alt="Border" className="border-image" /></div><div className="profile"><img src={Circle} alt='' className='corner-img' /></div></div>}/>
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  );
};

export default TreeChart;
