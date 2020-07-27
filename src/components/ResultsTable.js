import React, { Component } from 'react';

import ResultItem from './ResultItem';
import MyPagination from './MyPagination';

class ResultsTable extends Component {

    state = {
        dataBackUp: [],
        data: [],
        pageFlag: 1,
    }


    // 哇哇哇，这到底是什么神仙函数呜呜呜 
    componentWillReceiveProps(nextProps) {
        // if (nextProps.data !== this.state.data) {
        // 改掉这里的原因：如果判断数据不相等，由于标签过滤后的数据和原数据不等，此处会把过滤后的数据覆盖
        if (this.state.data.length == 0) {
            this.setState({
                data: nextProps.data,
                dataBackUp: nextProps.data,
            })
        }
    }

    resortData(sortingKey) {
        var tmpData = this.state.data;
        // 按照小红心排序
        if (sortingKey == 'likedCount') {
            tmpData.sort(function (a, b) { return b[sortingKey] - a[sortingKey] });
        }
        // 按照日期或者作者名称排序
        else {
            tmpData.sort(function (a, b) { return a[sortingKey].localeCompare(b[sortingKey]) });
        }
        // 排序
        this.setState({
            data: tmpData,
        });
    }

    filterData(excludeTags) {
        // 使用dataBackUp，即全部数据
        let tmpData = [];
        for (let i = 0; i < this.state.dataBackUp.length; i++) {
            let breakFlag = 0;
            for (let j = 0; j < excludeTags.length; j++) {
                if (this.state.dataBackUp[i].tags.includes(excludeTags[j])) {
                    breakFlag = 1; break;
                }
            }
            if (!breakFlag) {
                tmpData.push(this.state.dataBackUp[i])
            }
        }
        console.log(tmpData.length)
        this.setState({
            data: tmpData,
        });
    }


    handlePageChange(pageNumber) {
        this.setState({ pageFlag: pageNumber });
    }


    render() {
        const dataSliceStart = (this.state.pageFlag - 1) * this.props.itemsNumPerPage;
        const dataSliceEnd = Math.min(this.state.pageFlag * this.props.itemsNumPerPage, this.state.data.length);
        const result = this.state.data.slice(dataSliceStart, dataSliceEnd).map((entry, index) => (
            <ResultItem {...entry} index={(this.state.pageFlag - 1) * this.props.itemsNumPerPage + index + 1} />
        ));
        return (
            <div class="col-md-8 col-md-offset-1 result-table">
                <MyPagination
                    handlePageChange={pageNumber => this.handlePageChange(pageNumber)}
                    dataLength={this.props.data.length}
                    pageFlag={this.state.pageFlag}
                    itemsNumPerPage={this.props.itemsNumPerPage}
                />
                {result}
                <MyPagination
                    handlePageChange={pageNumber => this.handlePageChange(pageNumber)}
                    dataLength={this.props.data.length}
                    pageFlag={this.state.pageFlag}
                    itemsNumPerPage={this.props.itemsNumPerPage}
                />
            </div>
        );
    }
}


export default ResultsTable;