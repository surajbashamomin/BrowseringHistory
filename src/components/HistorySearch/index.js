import {Component} from 'react'

import HistoryItems from '../HistoryItems'

import './index.css'

class HistorySearch extends Component {
  state = {searchInput: '', userSearch: ''}

  deleteSearch = id => {
    const {historyItems} = this.props
    const filteredUserDate = historyItems.filter(
      eachSearch => eachSearch.id !== id,
    )
    this.setState({userSearch: filteredUserDate})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, userSearch} = this.state
    const searchResult = userSearch.filter(eachSearch =>
      eachSearch.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-image"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-image"
            />
            <input
              type="text"
              className="search-input"
              placeholder="Search History"
              onChange={this.onChangeSearch}
              value={searchInput}
            />
          </div>
        </div>
        <div className="history-container">
          <ul className="search-list-container">
            {searchResult.map(eachSearch => (
              <HistoryItems
                historyItems={eachSearch}
                key={eachSearch.id}
                deleteSearch={this.deleteSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default HistorySearch
