import React, { useState } from 'react'
import './App.css'

import ThemeContext, { Themes, ThemeType } from './ThemeContext'
import ThemeSelect from './ThemeSelect'
import MyComponent from './MyComponent'

function App (): JSX.Element {
  const [themeType, setThemeType] = useState<ThemeType>('light')
  const theme = Themes[themeType]

  return (
    <div className='App'>
      <ThemeContext.Provider value={theme}>

        <ThemeSelect setThemeType={(newThemeType: ThemeType) => {
          setThemeType(newThemeType)
        }} />

        <MyComponent />

      </ThemeContext.Provider>
    </div>
  )
}

export default App
