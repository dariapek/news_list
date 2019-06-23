import React from "react";

class News extends React.Component {
  deleteNews = () => {
    this.props.deleteBlock(this.props.index);
  };
  render() {
    return (<div className="news">
        <div className="news__inner">
          <p className="news__title">{this.props.title}</p>
          <p className="news__desc">{this.props.desc}</p>
        </div>
        <button className="button" onClick={this.deleteNews}>Прочитал</button>
    </div>);
  };
}

export default News;
