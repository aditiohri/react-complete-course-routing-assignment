import React, { Component } from 'react';

class Course extends Component {

    state = {
        
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log('param: ', param)
        }
    }

    render () {
        return (
            <div>
                <h1>{this.props.location.hash}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;