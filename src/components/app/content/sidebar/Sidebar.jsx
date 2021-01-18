import React, { Component } from 'react';
// import Icons from '../../../../assets/img/icons.svg'

import Login from './login/Login.jsx'
import User from './user/User.jsx'
import NavMenu from './navMenu/NavMenu.jsx'
import AddNewPostBtn from './addNewPostBtn/AddNewPostBtn.jsx'
import BestComment from './bestComment/BestComment.jsx'
import Advertising from './advertising/Advertising.jsx'

import BurgerMenu from '../../header/burgerMenu/burgerMenu.jsx'

import './sidebar.scss'
import { connect } from 'react-redux'
import { store } from '../../../../store/store'


class Sidebar extends Component {
    constructor(props) {
        super(props)
    }
  
    render() {
        return (
            <>  
                <aside className={`${this.props.sidebarStatus == true ? "sidebar visible": "sidebar"}`}>
                    <Login />
                    <User />
                    <NavMenu />
                    <AddNewPostBtn />
                    <BestComment />
                    <Advertising />
                </aside>
            </>
        )
    } 

}

const mapSidebar = state => {
    return {
        sidebarStatus: state.sidebarStatus
    }
}

export default connect(mapSidebar)(Sidebar)

//ru.reactjs.org/docs/react-component.html

// export default class Search extends Component {

// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			values: [],
// 			age: 123
// 		}
// 	}

// 	getAnyInfo = () => {
// 		anyApi.getInfo()
// 			.then(
// 				response => {
// 					this.setState((state) => {return {
// 						values: response.data.values
// 					}})
// 				}
// 			)
// 			.catch(error => {
// 				console.log(error)
// 			})
// 	}

// 	componentWillMount = () => {
// 		this.getAnyInfo()
// 	}

// 	render () {
// 		return (
// 			<>
// 				<Dadasd
// 					lala={this.state.values}
// 				/>

// 				<Dadasd
// 					lala={this.state.age}
// 				/>
// 			</>
// 		)
// 	}
// }
       