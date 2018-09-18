import React, { Component } from 'react';
import { Container, Input, Button } from 'semantic-ui-react'

const divStyle = {
	background: '#3E92CC',
	display: 'flex',
	justifyContents: 'center',
	alignItems: 'center',
	height: '100vh',
	backgroundSize: 'cover',
}

const formStyle = {
	margin: '3rem',
	width: 'auto',
}

const submitButtonStyle = {
	display: 'flex',
	justifyContent: 'center',
}

class Login extends Component {
	render() {
		return (
			<div style={divStyle}>
				<Container style={formStyle}>
					<Input placeholder='username'/>
					<br/>
					<br/>
					<Input type='password' placeholder='password'/>
					<br/>
					<br/>
					<div style={submitButtonStyle}>
						<Button>Submit</Button>
					</div>
				</Container>
			</div>
		)
	}
}

export default Login;
