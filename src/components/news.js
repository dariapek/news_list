import React from "react";

class News extends React.Component {
  deleteNews = () => {
    this.props.deleteBlock(this.props.index);
  };
  render() {
    return (<div className="news">
      <span className="news__title">{this.props.title}</span>
      <p className="news__desc">{this.props.desc}</p>
      <button className="news__read-button" onClick={this.deleteNews}>Прочитал</button>
    </div>);
  };
}

export default News;
