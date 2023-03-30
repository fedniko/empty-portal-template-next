import { Spinner } from 'react-bootstrap';
import React from 'react';

export default function Loader() {
  return (
    <div className="loader_wrapper w-100 d-flex justify-content-center">
      <Spinner animation="border" role="status" variant="primary" />
    </div>
  );
}
