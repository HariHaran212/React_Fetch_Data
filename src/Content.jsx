import React from 'react'
import Row from './Row'

const Content = ({content}) => {
  return (
    <table className='table table-light'>
      <thead>
          <tr>{
            Object.entries(content.length > 0 ? content[0]: {}).map(([key, value]) => (
              <td key={key}>{key.toUpperCase()}</td>
            ))            
            }
            
          </tr>
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