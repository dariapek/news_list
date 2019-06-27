import React from "react";
import News from "./components/news";
import Search from "./components/search";

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
    this.setState({ news: arr });
  };

  filterNews = (evt) => {
    const value = evt.target.value.toLowerCase();
    var arr = this.state.news;
    var filterArr = [];

    if (value.length === 0) {
      this.componentDidMount();
    } else {
      filterArr = arr.filter(function(elem) {
        return elem.title.toLowerCase().includes(value);
      });

      filterArr.sort(function(a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
    this.setState({news: filterArr});
    }
  }

  eachTask = (item, i) => {
    return (
      <News
        key={i}
        index={i}
        title={item.title}
        desc={item.body}
        deleteBlock={this.deleteBlock}>
        {item}
      </News>
    );
  };

  normRender() {
    const { news } = this.state;
    return (
      <div className="news-list">
        <Search filterNewsMethod={this.filterNews}></Search>
        {news.map(this.eachTask).slice(0, this.state.amountNews)}
      </div>
    );
  }

  render() {
    if (this.state.news.length) {
      return this.normRender();
    } else {
      return (
        <div className="read-news"> Новых новостей нет.</div>
      );
    }
  }
}

export default App;
