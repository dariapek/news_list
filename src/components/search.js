import React from "react";

class Search extends React.Component {
  render() {
    return (<form>
              <input ref="inputValue" onChange={this.props.filterNewsMethod} type="text" name="searchField" className="search" placeholder="Отфильтровать по названию" />
            </form>);
  };
}

export default Search;
