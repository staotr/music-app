import React from 'react'


class Header extends React.Component {
  render() {
    return (
      <header className='appHeader flex'>
        <ul className='headerFunctions'>
          <li>
            <div className='searchContainer'>
              <i className='fas fa-search'></i>
              <input className='searchInput transition300'/>
            </div>
          </li>
          <li><a className='btnSecondary'>Sign in</a></li>
          <li><a className='btnPrimary'>Create account</a></li>
        </ul>
      </header>
    )
  }
}

export default Header
