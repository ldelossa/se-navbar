import React, { Component } from 'react';
import { Container, Input } from 'semantic-ui-react'

const divStyle = {
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
}

class Login extends Component {
	render() {
		return (
			<div style={divStyle}>
				<Container >
					<Input placeholder='username'/>
					<br/>
					<br/>
					<Input placeholder='password'/>
					<br/>
					<br/>
				</Container>
			</div>
		)
	}
}

export default Login;
