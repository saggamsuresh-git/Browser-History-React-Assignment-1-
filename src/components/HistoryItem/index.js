import './index.css'

const HistoryItem = props => {
  const {details, deleteHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details
  const onDelete = () => {
    deleteHistoryItem(id)
  }
  return (
    <li className="search-item-container">
      <p className="time-stamp">{timeAccessed}</p>
      <div className="logo-title-container">
        <div className="logo-title">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button onClick={onDelete} type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
