import React from "react";
import PropTypes from "prop-types";

function Filter({ filter, onChange }) {
  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
      />
    </label>
  );
}
export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
