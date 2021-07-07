import React from 'react'

export type ThemeType = 'light' | 'dark'

export interface Theme {
  name: string
  foreground: string
  background: string
}

export const Themes: { [key in ThemeType]: Theme } = {
  light: {
    name: 'Light',
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    name: 'Dark',
    foreground: '#ffffff',
    background: '#222222'
  }
}

const ThemeContext = React.createContext(Themes.light)
export default ThemeContext
