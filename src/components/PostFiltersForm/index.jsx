import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const typingTimeoutRef = useRef(null);

  function handleValueChange(e) {
    const value = e.target.value
    setSearchTerm(value);

    //check is typingTimeoutRef null ?
    if(typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (!onSubmit) return;
      const formValue = {
        searchTerm: value,
      };
      onSubmit(formValue);
    },500);
  }
  return (
    <form>
      <label htmlFor="search-box">Search: </label>
      <input
        id="search-box"
        value={searchTerm}
        type="text"
        onChange={handleValueChange}
      ></input>
    </form>
  );
}

export default PostFiltersForm;
