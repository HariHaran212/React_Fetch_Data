import React from 'react'
import Table from './Table'

const Content = ({content}) => {
  return (
    <table className='table table-light'>
      <Table 
        content={content}
      />
    </table>
  )
}

export default Content