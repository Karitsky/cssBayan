let accordion = document.getElementsByClassName('accordion-item');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('mouseenter', function(){
    if (!this.classList.contains('active')) {
      this.classList.add('temp');
    }
  });

  accordion[i].addEventListener('mouseleave', function(){
    if (this.classList.contains('temp')) {
      this.classList.remove('temp');
    }
  });

  accordion[i].addEventListener('click', function(){
    for (y = 0; y < accordion.length; y++) {
      if (accordion[y] != this) {accordion[y].classList.remove('active')};
    }
    this.classList.toggle('active');
    this.classList.remove('temp');
  });

}

console.log('Thank you!');