import React, { Component } from 'react';
import BugItem from './BugItem';

class BugList extends Component{
	render(){
		let {bugs, toggle, removeClosed} = this.props,
			bugItems = bugs.map((bug, index) => (
				<BugItem bug={bug} key={index} toggle={toggle}/>
			));
		return(
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={() => removeClosed(bugs)}/>
			</section>
		)
	}
}
export default BugList;