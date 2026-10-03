const menu = document.querySelector('.menu');
const nav = document.querySelector('#primary-nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');document.body.classList.remove('menu-open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');document.body.classList.toggle('menu-open',open)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu()});
window.addEventListener('resize',()=>{if(window.innerWidth>700)closeMenu()});
document.querySelectorAll('[data-service]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#service').value=link.dataset.service}));
document.querySelector('#quote').addEventListener('submit',event=>{event.preventDefault();const service=document.querySelector('#service').value;const description=document.querySelector('#description').value.trim();const message='Olá, VIDRARTE! Gostaria de um orçamento para '+service.toLowerCase()+'.'+(description?'\n\n'+description:'');window.location.href='https://wa.me/5513997136656?text='+encodeURIComponent(message)});
document.querySelector('#year').textContent=new Date().getFullYear();
