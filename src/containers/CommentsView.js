import React, { Component } from 'react';
import axios from 'axios';

import Comments from '../components/Comments';

class CommentsView extends Component {

    state = {
        comments: [],
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/comments-api/')
            .then(res => {
                this.setState({
                    comments: res.data,
                });
                console.log("comments length: " + res.data.length);
            })
    }

    render() {
        return (
            <Comments data={this.state.comments} />
        );
    }
}


export default CommentsView;