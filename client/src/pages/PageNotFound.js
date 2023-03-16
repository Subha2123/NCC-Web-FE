import { Text } from '@mantine/core'
import React from 'react'

const pageStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
}
function PageNotFound() {
  return (
    <div style={pageStyle}>
      <Text> !OOPS PAGE NOT FOUND (404)</Text>
    </div>
  )
}

export default PageNotFound
