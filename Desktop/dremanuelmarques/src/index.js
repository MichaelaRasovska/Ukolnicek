import './style.css';

import './style.css';

const title = document.createElement('div');
title.classList.add('title');
title.textContent = 'prof. Doutor Emanuel Marques';

const textpt = document.createElement('div');
textpt.classList.add('textpt');
textpt.textContent =
  "Olá! Muito obrigado por ter consultado a nossa página web. Neste momento estamos a fazer manutenção da mesma, pelo que pedimos desculpa pelo inconveniente 🙏 Não hesite no entanto em entrar em contacto connosco por WhatsApp (913150699) ou através das nossas redes sociais (@dr.emanuelmarques). Agradecemos a sua compreensão 😊{' '}";

const texten = document.createElement('div');
texten.classList.add('texten');
texten.textContent =
  '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Hello! Thank you very much for visiting our website. Our Web page is currently under maintenance, we apologize for the inconvenience🙏 However, do not hesitate to contact us via WhatsApp (913150699) or through our social media platforms (@dr.emanuelmarques). Thank you for your understanding 😊';

const appElm = document.querySelector('.text');
appElm.append(title);
appElm.append(textpt);
appElm.append(texten);
