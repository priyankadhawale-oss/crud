import React from 'react'
import card from '../../Assets/invitecard.jpg';
import './gallery.css';
const Gallery = () => {
  return (
    <div>
        <div className="card text-bg-dark aligncard">
  <img src={card} className="card-img" alt="invitationcard"/>
  <div className="card-img-overlay">
    <h5 className="card-title">Our Grand Wedding</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>on dated 9th December</small></p>
  </div>
</div>
    </div>
  )
}

export default Gallery