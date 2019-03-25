import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  render() {
    const videoList = this.props.videoList.map(video => {
      return (
        <VideoItem
          handleSelect={this.props.handleSelect}
          key={video.id.videoId}
          video={video}
        />
      );
    });

    return <div className="ui relaxed divided list">{videoList}</div>;
  }
}

export default VideoList;
