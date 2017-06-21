import React from 'react';

const FullImage = (props) => {
  return (
    <div>
      <img style={styles.imageStyles} src={props.src} alt={props.alt} />
    </div>
  );
};

const styles={
  imageStyles: {
    width: '100%',
    height: 'auto',
    maxHeight: 350
  }
};

export { FullImage };