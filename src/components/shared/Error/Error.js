import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => (
    <div className="alert alert-danger" role="alert">
        <i className="fas fa-exclamation-circle mr-2"></i>
        <span>{props.message}</span>
    </div>
);

Error.propTypes = {
    message: PropTypes.string.isRequired
};

export { Error };