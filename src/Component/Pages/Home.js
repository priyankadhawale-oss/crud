import React from 'react'
import wed1 from '../../Assets/img1.jpg';
import wed2 from '../../Assets/photo2.png';
import wed4 from '../../Assets/wedding4.png';
const Home = () => {
  return (
    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={wed1} className="d-block w-100 h-75 " alt="wed_photo1"/>
    </div>
    <div className="carousel-item">
      <img src={wed2} className="d-block w-100" alt="wed_photo2"/>
    </div>
    <div className="carousel-item">
      <img src={wed4} className="d-block w-100" alt="wed_photo4"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home