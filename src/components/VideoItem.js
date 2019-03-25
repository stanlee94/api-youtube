import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: this.props.video.snippet.title };

    this.titleRef = React.createRef();
    this.imageRef = React.createRef();
  }

  handleSelect = () => {
    this.props.handleSelect(this.props.video);
  };

  textEllipsis = (str, maxLength, { side = "end", ellipsis = "..." } = {}) => {
    if (str.length > maxLength) {
      switch (side) {
        case "start":
          return ellipsis + str.slice(-(maxLength - ellipsis.length));
        case "end":
        default:
          return str.slice(0, maxLength - ellipsis.length) + ellipsis;
      }
    }
    return str;
  };

  imageSizer = () => {
    this.imageRef.current.addEventListener("load", () => {
      const imageHeight = this.imageRef.current.clientHeight;
      const titleHeight = this.titleRef.current.clientHeight;

      if (imageHeight < titleHeight) {
        const text = this.textEllipsis(this.props.video.snippet.title, 35);
        this.setState({ title: text });
      }
    });
  };

  componentDidMount() {
    this.imageSizer();
  }

  render() {
    const { snippet } = this.props.video;

    return (
      <div onClick={this.handleSelect} className="video-item item">
        <img
          ref={this.imageRef}
          className="ui image"
          src={snippet.thumbnails.medium.url}
          alt={snippet.title}
        />
        <div className="content">
          <div ref={this.titleRef} className="header">
            {this.state.title}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
