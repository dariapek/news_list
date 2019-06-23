import React from "react";
import News from "./components/news";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      amountNews: 10
    };
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(result => {
        this.setState({
          news: result
        });
      });
  };

  deleteBlock = i => {
    var arr = this.state.news;
    arr.splice(i, 1);
    this.setState({ tasks: arr });
  };

  sortNews = () => {
    var arr = this.state.news;
    arr.sort(function(a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    this.setState({ tasks: arr });
  };

  eachTask = (item, i) => {
    return (
      <News
        key={i}
        index={i}
        title={item.title}
        desc={item.body}
        deleteBlock={this.deleteBlock}
      >
        {item}
      </News>
    );
  };

  normRender() {
    const { news } = this.state;
    return (
      <div className="news-list">
        <button className="news-list__sort-button" onClick={this.sortNews}>
          Сортировать по названию
        </button>
        {news.map(this.eachTask).slice(0, this.state.amount)}
      </div>
    );
  }

  render() {
    if (this.state.news.length) {
      return this.normRender();
    } else {
      return (
        <div className="read-news"> Новых новостей нет, ты все прочел! </div>
      );
    }
  }
}

export default App;
