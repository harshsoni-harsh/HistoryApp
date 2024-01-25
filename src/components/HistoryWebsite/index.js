import {Component} from 'react'
import initialHistoryList from '../InitialHistoryList'
import HistoryItem from '../HistoryItem'
import './index.css'

class App extends Component {
  state = {list: initialHistoryList, historyList: initialHistoryList}

  deleteBtn = event => {
    const {target} = event
    if (target.dataset.testid !== 'delete') {
      return
    }
    const {list} = this.state
    this.setState({
      list: list.filter(o => o.id !== parseInt(event.target.dataset.id)),
      historyList: list,
    })
    this.setState(obj => ({
      list: obj.list,
      historyList: obj.list,
    }))
  }

  searchList = event => {
    this.setState(obj => ({
      list: obj.historyList.filter(o =>
        o.title.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
      historyList: obj.historyList,
    }))
  }

  render() {
    const {list} = this.state
    return (
      <div className="body">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="appLogo"
          />
          <div className="searchBar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="searchBarImg"
            />
            <input
              placeholder="Search history"
              type="search"
              className="searchInput"
              onChange={this.searchList}
            />
          </div>
        </div>
        {list.length === 0 ? (
          <p className="nothing">There is no history to show</p>
        ) : (
          <ul className="card" onClick={this.deleteBtn}>
            {list.map(obj => (
              <HistoryItem obj={obj} uniqueId={obj.id} key={obj.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
