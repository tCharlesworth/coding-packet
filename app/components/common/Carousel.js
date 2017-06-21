import React, { Component } from 'react';

import { FullImage, Thumbnail } from './';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: props.images || [],
      selectedImageIdx: 0
    };
  }
  SelectImage(idx) {
    this.setState({selectedImageIdx: idx});
  }
  RenderThumbnails() {
    return (
      <span style={styles.thumbnailContainerStyles}>
        {this.state.images.map((image, idx)=> {
          return <Thumbnail 
                    key={image.src} 
                    src={image.src} 
                    alt={image.alt}
                    onClick={this.SelectImage.bind(this, idx)} />
        })}
        <div style={{clear: 'both'}}></div>
      </span>
    );
  }
  render() {
    const selectedImage = this.state.images[this.state.selectedImageIdx];
    return (
      <div>
        <FullImage 
          src={selectedImage.src}
          alt={selectedImage.alt} />
        
        <div>
          { this.RenderThumbnails() }
          <p style={styles.imageTitleStyles}>{selectedImage.title}</p>
          <p style={styles.imageCaptionStyles}>{selectedImage.caption}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  thumbnailContainerStyles: {
    float: 'right'
  },
  imageTitleStyles: {
    fontWeight: 'bold',
    fontSize: '0.8em',
    color: '#000',
    margin: 0
  },
  imageCaptionStyles: {
    color: 'grey',
    margin: 0,
    fontSize: '0.7em'
  }
};

export { Carousel };