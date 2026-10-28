
(function(){
const root=document.getElementById('academicos');if(!root)return;
const cards=[...root.querySelectorAll('.academic-card')];
const filters=[...root.querySelectorAll('.ac-filter')];
function currentLang(){return document.documentElement.lang==='en'?'en':'pt'}
function updateLabel(b,expanded){b.setAttribute('aria-expanded',String(expanded));const lang=currentLang();b.textContent=expanded?(lang==='en'?'Hide details −':'Ocultar detalhes −'):(lang==='en'?'View details +':'Ver detalhes +')}
cards.forEach(card=>{const b=card.querySelector('.ac-open');b.addEventListener('click',()=>{const expanded=!card.classList.contains('ac-expanded');card.classList.toggle('ac-expanded',expanded);updateLabel(b,expanded);});});
filters.forEach(btn=>btn.addEventListener('click',()=>{const cat=btn.dataset.acFilter;filters.forEach(f=>{const active=f===btn;f.classList.toggle('active',active);f.setAttribute('aria-pressed',String(active));});cards.forEach(card=>{card.hidden=cat!=='all'&&card.dataset.acArea!==cat;});}));
const languageButton=document.getElementById('lang');if(languageButton){languageButton.addEventListener('click',()=>{cards.forEach(c=>{const b=c.querySelector('.ac-open');updateLabel(b,c.classList.contains('ac-expanded'));});});}
})();
