import React, { useState, useContext } from 'react';
import ThemeContext from "./context";


function Button({ title, onClick }) {
  const theme = useContext(ThemeContext);
  return (
    <div
      onClick={onClick}
      className='c-btn'
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
     }}>
      {title}
    </div>
  )
}

function Header() {
  return (
    <div>Header</div>
  )
}

function Body() {
  return (
    <div>
      Body
      <br/>
      <hr/>
      <hr/>
      <Button title='Click me' />
    </div>
  )
}

function Footer() {
  return (
    <div>Footer</div>
  )
}

function Website() {
  const [ theme, setTheme ] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      {/* Потомки получают доступ к значению theme */}
      <div className='website'>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Switch theme
        </button>
        <Header/>
        <Body />
        <Footer/>
        {/* Потомки получают доступ к значению theme */}
      </div>

    </ThemeContext.Provider>

  )
}

export default Website;

