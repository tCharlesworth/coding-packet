import React from 'react';

import { Section, ExpandableVideo } from './common';

const TileComponent = () => {
  const { infoTypeStyles, infoTitleStyles, infoDescriptionStyles } = styles;
  return (
    <Section>
      <ExpandableVideo
        src="http://ldsudso-a.akamaihd.net/66852713001/66852713001_2344897103001_2009-06-25-a-father-indeed-8000k-eng.mp4?playerId=710849472001&lineupId=&affiliateId=&pubId=710874264001&videoId=793877831001"
        poster="./images/photo06.jpg"
        title="Earthly Father, Heavenly Father"
        caption="A video for fathers.">
        <p style={infoTypeStyles}>News Release</p>
        <h2 style={infoTitleStyles}>A Father Indeed</h2>
        <p style={infoDescriptionStyles}>The story of a committed husband and father who consistently and passionately demonstrates his love and devotion to his wife and kids. The story of a committed husband and father who consistently and passionately demonstrates his love and devotion to his wife and kids.</p>
      </ExpandableVideo>
    </Section>
  );
}


const styles={
  infoTypeStyles: {
    color: '#a3bdc0',
    fontSize: '0.8em',
    margin: 0
  },
  infoTitleStyles: {
    fontSize: '1.5em',
    marginTop: 0
  },
  infoDescriptionStyles: {
    fontSize: '0.9em'
  }
};


export default TileComponent;