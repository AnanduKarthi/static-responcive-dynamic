import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const updateTabId = () => {
    onClickTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={updateTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
