/* 其实comments-table和results-table的主体很像，只是部分功能有所不同
   但由于我实在是懒，就直接复制粘贴一些代码了（溜） */

import React, { Component } from 'react';

import CommentItem from './CommentItem';
import MyPagination from './MyPagination';

class CommentsTable extends Component {

    state = {
        data: [],
        pageFlag: 1,
    }


    // 哇哇哇，这到底是什么神仙函数呜呜呜 
    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.state.data) {
            this.setState({
                data: nextProps.data,
            })
        }
        console.log(nextProps.data)
    }



    handlePageChange(pageNumber) {
        this.setState({ pageFlag: pageNumber });
    }


    render() {
        // 自定义分页功能，就显得很冗余

        const dataSliceStart = (this.state.pageFlag - 1) * this.props.itemsNumPerPage;
        const dataSliceEnd = Math.min(this.state.pageFlag * this.props.itemsNumPerPage, this.state.data.length);
        console.log("start " + dataSliceStart + "end " + dataSliceEnd)
        const comments = this.state.data.slice(dataSliceStart, dataSliceEnd).map((entry, index) => (
            <CommentItem {...entry} index={(this.state.pageFlag - 1) * this.props.itemsNumPerPage + index + 1} />
        ));
        return (
            <div class="col-md-8 col-md-offset-1 comment-table">
                <MyPagination
                    handlePageChange={pageNumber => this.handlePageChange(pageNumber)}
                    dataLength={this.props.data.length}
                    pageFlag={this.state.pageFlag}
                    itemsNumPerPage={this.props.itemsNumPerPage}
                />
                {comments}
            </div>
        );
    }
}


export default CommentsTable;