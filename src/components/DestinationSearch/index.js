import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {search: ''}

  changeinput = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {search} = this.state
    const {destinationsList} = this.props
    const newList = destinationsList.filter(item =>
      item.name.toUpperCase().includes(search.toUpperCase()),
    )

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input">
            <input
              type="search"
              className="input"
              placeholder="Search"
              onChange={this.changeinput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="list-container">
            {newList.map(element => (
              <DestinationItem value={element} key={element.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
