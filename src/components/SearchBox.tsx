import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleSubmit}
      >
        search
      </button>
    </div>
  );
};

export default SearchBox;
