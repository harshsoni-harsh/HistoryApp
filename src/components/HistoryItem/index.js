import './index.css'

const App = props => {
  const {obj, uniqueId} = props
  const {timeAccessed, title, logoUrl, domainUrl} = obj
  return (
    <li className="listItem">
      <div className="timeAndContent">
        <p className="time">{timeAccessed}</p>
        <div className="historyContent">
          <img src={logoUrl} alt="domain logo" className="domainLogo" />
          <div className="content">
            <p className="title">{title}</p>
            <p className="url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button type="button" data-testid="delete" data-id={uniqueId}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="buttonImg"
          data-testid="delete"
          data-id={uniqueId}
        />
      </button>
    </li>
  )
}

export default App
