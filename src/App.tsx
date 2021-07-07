import React from 'react'
import useLocalStorage from 'use-local-storage'

import './App.css'

import ThemeContext, { Themes, ThemeType } from './ThemeContext'
import ThemeSelect from './ThemeSelect'
import MyComponent from './MyComponent'

function App (): JSX.Element {
  // const [themeType, setThemeType] = React.useState<ThemeType>('light')
  const [_themeType, setThemeType] = useLocalStorage<ThemeType>('light')
  const themeType = _themeType ?? 'light'
  const theme = Themes[themeType]

  return (
    <div className='App'>
      <ThemeContext.Provider value={theme}>

        <ThemeSelect
          setThemeType={(newThemeType: ThemeType) => {
            setThemeType(newThemeType)
          }}
          selected={themeType}
        />

        <MyComponent />

      </ThemeContext.Provider>
    </div>
  )
}

export default App
