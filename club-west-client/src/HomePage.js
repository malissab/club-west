
export default function HomePage() {




    return (
        <div>
          <div style={{ width: '60%', margin: 150 }} id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/images/IMG_8503.jpg" alt="First slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/IMG_8502.jpg" alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/IMG_8382.jpeg" alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            
          
        </div>
    )
}