import React from 'react';

const FullHeightComponent = ({ children }) => {
  return (
    <div id="fullheight-component-wrapper" className="component-wrapper">
      {children}
    </div>
  );
};

export default FullHeightComponent;
