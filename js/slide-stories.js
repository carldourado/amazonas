class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`);
        this.active = 0;
        this.init();
    }
    activeSlide(index) {
        this.active = index;
        this.items.forEach((item) => item.classList.remove('active'));
        this.items[index].classList.add('active');
        this.thumbItems.forEach((item) => item.classList.remove('active'));
        this.thumbItems[index].classList.add('active');
        this.autoSlide();
    }

    prev () {
        if(this.active > 0) {
            this.activeSlide(this.active - 1);
        } else {
            this.activeSlide(this.items.length - 1);
        }
    }

    next () {
        if(this.active < this.items.length - 1) {
            this.activeSlide(this.active + 1)
        } else {
            this.activeSlide(0);
        }
    }

    addNavigation() {
        const nextBtn = this.slide.querySelector('.slide-next');
        const prevBtn = this.slide.querySelector('.slide-prev');
        nextBtn.addEventListener('click', this.next);
        prevBtn.addEventListener('click', this.prev);
    }

    addThumbItems() {
        this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
        this.thumbItems = Array.from(this.thumb.children);
    }

    autoSlide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }

    init() {
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.items = this.slide.querySelectorAll('.slide-items > *');
        this.thumb = this.slide.querySelector('.slide-thumb');
        this.addThumbItems(); 
        this.activeSlide(0);
        this.addNavigation();
    }
}

new SlideStories('slide');

// Script - Spectre//

  // Adicione um intervalo de tempo (em milissegundos) para controlar a velocidade de rotação automática
  const interval = 5000; // 5 segundos

  // Função para avançar automaticamente os slides
  function autoRotate() {
    const radios = document.querySelectorAll('.carousel-locator');
    let checkedRadio = document.querySelector('.carousel-locator:checked');

    if (!checkedRadio) {
      radios[0].checked = true;
    } else {
      const index = Array.from(radios).indexOf(checkedRadio);
      radios[(index + 1) % radios.length].checked = true;
    }
  }

  // Iniciar a rotação automática
  setInterval(autoRotate, interval);