import React, { Component } from 'react';

class BugSort extends Component{
	bugSortOrderRef = React.createRef();
	bugSortDescendingRef = React.createRef();

	constructor(props){
		super(props);
		this.onSortChange = this.onSortChange.bind(this);
	}
	onSortChange(){
		let { bugs, sort } = this.props,
			attrName = this.bugSortOrderRef.current.value,
			isDescending = this.bugSortDescendingRef.current.checked;

		sort(bugs, attrName, isDescending);

	}
	render(){
		return(
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select ref={this.bugSortOrderRef} onChange={this.onSortChange}>
					<option value="name">Name</option>
					<option value="isClosed">Status</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input type="checkbox" ref={this.bugSortDescendingRef} onChange={this.onSortChange}/>
			</section>
		);
	}
}

export default BugSort;