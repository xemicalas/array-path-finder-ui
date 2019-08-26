import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { TraversePathList } from './TraversePathList';

class ArrayPathFinderResults extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="m-3">
                {
                    this.props.fetched && this.renderResults()
                }
                {
                    <LoadingIndicator busy={this.props.fetching} />
                }
                {
                    this.props.failed && <Error message="Failed to calculate array path, please check your input." />
                }
            </div>
        );
    }

    renderResults() {
        if (this.props.calculationResult.pathExists) {
            return (
                <div>
                    <div className="alert alert-success" role="alert">
                        Can reach the array goal!
                    </div>
                    <TraversePathList path={this.props.calculationResult.path} />
                </div>
            );
        }
        else {
            return (
                <div className="alert alert-danger" role="alert">
                    Array goal is not reachable.
                </div>
            ); 
        }
    }
}

ArrayPathFinderResults.propTypes = {
    fetched: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    failed: PropTypes.bool,
    calculationResult: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { fetching, fetched, failed, calculationResult } = state.arrayState;

    return { fetching, fetched, failed, calculationResult };
};

const hoc = connect(mapStateToProps,)(ArrayPathFinderResults);

export { hoc as ArrayPathFinderResults };