import navbar from "./components/navbar/navbar.js";
import home from "./components/paginas/home.js";
import sobre from "./components/paginas/sobre.js";
import contato from "./components/paginas/contato.js";
import servicos from "./components/paginas/servicos.js";
navbar();
const app = document.getElementById('app');

let rota = window.location.hash || '#inicio';
render();
window.addEventListener("hashchange", ()=>{
rota = window.location.hash;
render();


})

function render(){
    switch(rota){
        case '#inicio':
            app.innerHTML = home();
            //capturarFormulario();
        break;
        case '#sobre':
            app.innerHTML = sobre;
        break;
        case '#contato':
            app.innerHTML = contato();
        break;
        case '#servicos':
            app.innerHTML = servicos;
        break;
        default:
            app.innerHTML = `<h1> Página não encontrada </h1>`;
    }
}
