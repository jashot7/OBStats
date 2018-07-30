import React from 'react';
import { PropTypes } from 'prop-types';
import './presentational-component.css';

const PresentationalComponent = ({ onClick, testText }) => (
  <div onClick={onClick} className="example-presentational-component">
    <p>{testText}</p>
  </div>
);

PresentationalComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  testText: PropTypes.string.isRequired
};

export default PresentationalComponent;
