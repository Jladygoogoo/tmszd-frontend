import React, { Component } from 'react';
import axios from 'axios';

import Results from '../components/Results';

class ResultsView extends Component {

    constructor(props) {
        super(props);

        var tag = props.match.params.tagName;
        if (!tag) {
            tag = '纬钧'
        }

        this.state = {
            results: [],
            tags: [],
            tag: tag,
        }
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/results-api/${this.state.tag}`)
            .then(res => {
                this.setState({
                    results: res.data,
                });

                console.log("dataLength: " + res.data.length);

                for (let i = 0; i < res.data.length; i++) {
                    let tags = res.data[i].tags;
                    for (let j = 0; j < tags.length; j++) {
                        let tag = tags[j];
                        if (!this.state.tags.includes(tag)) {
                            this.setState({ tags: this.state.tags.concat([tag]) });
                        }
                    }
                }
            });
    }

    render() {
        return (
            <Results data={this.state.results} tags={this.state.tags} />
        );
    }
}

export default ResultsView;