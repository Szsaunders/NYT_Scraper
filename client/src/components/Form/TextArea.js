import React from "react";

export const TextArea = props => (
  <div className="form-group">
  <label for={props.name}>Number of Records to Retrieve:</label>
    <textarea className="form-control" rows="20" {...props} />
  </div>
);
