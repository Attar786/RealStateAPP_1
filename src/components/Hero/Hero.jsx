import "./Hero.css"
const Hero = () => {
  return (
<section className="hero-wrapper">
 <div className="paddings innerwidth flexCenter hero-container ">
<div className="hero-left">
  <div className="title">
    <h1>explore our web app with
</h1>
  </div>
  <div className="flexColStart discription">
    <span>Lorem ipsum sicing qui pnt corporis  aperiam provident officia aliquid vel vitae.</span>
    <span>Lorem ipsum sicing qui pnt corporis  aperiam provident officia aliquid vel vitae.</span>
  </div>
</div>
  <div className="flexCenter hero-right">
    <div className="image-container">
    <img src="./hero-image.png" alt="heroimafe" />
    </div>
  </div>
 </div>
</section>
  )
}
export default Hero