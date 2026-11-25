const STORE_KEY='practica-acredita-v1';const CURSOR_KEY='practica-acredita-cursor-v1';
function readStore(key){try{return JSON.parse(localStorage.getItem(key))||{};}catch{return {};}}
const state=readStore(STORE_KEY),cursor=readStore(CURSOR_KEY);const completed=QUESTIONS.filter(q=>['correct','incorrect','written'].includes(state[q.id]?.status)).length;
document.querySelector('#progress-number').textContent=`${completed}/${QUESTIONS.length}`;document.querySelector('#progress-bar').style.width=`${completed/QUESTIONS.length*100}%`;
for(const m of ['matematica','ciencias']){const qs=QUESTIONS.filter(q=>q.module===m);const n=qs.filter(q=>state[q.id]?.status==='correct').length;const label=m==='matematica'?'math':'science';document.querySelector(`#${label}-progress`).textContent=`${n} de ${qs.length} correctas`;const c=cursor[m]||0;document.querySelector(`#${label}-action`).textContent=c>=qs.length?'Repasar módulo →':c>0?'Continuar →':'Comenzar →';}
