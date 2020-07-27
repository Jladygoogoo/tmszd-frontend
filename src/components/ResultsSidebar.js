import React, { Component } from 'react';
import Select from 'react-select';


const ResultSidebar = (props) => {
    // console.log(props.tagsSet);
    return (
        < div class="col-md-3 col-md-offset-1 result-sidebar" >
            <div class="sidebar-module sidebar-module-inset">
                <h4>显示选项</h4>
                <hr />
            </div>
            <div class="sidebar-module">
                <h6>单页显示数量</h6>
                <ol class="list-unstyled">
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        name="itemsNumPerPage"
                        options={props.itemsNumPerPageSet}
                        defaultValue={props.itemsNumPerPageSet[1]}
                        onChange={(target) => props.handleSidebarChange('itemsNumPerPage', target)}
                    />
                </ol>
                <h6>排序方式</h6>
                <ol class="list-unstyled">
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        name="sortingKey"
                        options={props.sortingKeySet}
                        defaultValue={props.sortingKeySet[0]}
                        onChange={(target) => props.handleSidebarChange('sortingKey', target)}
                    />
                </ol>
                <h6>标签过滤（不要）</h6>
                <ol class="list-unstyled">
                    <Select
                        isMulti
                        className="basic-multi-select"
                        classNamePrefix="select"
                        name="tagsSet"
                        options={props.tagsSet}
                        defaultValue={[]}
                        onChange={(target) => props.handleSidebarChangeMulti('tags', target)}
                    />
                </ol>
            </div>
        </div >
    );
}

export default ResultSidebar;