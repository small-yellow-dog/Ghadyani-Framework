import React from 'react'
import { Link } from 'react-router-dom'
import { pure } from 'recompose'

export const NoMatch = () => (
	<div>
		<h1>404</h1>
		<Link to="/" title="Go to homepage">Go Back</Link>
	</div>
)

export default pure(NoMatch)
