import React from 'react'
import Data from './Data'

const Row = ({data}) => {
  return (
    <tr>
      {Object.entries(data).map(([key, value]) => 
        <Data key={key} data={JSON.stringify(value)} />
      )}
    </tr>
  )
}

export default Row