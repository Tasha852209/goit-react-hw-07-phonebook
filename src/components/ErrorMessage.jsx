import { Notify } from 'notiflix';
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p>{Notify.failure(message)}</p>
    </div>
  );
};

export default ErrorMessage;
