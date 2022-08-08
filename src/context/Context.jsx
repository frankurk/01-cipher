import React, { createContext, useState } from 'react';

const OffsetContext = createContext();

export function OffsetProvider({ children }) {
  const [offset, setOffset] = useState(5);

  const handleChange = (e) => setOffset(parseInt(e.target.value, 10));

  return (
    <OffsetContext.Provider value={{ handleChange, offset }}>{children}</OffsetContext.Provider>
  );
}

export default OffsetContext;
