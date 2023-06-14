import React from 'react'
import "./apicard.css"
function Apicard() {
  return (
    <article className="zcard">
    <img
      className="zcard__background"
      src="https://i.imgur.com/QYWAcXk.jpeg"
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="zcard__content | flow">
      <div className="zcard__content--container | flow">
        <h2 className="zcard__title">Colombia</h2>
        <p className="zcard__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
          labore laudantium deserunt fugiat numquam.
        </p>
      </div>
      <button className="zcard__button">Read more</button>
    </div>
  </article>
  )
}

export default Apicard