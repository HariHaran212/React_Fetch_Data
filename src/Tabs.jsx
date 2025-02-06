import React from 'react'
import Tab from './Tab'

const Tabs = ({tabs, changeTab, setCurrTab}) => {
  return (
    <div className='row w-100 text-center'>
      {tabs.map((tab) => 
          <Tab
              key={tab.id}
              tab = {tab}
              changeTab={changeTab}
              setCurrTab={setCurrTab}
          />
      )}
    </div>
  )
}

export default Tabs