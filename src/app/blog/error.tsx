'use client';

const ErrorWrapper = ({ error }: { error: Error }) => {
  return <span>Error {error.message}</span>;
};

export default ErrorWrapper;
