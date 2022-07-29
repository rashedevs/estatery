import React from "react";
import Form from "react-bootstrap/Form";

const Rent = () => {
  return (
    <div className="d-flex mx-auto w-100 justify-content-around items-center py-5">
      <div className="fs-1 fw-bolder">
        <p>Search properties to rent</p>
      </div>
      <div>
        <Form.Select className="fw-normal">
          <option>Search with Search Bar</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default Rent;
