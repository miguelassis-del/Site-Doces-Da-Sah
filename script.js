'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}));
const dialog = document.querySelector('#photo-dialog');
document.querySelectorAll('.creation').forEach(card => card.addEventListener('click', () => {
  const image = document.querySelector('#dialog-image');
  image.src = card.dataset.image;
  image.alt = card.querySelector('img').alt;
  document.querySelector('#dialog-title').textContent = card.dataset.title;
  dialog.showModal();
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect=dialog.getBoundingClientRect(); if(event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) dialog.close(); } });
const form = document.querySelector('#order-form');
const dateInput = document.querySelector('#date');
const today = new Date();
const localDate = [today.getFullYear(), String(today.getMonth()+1).padStart(2,'0'),String(today.getDate()).padStart(2,'0')].join('-');
dateInput.min = localDate;
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const details = form.elements.details.value.trim();
  if (!name || !details) { document.querySelector('#form-status').textContent='Preencha seu nome e conte sua ideia para continuar.'; return; }
  const date = dateInput.value;
  const formattedDate = date ? date.split('-').reverse().join('/') : 'A combinar';
  const message = `Olá, Sah! Meu nome é ${name}. Gostaria de consultar uma encomenda.\n\nProduto: ${form.elements.product.value}\nData: ${formattedDate}\nMinha ideia: ${details}\n\nPode me informar os valores e a disponibilidade?`;
  const url = `https://wa.me/5511988562421?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  const status = document.querySelector('#form-status');
  status.textContent='Sua mensagem está pronta. Se o WhatsApp não abriu, ';
  const link=document.createElement('a'); link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='toque aqui para continuar.';link.style.textDecoration='underline';status.append(link);
});
document.querySelector('#year').textContent = new Date().getFullYear();
