import React from 'react'
import "./Card.css"
import {useState} from "react";


const Card = ({name,img,options}) => {
	const [visible,SetVisible] = useState(true)

	const handleClick = ()=>{
		SetVisible(!visible)
	}
	
  return (
	
	<div className='container' onClick={handleClick}>
		{visible 
		? (<>
			<img  className='frontImg' src={img} alt={name} />
			<h2 className='frontname'>{name}</h2>
		</>
		)
		:(
			<div className='options'>
				<ul>
					{options.map((item,index)=>{
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
			



		)
		}


	</div>
	
	
  )
}

export default Card



