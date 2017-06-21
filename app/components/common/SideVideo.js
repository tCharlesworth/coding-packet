import React, { Component } from 'react';

class SideVideo extends Component {
  constructor(props) {
    super(props);

    const { video } = props;
    this.state = {
      videoPoster:  video.poster,
      videoSource:  video.src,
      videoTitle:   video.title,
      videoCaption: video.caption,
      showVideoControls: false
    };
  }
  OnVideoClick() {
    const video = this.refs.videoRef;
    if(video.paused) {
      video.play();
      this.setState({showVideoControls: true})
    } else {
      video.pause();
    }
  }
  render() {
    const { videoContainerStyles, videoTitleStyles, videoCaptionStyles } = styles;
    const controls = {controls: this.state.showVideoControls};
    return (
      <div style={videoContainerStyles}>
        <video ref="videoRef" className="cursorOnHover" width="300" poster={this.state.videoPoster} {...controls} onClick={this.OnVideoClick.bind(this)} >
          <source src={this.state.videoSource}></source>
        </video>
        <p style={videoTitleStyles}>{this.state.videoTitle}</p>
        <p style={videoCaptionStyles}>{this.state.videoCaption}</p>
      </div>
    );
  }
}

const styles={
  videoContainerStyles: {
    width: 300,
    overflow: 'hidden',
    borderBottom: 'thin solid #d8d8d8',
    paddingBottom: 5,
    float: 'right',
    margin: 10,
    position: 'relative',
    right: '-60px'
  },
  videoTitleStyles: {
    fontWeight: 'bold',
    fontSize: '0.8em',
    color: '#000',
    margin: 0
  },
  videoCaptionStyles: {
    fontSize: '0.7em',
    margin: 0,
    color: 'grey'
  }
};

export { SideVideo };