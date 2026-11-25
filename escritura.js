const explanations={
  'ia-intro':{title:'Introducción: presenta el tema y la postura',text:'La introducción ubica al lector en el tema y deja clara la opinión que se defenderá. En este ejemplo se menciona que la inteligencia artificial ya está presente en la vida diaria y se expresa una postura favorable, con una condición: usarla con criterio.'},
  'ia-development':{title:'Desarrollo: explica los argumentos',text:'El desarrollo sostiene la postura con razones distintas. Este modelo presenta dos argumentos: la IA facilita el acceso a explicaciones y recursos, y puede mejorar la accesibilidad. Cada argumento se desarrolla con ejemplos concretos. Conectores como «En primer lugar» y «Además» ayudan a ordenar las ideas.'},
  'ia-counter':{title:'Considerar una preocupación',text:'Se reconoce una posible crítica: la IA puede fomentar dependencia o difundir errores. Luego se responde explicando cómo reducir esos riesgos, por ejemplo, verificando la información y protegiendo los datos. Considerar otra postura hace que el argumento sea más equilibrado.'},
  'ia-close':{title:'Cierre: reafirma la postura',text:'El cierre recupera la idea principal y la expresa como conclusión: la IA puede potenciar la vida cotidiana si acompaña el pensamiento humano. No agrega un argumento nuevo; deja clara la posición final.'},
  'letter-greeting':{title:'Saludo inicial: identifica al destinatario',text:'La carta comienza con un saludo breve y respetuoso dirigido a quien está a cargo del periódico. «Señor director» cumple esa función y establece un tono formal.'},
  'letter-intro':{title:'Introducción: presenta el debate y tu postura',text:'La introducción explica el tema —las compras internacionales por internet— y declara qué posición defenderá la carta. Conviene que el lector pueda reconocer la postura desde el comienzo.'},
  'letter-body':{title:'Cuerpo: desarrolla razones concretas',text:'El cuerpo presenta argumentos que justifican la postura. Aquí se explican dos beneficios: la mayor variedad de productos y la posibilidad de encontrar precios convenientes. Los ejemplos muestran cómo esos beneficios pueden servir a personas con necesidades distintas.'},
  'letter-counter':{title:'Otra postura: reconoce y responde',text:'Este párrafo reconoce ventajas del comercio local, como apoyar el empleo y recibir productos más rápido. Después explica que esas ventajas pueden considerarse al decidir cada compra. Así se demuestra que se tomó en cuenta el otro lado del debate.'},
  'letter-close':{title:'Cierre: sintetiza y reafirma',text:'El cierre resume la recomendación y reafirma la postura: priorizar la compra internacional cuando existe un beneficio claro. Termina con una idea final, sin abrir un tema nuevo.'},
  'letter-farewell':{title:'Saludo final: despídete con cortesía',text:'La despedida cierra formalmente la carta. «Atentamente» es una fórmula cortés; después se puede incluir el nombre de quien escribe o, en este modelo, una identificación general.'}
};
const dialog=document.querySelector('#explain-dialog');
const title=document.querySelector('#dialog-title');
const content=document.querySelector('#dialog-content');
function closeDialog(){dialog.close();}
document.querySelectorAll('.explain-button').forEach(button=>button.addEventListener('click',()=>{
  const item=explanations[button.dataset.dialog];
  if(!item)return;
  title.textContent=item.title;
  content.textContent=item.text;
  dialog.showModal();
}));
dialog.querySelector('.dialog-x').addEventListener('click',closeDialog);
dialog.querySelector('.dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('click',event=>{if(event.target===dialog)closeDialog();});
