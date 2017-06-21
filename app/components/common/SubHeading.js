import React from 'react';

const SubHeading = (props) => {
  return (
    <h3 style={styles.subHeadingStyles}>{props.children}</h3>
  );
};

const styles = {
  subHeadingStyles: {
    fontSize: '1.3em',
    marginTop: 30,
    color: 'grey'
  }
};

export { SubHeading };