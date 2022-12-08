import './index.css'

const HistoryItems = props => {
  const {historyItems, deleteSearch} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItems
  const onDeleteButton = () => {
    deleteSearch(id)
  }
  return (
    <li className="list-items">
      <div className="text-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="logoUrl" className="logo-image" />
        <p className="paragraph">{title}</p>
        <p className="domain-paragraph">{domainUrl}</p>
      </div>
      <div>
        <button className="button" type="button" onClick={onDeleteButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItems
