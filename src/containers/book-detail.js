'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    render () {
        return (
            <div>{this.props.book ? `${this.props.book.title} (${this.props.book.pages} page${this.props.book.pages === 1 ? '' : 's'})` : ''}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}
export default connect(mapStateToProps)(BookDetail);