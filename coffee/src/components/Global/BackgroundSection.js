import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ styleClass, title, children, img }) => (
  <BackgroundImage className={styleClass} fluid={img}>
    <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
      {title}
    </h1>
    {children}
  </BackgroundImage>
)

BackgroundSection.propTypes = {
  title: PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired,
  img: PropTypes.object,
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default BackgroundSection
