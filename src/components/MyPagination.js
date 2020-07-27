import React from 'react';

import Pagination from "react-js-pagination";

const MyPagination = (props) => {
    return (
        <div class="result-page-roller">
            <Pagination
                activePage={props.pageFlag}
                itemsCountPerPage={props.itemsNumPerPage}
                totalItemsCount={props.dataLength}
                pageRangeDisplayed={5}
                onChange={props.handlePageChange.bind(this)}
            />
        </div>
    );
}

export default MyPagination;