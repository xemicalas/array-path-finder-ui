import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { TraversePathListItem } from './TraversePathListItem';

const TraversePathList = (props) => (
    <Fragment>
        <div className="card">
            <div className="card-header">
                Traverse path
            </div>
            <ul className="list-group list-group-flush">
                {props.path.map(pathItem => renderPathItem(pathItem))}
            </ul>
        </div>
    </Fragment>
);

const renderPathItem = pathItem => (
    <Fragment key={`${pathItem.itemPosition}${pathItem.nextItemPosition}`}>
        <TraversePathListItem itemPosition={pathItem.itemPosition} nextItemPosition={pathItem.nextItemPosition} />
    </Fragment>
);

TraversePathList.propTypes = {
    path: PropTypes.array.isRequired
};

export { TraversePathList };