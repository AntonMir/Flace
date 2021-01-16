import React, {Component} from 'react';
import search from '../../assets/img/search.svg'
import './search.scss'


export default function Search(props) {
	return (
        <div className="input-group search">
            <input type="search" className="search-input" placeholder="Поиск по сайту"/>
            <button className="search-button">
                <img src={search} alt=""/>
            </button>
        </div>
	)
}

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