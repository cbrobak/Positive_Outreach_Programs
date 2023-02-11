import React from 'react';

export default function NotFound() {
  return (
    <>
    <h1 className="text-warning mt-5">Sorry the page at {location.pathname} was not found</h1>
    </>
  )
};