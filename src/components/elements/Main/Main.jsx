import React from 'react'
import Hello from '../Hello/Hello'
import Posts from '../Posts/Posts'
import Works from '../Works/Works'

const Main = () => {
	return (
		<div className='main'>
			<Hello />
			<Posts />
			<Works />
		</div>
	)
}

export default Main