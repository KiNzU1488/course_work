import React, { createContext, useContext, useState, useEffect } from 'react';

const WindowWidthContext = createContext();

export const useWindowWidth = () => {
  return useContext(WindowWidthContext);
};

export const WindowWidthProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {children}
    </WindowWidthContext.Provider>
  );
};
