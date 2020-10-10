import React from "react"
import { Link } from "gatsby"
import { Title } from "./Title"

const Info = () => {
  return (
    <section>
      <div className="container my-5">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam vero modi sed deleniti. Veniam expedita accusantium
              consequuntur animi tempore neque non nisi rerum obcaecati iusto et
              delectus dolorum tenetur quam sequi quia doloremque temporibus
              saepe nihil, error reiciendis cumque autem corrupti nostrum! Earum
              cum pariatur eligendi quasi nisi corrupti dolorum!
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
