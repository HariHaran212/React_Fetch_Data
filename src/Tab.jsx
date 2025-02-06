import React from 'react'

const Tab = ({tab, changeTab, setCurrTab}) => {
  return (
    <div 
        className={`col p-2 bg-aqua rounded m-1 tab `+(tab.active ? 'active' : '')}
        id={tab.id}
        aria-label={tab.id}
        onClick={() => setCurrTab(tab.id)}
        >
        {tab.id}
      </div>
  )
}

export default Tab