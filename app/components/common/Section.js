import React from 'react';

const Section = (props) => {
  return (
    <section style={styles.sectionStyles}>
      { props.children }
    </section>
  );
};

const styles = {
  sectionStyles: {
    marginBottom: 10
  }
};

export { Section };