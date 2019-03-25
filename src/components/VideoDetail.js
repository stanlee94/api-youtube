import React from "react";

class VideoDetail extends React.Component {
  render() {
    if (!this.props.currentVideo) {
      return <div />;
    }

    const { snippet, id } = this.props.currentVideo;
    const videoSrc = `https://www.youtube.com/embed/${id.videoId}`;

    return (
      <div>
        <div className="ui embed">
          <iframe title="Vidoe Player from Youtube" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="header">{snippet.title}</h4>
          <p>{snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
