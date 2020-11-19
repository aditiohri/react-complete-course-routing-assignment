import React, { Component } from 'react';

class Course extends Component {

    state = {
        hashTitle: '',
        paramTitle: ''
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        let paramArr = [];
        for (let param of query.entries()) {
            paramArr.push(param)
        }
        const hashQuery = new URLSearchParams(this.props.location.hash);
        let hashArr = [];
        for (let hash of hashQuery.entries()) {
            hashArr.push(hash);
        }
        this.setState({
          paramTitle: paramArr[0],
          hashTitle: hashArr.flat()[0].slice(1),
        });
    }

    render () {
        return (
            <div>
                <h1 id={this.props.location.hash}>{this.state.paramTitle}</h1>
                {/* <h1>{this.state.hashTitle}</h1> */}
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;