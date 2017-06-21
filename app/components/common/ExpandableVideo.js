import React, { Component } from 'react';

class ExpandableVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoSource:  props.src,
      videoPoster:  props.poster,
      videoTite:    props.title,
      videoCaption: props.caption,
      showVideoControls: false,
      expanded: false
    };
  }
  OnVideoClick() {
    const video = this.refs.videoRef;
    if(video.paused) {
      video.play();
      this.setState({showVideoControls: true, expanded: true});
    } else {
      video.pause();
    }
  }
  render() {
    const controls = {controls: this.state.showVideoControls};
    const { containerStyles, videoStyles, infoBoxStyles, transitionStyles } = styles;
    const expandedStyles = this.state.expanded ? transitionStyles : {};
    return (
      <div style={containerStyles}>
        <video 
          style={{...videoStyles, ...expandedStyles}}
          onClick={this.OnVideoClick.bind(this)}
          ref="videoRef" 
          width="300" 
          poster={this.state.videoPoster}
          {...controls}>

          <source src={this.state.videoSource} />
        </video>
        <div style={{...infoBoxStyles, ...expandedStyles}}>
          {this.props.children}
        </div>
        <div style={{clear: 'both'}} />
      </div>
    );
  }
}

const styles = {
  containerStyles: {
    position: 'relative'
  },
  videoStyles: {
    float: 'left',
    width: '30%',
    minWidth: 200,
    transition: 'width 1s ease',
    marginBottom: 20
  },
  infoBoxStyles: {
    float: 'right',
    width: 'calc(100% - 210px)',
    transition: 'width 1s ease'
  },
  transitionStyles: {
    width: '100%'
  }
};

export { ExpandableVideo };