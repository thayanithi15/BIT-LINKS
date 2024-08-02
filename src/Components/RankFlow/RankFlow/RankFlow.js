import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import './RankFlow.css'; // Create a CSS file for styling
import Exclaim from '../assets/Group 6.png'; 
import Complete from '../assets/Group 7.png';
import Star from '../assets/Group 8.png';
import Mark from '../assets/hotel_class.png';

const RankFlow = () => {
  return (
    <Tree lineColor='grey' lineStyle='dashed' lineWidth='2px' lineHeight='30px' label={<div className="node child" > <div className='rectangle'><div className='line'></div>
         <div className="account"><img src={Exclaim} alt='' className='corner-img' /> <div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}
    >
       <TreeNode label={<div className="node child"><div className='rectangle'><div className='line1'></div><div className="account"><img src={Mark} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line2'></div><div className="account"><img src={Exclaim} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line3'></div><div className="account"><img src={Complete} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}>
         </TreeNode>
        </TreeNode>
        </TreeNode>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line1'></div><div className="account"><img src={Mark} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line2'></div><div className="account"><img src={Exclaim} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line3'></div><div className="account"><img src={Complete} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}/>
        </TreeNode>
        </TreeNode>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line1'></div><div className="account"><img src={Mark} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line2'></div><div className="account"><img src={Exclaim} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line3'></div><div className="account"><img src={Complete} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}/>
        </TreeNode>
        </TreeNode>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line1'></div><div className="account"><img src={Mark} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line2'></div><div className="account"><img src={Exclaim} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}>
        <TreeNode label={<div className="node child"><div className='rectangle'><div className='line3'></div><div className="account"><img src={Complete} alt='' className='corner-img' /><div className="text-container">
          <div className="text-item">Name</div>
          <div className="text-item">Role</div>
          <div className="text-item">Profession</div>
        </div></div></div></div>}/>
        </TreeNode>
        </TreeNode>
    </Tree>
  );
};

export default RankFlow;
