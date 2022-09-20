import React from 'react'
import Hello from '../Hello/Hello'
import Posts from '../Posts/Posts'
import Works from '../Works/Works'

const Home = () => {
	return (
		<div className='page'>
			<Hello />
			<Posts />
			<Works />
		</div>
	)
}

export default Home