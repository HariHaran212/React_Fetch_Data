import React from 'react'
import Heading from './Heading'
import Row from './Row'

const Table = ({content}) => {
  return (
    <>
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
    </>
  )
}

export default Table