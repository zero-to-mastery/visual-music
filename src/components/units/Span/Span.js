import React from 'react';

const Span = ({ content, ...otherProps }) => (
    <span {...otherProps}>{content}</span>
);

export default Span;
