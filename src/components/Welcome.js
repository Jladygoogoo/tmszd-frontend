import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


class Welcome extends Component {
    state = {
        searchContent: '',
    }

    inputOnChange(e) {
        this.setState({
            searchContent: e.target.value,
        })
    }

    // getSearchResult(searchContent) {
    //     console.log("get-search-results...")
    //     useHistory().push(`/results/${searchContent}`)
    // }

    handleOnSubmit() {
        let searchContent = this.state.searchContent;
        if (searchContent == '') searchContent = '纬钧';
        this.props.history.push(`/results/${searchContent}`);

    }

    render() {
        return (
            <div className="welcome jumbotron">
                <div className="welcome-text">
                    <h1 id="title">他们szd🔒</h1>
                    <p>
                        瞎几把扯一扯。
                    <br />
                    想好要说什么。
                    <br />
                    所有的美好都是作者的，向产粮大队致敬 💗🙇‍♀️
                </p>
                </div>
                <div className="welcome-search">
                    <form onSubmit={(e) => this.handleOnSubmit()}>
                        <input
                            type="text"
                            className="search welcome-searchbox"
                            placeholder="纬钧"
                            value={this.state.searchContent}
                            onChange={(e) => this.inputOnChange(e)}
                        />
                        <input type="submit" className="input submit-btn" value="search" />
                    </form>
                </div>
            </div>
        );
    }
}


const searchLink = (props) => {
    var searchContent;
    try {
        searchContent = document.getElementById('searchContent').value;
    } catch (error) {
        console.log(error);
        searchContent = '纬钧';
    }
    return (
        <Link to={`/results/${searchContent}`}>
            search
        </Link>
    );
}

export default withRouter(Welcome);