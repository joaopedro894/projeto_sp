'use strict';
const menuBtn=document.querySelector('#menuBtn');
const menu=document.querySelector('#menu');
menuBtn.addEventListener('click',()=>{const aberto=menu.classList.toggle('aberto');menuBtn.setAttribute('aria-expanded',String(aberto));});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.classList.remove('aberto');menuBtn.setAttribute('aria-expanded','false');}));
document.querySelector('#ano').textContent=new Date().getFullYear();
const form=document.querySelector('#formContato');
const retorno=document.querySelector('#retorno');
form.addEventListener('submit',event=>{
 event.preventDefault();
 const nome=form.elements.nome.value.trim();
 const email=form.elements.email.value.trim();
 const assunto=form.elements.assunto.value;
 const mensagem=form.elements.mensagem.value.trim();
 const emailValido=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 if(nome.length<3){retorno.textContent='Informe um nome com pelo menos 3 caracteres.';form.elements.nome.focus();return;}
 if(!emailValido){retorno.textContent='Informe um e-mail válido.';form.elements.email.focus();return;}
 if(!assunto){retorno.textContent='Selecione um assunto.';form.elements.assunto.focus();return;}
 if(mensagem.length<10){retorno.textContent='A mensagem precisa ter pelo menos 10 caracteres.';form.elements.mensagem.focus();return;}
 retorno.textContent=`Obrigado, ${nome}! Mensagem validada com sucesso. Este formulário é demonstrativo e não envia dados.`;
 form.reset();
});
