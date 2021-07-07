import React, { useContext } from 'react'

import ThemeContext from './ThemeContext'

function MyComponent (): JSX.Element {
  const theme = useContext(ThemeContext)

  return (
    <p
      style={{
        color: theme.foreground,
        background: theme.background,
        padding: '10rem'
      }}
    >
      Lorem ipsum
    </p>
  )
}

export default MyComponent
