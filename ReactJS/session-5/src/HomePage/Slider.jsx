function Slider() {
    return (
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXn9Xz7TD84SY-t8LOJp2vOkut1k4oGReP5g&s"
                     class="d-block w-100" alt="..." height="300"/>
                </div>
                <div class="carousel-item">
                    <img src="https://i.pinimg.com/736x/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg" 
                    class="d-block w-100" alt="..." height="300"/>
                </div>
                <div class="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6oxw0Y-VpbQRt2AgtQbPbmrWnVuEvQ3M-JQ&s" 
                    class="d-block w-100" alt="..." height="300"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;