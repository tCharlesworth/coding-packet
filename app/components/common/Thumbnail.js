import React from 'react';

const Thumbnail = (props) => {
  return (
    <img 
      className="cursorOnHover"
      style={styles.imageStyles}
      src={props.src}
      alt={props.alt}
      onClick={props.onClick} />
  );
};

const styles = {
  imageStyles: {
    width: 40,
    height: 40,
    float: 'right',
    marginLeft: 4
  }
};

export { Thumbnail };