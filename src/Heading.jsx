import React from 'react'

const Heading = ({content}) => {
  return (
    <tr>{
        Object.entries(content.length > 0 ? content[0]: {}).map(([key, value]) => (
            <td key={key}>{key.toUpperCase()}</td>
        ))            
        }
    </tr>
  )
}

export default Heading