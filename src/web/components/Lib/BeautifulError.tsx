import React from 'react';

export const PageErrorFallback = ({ error }: { error: Error | null }) => {
  return <span>{error?.message}</span>;
};
