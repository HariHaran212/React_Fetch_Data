import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'

import { useState, useEffect } from 'react'
import Tabs from './Tabs.jsx'
import Content from './Content.jsx';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [tabs, setTab] = useState([
    {
      id: 'Users',
      active: true
    },
    {
      id: 'Posts',
      active: false
    },
    {
      id: 'Comments',
      active: false
    },
    {
      id: 'Photos',
      active: false
    }
  ]);
  const [currTab, setCurrTab] = useState("Users")
  const [content, setContent] = useState([])

    
  const changeTab = (currTab) => {
    const newTabs = tabs.map(tab => {
      try{
        if(tab.id === currTab){
          return {...tab , active: true}
        }
        else{
          return {...tab , active: false}
        }
      }
      catch(err){
        console.log(err.message)
      }
    })
    setTab(newTabs)
  }

  useEffect(() => {
    const fetchData = async (id) => {
      try{
        const response =  await fetch(`${API_URL}${currTab}`)

        if(!response.ok) throw Error("Data Not Received");

        const newContent = await response.json()
        setContent(newContent)
      }
      catch(err){
        console.log(err)
      }
      finally{
        changeTab(currTab)
      }
    }

    fetchData()

  }, [currTab])

  return (
    <main>
      <Tabs 
        tabs={tabs}
        changeTab={changeTab}
        setCurrTab={setCurrTab}
      />
      <Content
        content={content}
      />
    </main>
  )
}

export default App
