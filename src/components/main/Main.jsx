import React from 'react';

import "./Main.css";
import Card from '../card/Card';
import data from '../../helper/data';


const Main = () => {
return(
	<div className='cardContainer'>
		<h1>Languages</h1>
		<div className='dataDiv'>{data.map((item,index)=> <Card{...item}/>)}</div>
		
	</div>
)
  
}

export default Main;