import React, { useState } from "react"
import Img from "gatsby-image"
import { Title } from "./Title"

const getCategories = items => {
  let tempItems = items
    .map(item => {
      return item.node.category
    })
    .reduce(
      (items, item) => (items.includes(item) ? items : [...items, item]),
      []
    )
  return ["all", ...tempItems]
}
export default function Menu({ items }) {
  const [state, setState] = useState({
    items: items.edges,
    coffeeItem: items.edges,
  })

  const categories = getCategories(state.items)

  const handleCategory = category => {
    let tempItems = [...state.items]
    if (category === "all") {
      setState({
        ...state,
        coffeeItem: tempItems,
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      setState({
        ...state,
        coffeeItem: items,
      })
    }
  }

  if (state.items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          {/** categories */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className="btn btn-yellow text-capitalize m-2"
                    onClick={() => handleCategory(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          {/** items */}
          <div className="row mb-5">
            {state.coffeeItem.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 my-3 d-flex mx-auto"
                >
                  <Img fixed={node.image.fixed} />
                  {/** item text */}
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-cotent-between">
                      <h6 className="mb-0">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>${node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      <div className="container">
        <Title title="best of our menu" />
        <div className="row">
          <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
            <h1>there are no items to display</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
