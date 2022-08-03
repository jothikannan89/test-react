import React, { Component } from 'react'
import ProductListPage  from "./ProductListPage"
import Header from "../components/Header"
/* class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
  <main>
    <div className="container">
      <Header/>
      <section className="text-center mb-4">
          <ProductListPage/>
      </section>
    </div>
  </main>
      </div>
    )
  }
} */
export default function HomePage(){
  return(
    <div>
      <main>
        <div className="container">
          <Header/>
          <section className="text-center mb-4">
              <ProductListPage/>
          </section>
        </div>
      </main>
    </div>
  )
}

/* export default HomePage */