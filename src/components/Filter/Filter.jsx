import React from 'react';
import css from 'components/Filter/Filter.module.css';
import { PropTypes } from 'prop-types';

const Filter = ({ filter, onChange }) => (
  <label htmlFor="filter">
    Filter
    <input
      type="text"
      className={css.input}
      id="filter"
      value={filter}
      onChange={onChange}
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
