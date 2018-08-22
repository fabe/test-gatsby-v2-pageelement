import React from 'react';

export const wrapPageElement = ({ element }) => {
  return <div id="gatsby-browser-wrapper">{element}</div>;
};

// Same result with `replaceComponentRenderer`

// export const replaceComponentRenderer = ({ props }) => {
//   const children = React.createElement(props.pageResources.component, props);
//   return <div id="gatsby-browser-wrapper">{children}</div>;
// };
