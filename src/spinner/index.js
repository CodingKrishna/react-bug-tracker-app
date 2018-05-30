import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import spinnerActionCreators from './actions';

class Spinner extends Component{
	constructor(props){
		super(props);
		this.onIncrementClick = this.onIncrementClick.bind(this);
		this.onDecrementClick = this.onDecrementClick.bind(this);
	}
	onIncrementClick(){
		this.props.increment(this.state.delta);
	}
	onDecrementClick(){
		this.props.decrement(this.state.delta);
	}
	render(){
		let { value } = this.props;
		return(
			<div>
				<input type="number" onChange={evt => this.setState({delta : evt.target.valueAsNumber})} />
				<input type="button" value="DECREMENT" onClick={this.onDecrementClick}/>
				<span> [ {value} ] </span>
				<input type="button" value="INCREMENT" onClick={this.onIncrementClick}/>
			</div>
		)
	}
}

function mapSpinnerStateToProps(state){
	let spinnerValue = state.spinnerState;
	return { value : spinnerValue };
}

function mapSpinnerActionDispatchToProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;
}

export default connect(mapSpinnerStateToProps, mapSpinnerActionDispatchToProps)(Spinner);