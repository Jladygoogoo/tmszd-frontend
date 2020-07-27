import React, { Component } from 'react';

import ResultsSidebar from './ResultsSidebar';
import ResultsTable from './ResultsTable';
import LoadingDisplay from './LoadingDisplay';

class Results extends Component {
    state = {
        itemsNumPerPage: 20,
        sortingKey: 'likedCount',
        // tags: this.props.tags,
        itemsNumPerPageSet: [{ value: 10, label: '10' }, { value: 20, label: '20' }, { value: 50, label: '30' }],
        // tagsSet: this.props.tags,
        sortingKeySet: [{ value: 'likedCount', label: 'likedCount' }, { value: 'writer', label: 'writer' }],
        pageFlag: 1,
    }

    handleSidebarChange(key, target) {
        this.setState({ [key]: target.value })
        if (key == 'sortingKey') {
            this.childResultTable.resortData(target.value)
        }
    }

    handleSidebarChangeMulti(key, target) {
        // 默认key为"tags"，无需再进行判断
        let excludeTags = [];
        for (let i = 0; i < target.length; i++) {
            excludeTags.push(target[i].value)
        }
        this.childResultTable.filterData(excludeTags)
    }

    quickSetState(key, value) {
        this.setState({
            [key]: value,
        })
    }

    render() {
        let tags = this.props.tags;
        let tagsSet = [];
        for (let i = 0; i < tags.length; i++) {
            tagsSet.push({ 'label': tags[i], 'value': tags[i] })
        }
        if (this.props.data.length == 0) {
            return (
                <LoadingDisplay />
            );
        }
        return (
            <div class="row result">
                <ResultsSidebar
                    handleSidebarChange={(key, target) => this.handleSidebarChange(key, target)}
                    handleSidebarChangeMulti={(key, target) => this.handleSidebarChangeMulti(key, target)}
                    tagsSet={tagsSet}
                    {...this.state}
                />
                <ResultsTable
                    {...this.state}
                    data={this.props.data}
                    ref={(child) => { this.childResultTable = child; }}
                />
            </div>
        );
    }
}

export default Results;



