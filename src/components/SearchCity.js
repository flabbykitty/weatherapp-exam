import React from 'react';

class SearchCity extends React.Component {

	state = {
		search: ''
	}

	handleChange = (e) => {
		this.setState({
			search: e.target.value
		})
	}

	handleSearch = (e) => {
		e.preventDefault()

		this.setState({
			search: ''
		})
	}


	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form onSubmit={this.handleSearch}>
					<div className="input-group">
						<input onChange={this.handleChange} value={this.state.search} type="text" className="form-control form-control-lg" id="city" />

						<div className="input-group-append">
							<button className="btn btn-success btn-lg">Search</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchCity;
