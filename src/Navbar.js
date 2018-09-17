import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
	state = { activeItem: 'home' }

	handleItemClick = ( e, { name } ) => this.setState({ activeItem: name })

	render(){
		return(
			<div>
				<Menu pointing>
					<Menu.Item name='home'  
						as={ Link }
						to='home'
						onClick={this.handleItemClick} />
					<Menu.Item
						name='page-one'
						as={ Link }
						to='page-one'
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name='login'
						as={ Link }
						to='login'
						onClick={this.handleItemClick}
					/>
				</Menu>
			</div>
		)
	}
}
