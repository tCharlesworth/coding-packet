import React from 'react';

const PageHeader = (props) => {
  return (
    <div style={styles.containerStyles}>
      <h2 style={ styles.subtitleStyles }>{ props.subtitle }</h2>
      <h1 style={ styles.titleStyles }>{ props.title }</h1>
    </div>
  );
};

const styles = {
  containerStyles: {
    marginBottom: 15
  },
  titleStyles: {
    fontSize: '1.8em',
    margin: 0,
    color: '#000'
  },
  subtitleStyles: {
    fontSize: '0.8em',
    margin: 0,
    color: 'grey'
  }
};

export { PageHeader };