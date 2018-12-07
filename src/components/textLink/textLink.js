import React, { Component } from 'react';
import { string, bool, number, any, func, } from 'prop-types';
import { Link } from 'react-router-dom';



import './textLink.css';

class TextLink extends Component {
    render() {
        return (
            <Link to={this.props.link} className="text-link" id={`${this.props.text.toLowerCase().split(' ').join('-')}-text-link`}>
                {this.props.text}
            </Link>
        );
    }
}

TextLink.propTypes = {
    text: string.isRequired,
    link: string.isRequired,
}

export default TextLink;