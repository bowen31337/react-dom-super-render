import React, { Fragment } from 'react'


const app = () =>  (
  <Fragment>
    <header onClick={el => alert(`you click ${el.currentTarget.textContent}`)}>Header</header>
    <main onClick={el => alert(`you click ${el.currentTarget.textContent}`)}>Main</main>
    <aside onClick={el => alert(`you click ${el.currentTarget.textContent}`)}>Aside</aside>
    <footer onClick={el => alert(`you click ${el.currentTarget.textContent}`)}>Footer</footer>
  </Fragment>
)

export default app