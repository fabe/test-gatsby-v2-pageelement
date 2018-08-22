import React from 'react';

export default () => (
  <div style={{ backgroundColor: '#FF4136' }}>
    First level - red
    <div style={{ backgroundColor: '#0074D9' }}>
      Second level - blue
      <div style={{ backgroundColor: '#2ECC40' }}>Third level - green</div>
    </div>
  </div>
);
