import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videoList: [], selectedVideo: null };

  componentDidMount() {
    this.handleSubmit("Huawei Mate 10 Pro");
  }

  handleSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async term => {
    const videos = await youtube(term);
    this.setState({
      videoList: videos.data.items,
      selectedVideo: videos.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.handleSubmit} />
        <div className="ui stackable two column grid">
          <div className="eleven wide column">
            <VideoDetail currentVideo={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              handleSelect={this.handleSelect}
              videoList={this.state.videoList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
