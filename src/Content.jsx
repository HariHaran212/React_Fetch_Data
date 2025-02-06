import React from 'react'
import Row from './Row'
import Heading from './Heading'

const Content = ({content}) => {
  return (
    <table className='table table-light'>
      <thead>
          <Heading 
            content={content}
          />
      </thead>
      <tbody>
        {content.map((data) => 
            <Row key={data.id} data={data} />
        )}
      </tbody>
    </table>
  )
}

export default Content