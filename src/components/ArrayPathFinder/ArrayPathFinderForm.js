import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { calculateArrayPath, failedToCalculate } from '../state/actions/ArrayPathFinderActions';

class ArrayPathFinderForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayValue: ''
        };
    }

    handleChange(event) {
        this.setState({
            arrayValue: event.target.value
        });
    }

    calculateArrayPath() {
        try {
            this.props.calculateArrayPath(JSON.parse(this.state.arrayValue));
        } catch (ex) {
            this.props.failedToCalculate();
        }
        
    }

    render() {
        return (
            <div className="m-3">
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter array</span>
                    </div>
                    <textarea className="form-control" value={this.state.arrayValue} onChange={event => this.handleChange(event)} aria-label="Enter array"></textarea>
                </div>
                <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={this.calculateArrayPath.bind(this)}>Calculate</button>
            </div>
        );
    }
}

ArrayPathFinderForm.propTypes = {
    calculateArrayPath: PropTypes.func.isRequired,
    failedToCalculate: PropTypes.func.isRequired,
    arrayValue: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { arrayValue } = state.arrayState;

    return { arrayValue };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ calculateArrayPath, failedToCalculate }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(ArrayPathFinderForm);

export { hoc as ArrayPathFinderForm };