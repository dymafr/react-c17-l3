import React from 'react';
import { useRouteError } from 'react-router';

export default function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h2>ErrorBoundary</h2>
      <p>{error.message || error.statusText}</p>
    </>
  );
}
