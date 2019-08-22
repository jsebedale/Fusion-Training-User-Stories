/*  /components/layouts/basic.jsx  */

import React from 'react'

const BasicLayout = (props) => {
  const [header, main, aside, footer] = props.children;
  return (
    <div className="container">
      <div className="row">
        <header className='col-lg-12'>
          {header}
        </header>
        <main className='col-lg-8'>
          {main}
        </main>
        <aside className='col-lg-4'>
          {aside}
        </aside>
        <footer className='col-lg-12'>
          {footer}
          <p>Copyright &copy; 2019</p>
        </footer>
      </div>
    </div>
  )
}

BasicLayout.sections = ['header', 'main', 'aside', 'footer']

export default BasicLayout