const main = document.querySelector('.main');
const alertBox = document.querySelector('.alert');
const exclamationIcon = document.querySelector('.fa-exclamation-circle');
const msg = document.querySelector('.msg');
const closeBtn = document.querySelector('.close-btn');
const closeIcon = document.querySelector('.fa-times');

class ShowAlert {
  constructor(state, borderColor, color) {
    this.state = state;
    this.borderColor = borderColor;
    this.color = color;
  }
  trigger(message) {
    alertBox.style.background = this.state;
    alertBox.style.borderColor = this.borderColor;
    msg.textContent = message;
    msg.style.color = this.color;
    exclamationIcon.style.color = this.color;
    closeIcon.style.color = this.color;

    alertBox.classList.add('show');
    alertBox.classList.remove('hide');
    setTimeout(() => {
      alertBox.classList.remove('show');
      alertBox.classList.add('hide');
    }, 5000);

    closeBtn.addEventListener('click', () => {
      alertBox.classList.remove('show');
      alertBox.classList.add('hide');
    });
  }
}

const warning = new ShowAlert('#980F5A','#92A9BD','#FFF89A');
const danger = new ShowAlert('#FF1700','#FF7272','#146356');
const primary = new ShowAlert('#1A374D','#406882','#B1D0E0');

main.addEventListener('click',(e) =>{
  if(e.target.classList.contains('btn-warning')){
    warning.trigger('Alert:Warning daaaa!!!!!');
  }
  else if(e.target.classList.contains('btn-danger')){
    danger.trigger('Alert:Danger daaaa!!!!!');
  }
  else if(e.target.classList.contains('btn-primary')){
    primary.trigger('Alert:Primary daaaa!!!!!');
  }
})

