import React from 'react';

function Footer() {
  const footerStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    color: 'Black',
    fontSize: '1em',
    opacity: 1,
    pointerEvents: 'none', // makes it non-interactive to prevent interference
    userSelect: 'none',    // prevent text selection
    zIndex: 1000,          // make sure it’s on top
  };

  return (
    <div style={footerStyle}>
      0gm Counter by @itz_tentebo (oracle100)
    </div>
  );
}

export default Footer;


