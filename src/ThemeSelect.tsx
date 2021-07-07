import React, { useContext } from 'react'

import ThemeContext, { Themes, ThemeType } from './ThemeContext'

interface ThemeSelectProps {
  setThemeType: (newThemeType: ThemeType) => void
  selected: ThemeType
}

function ThemeSelect (props: ThemeSelectProps): JSX.Element {
  const theme = useContext(ThemeContext)

  return (
    <select
      onChange={(e) => {
        const selected = e.target.value as ThemeType
        props.setThemeType(selected)
      }}
      style={{
        color: theme.foreground,
        background: theme.background
      }}
    >
      <option
        value='light'
        selected={props.selected === 'light'}
      >
        {Themes.light.name}
      </option>
      <option
        value='dark'
        selected={props.selected === 'dark'}
      >
        {Themes.dark.name}
      </option>
    </select>
  )
}

export default ThemeSelect
