import React from 'react';
import PropTypes from 'prop-types';

const TraversePathListItem = ({itemPosition, nextItemPosition}) => (
    <li className="list-group-item">From {itemPosition} index to {nextItemPosition}</li>
);

TraversePathListItem.propTypes = {
    itemPosition: PropTypes.number.isRequired,
    nextItemPosition: PropTypes.number.isRequired
};

export { TraversePathListItem };