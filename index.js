// Небольшая логика для изменения размера кнопок
const buttonSize = function () {
  const radioList = document.querySelector('[data-radio-size]');

  if (!radioList) {
    return;
  }

  const buttonList = document.querySelectorAll('[data-size-button]');
  const radioButtonList = radioList.querySelectorAll('input[type="radio"]');

  radioList.addEventListener('click', (event) => {
    radioButtonList.forEach((item) => {
      if (event.target === item && item.dataset.size === "small") {
        buttonList.forEach((button) => {
          button.classList.remove('button--large');
          button.classList.remove('button--medium');
          button.classList.add('button--small');
        })
      } else if (event.target === item && item.dataset.size === "medium") {
        buttonList.forEach((button) => {
          button.classList.remove('button--large');
          button.classList.add('button--medium');
          button.classList.remove('button--small');
        })
      } else if (event.target === item && item.dataset.size === "large") {
        buttonList.forEach((button) => {
          button.classList.add('button--large');
          button.classList.remove('button--medium');
          button.classList.remove('button--small');
        })
      }
    });
  })
}
//

// Небольшая функция чтобы сделать из ссылки-кнопки просто ссылку и отправить данные на условный сервер.
// Просто отменил действие по умолчанию предполагаю что ссылка-кнопка будет выполнять две задачи отправку данных и переход на следующюю страницу поэтому сделал так. 
const formSubmit = function () {
  const form = document.querySelector('.form');

  if (!form) {
    return;
  }
  const buttonSubmit = document.querySelector('.link-button--submit');

  buttonSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    form.submit();
  });
};
//

const burgerMenu = function () {
  const formNav = document.querySelector('.form-nav');
  if (!formNav) {
    return;
  }

  const menuList = document.querySelector('.form-nav__list');
  const buttonMenu = document.querySelector('.nav-button-menu');

  formNav.addEventListener('click', (event) => {
    if (event.target === buttonMenu) {
      buttonMenu.classList.toggle('nav-button-menu--active');
      menuList.classList.toggle('form-nav__list--active');
    }
  });

};

formSubmit();
buttonSize();
burgerMenu();