class Carousel {
    constructor(carouselElement) {
      this.carousel = carouselElement;
      this.track = this.carousel.querySelector('.carousel-track');
      this.items = Array.from(this.track.children);
      this.nextButton = this.carousel.querySelector('.carousel-button.next');
      this.prevButton = this.carousel.querySelector('.carousel-button.prev');
      this.indicatorsContainer = this.carousel.querySelector('.carousel-indicators');
      this.currentIndex = 0;
      this.autoPlayInterval = null;
      this.autoPlayDelay = 5000; // 5 secondes
      this.isDragging = false;
      this.startX = 0;
      this.currentTranslate = 0;
      this.prevTranslate = 0;
  
      this.init();
    }
  
    init() {
      this.createIndicators();
      this.updateCarousel();
      this.addEventListeners();
      this.startAutoPlay();
    }
  
    createIndicators() {
      this.items.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        this.indicatorsContainer.appendChild(indicator);
  
        indicator.addEventListener('click', () => {
          this.currentIndex = index;
          this.updateCarousel();
          this.resetAutoPlay();
        });
      });
  
      this.indicators = Array.from(this.indicatorsContainer.children);
    }
  
    updateCarousel() {
      const itemWidth = this.items[0].getBoundingClientRect().width;
      this.track.style.transform = `translateX(-${this.currentIndex * itemWidth}px)`;
      this.indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === this.currentIndex);
      });
    }
  
    goToNext() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.updateCarousel();
    }
  
    goToPrev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      this.updateCarousel();
    }
  
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => this.goToNext(), this.autoPlayDelay);
    }
  
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    }
  
    resetAutoPlay() {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  
    handleSwipeStart(event) {
      this.isDragging = true;
      this.startX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
      this.prevTranslate = this.currentTranslate;
    }
  
    handleSwipeMove(event) {
      if (!this.isDragging) return;
      const currentX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
      const deltaX = currentX - this.startX;
      this.currentTranslate = this.prevTranslate + deltaX;
      this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    }
  
    handleSwipeEnd() {
      this.isDragging = false;
      const movedBy = this.currentTranslate - this.prevTranslate;
  
      if (movedBy < -100 && this.currentIndex < this.items.length - 1) {
        this.goToNext();
      } else if (movedBy > 100 && this.currentIndex > 0) {
        this.goToPrev();
      } else {
        this.updateCarousel();
      }
  
      this.resetAutoPlay();
    }
  
    addEventListeners() {
      this.nextButton.addEventListener('click', () => {
        this.goToNext();
        this.resetAutoPlay();
      });
  
      this.prevButton.addEventListener('click', () => {
        this.goToPrev();
        this.resetAutoPlay();
      });
  
      this.track.addEventListener('mousedown', (e) => this.handleSwipeStart(e));
      this.track.addEventListener('mousemove', (e) => this.handleSwipeMove(e));
      this.track.addEventListener('mouseup', () => this.handleSwipeEnd());
      this.track.addEventListener('touchstart', (e) => this.handleSwipeStart(e));
      this.track.addEventListener('touchmove', (e) => this.handleSwipeMove(e));
      this.track.addEventListener('touchend', () => this.handleSwipeEnd());
      window.addEventListener('resize', () => this.updateCarousel());
    }
  }
  
  // Initialiser le carrousel
  document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('.carousel');
    new Carousel(carouselElement);
  });
  