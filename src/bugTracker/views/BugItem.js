import React, { Component } from 'react';


//TODO: convert the following into a higher order component

class BugItem extends Component{
	
	constructor(props){
		super(props);
		this.onBugNameClick = this.onBugNameClick.bind(this);
	}
	onBugNameClick(){
		this.props.toggle(this.props.bug);
	}
	render(){
		let { bug } = this.props,
			bugStyle = bug.isClosed ? 'bugname closed' : 'bugname';
		return(
			<li>
				<span className={bugStyle} onClick={this.onBugNameClick}>{bug.name}</span>
				<div className="datetime">[CreatedAt]</div>
			</li>
		)
	}
}
export default BugItem;