import React from 'react';
import Error from '../components/error';

export default (Comp, errorData) => {
  return errorData ? <Error error={errorData} /> : Comp;
};
