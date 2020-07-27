import React, { Component } from 'react';

import CommentEditor from './CommentEditor';
import CommentsTable from './CommentsTable';

class Comments extends Component {
    state = {
        itemsNumPerPage: 20,
        pageFlag: 1,
    }

    // handleSidebarChange(key, target) {
    //     this.setState({ [key]: target.value })
    //     if (key == 'sortingKey') {
    //         this.childResultTable.resortData(target.value)
    //     }
    // }

    render() {
        return (
            <div class="row result">
                <CommentEditor
                    {...this.state}
                />
                <CommentsTable
                    {...this.state}
                    data={this.props.data}
                    ref={(child) => { this.childResultTable = child; }}
                />
            </div>
        );
    }
}

export default Comments;



