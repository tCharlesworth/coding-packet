import React    from 'react';
import ReactDOM from 'react-dom';

import TileComponent    from './components/Tile';
import ArticleComponent from './components/Article';

const App = () => {
  return (
    <div style={ styles.appStyles }>
      <ArticleComponent />
      <br/><br/><br/><br/><br/>
      <TileComponent />
    </div>
  );
};

const styles = {
  appStyles: {
    width: '50%',
    margin: 'auto'
  }
};

ReactDOM.render(<App />, document.getElementById('app'));