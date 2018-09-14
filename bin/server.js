//Importando o módulo
const app = require('../src/app');
//Definindo uma porta para que o módulo seja executado
const port = normalizaPort(process.env.PORT || '3000');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
//Passando para o método app.listen a porta que queremos que ele escute o 
//nosso projeto e dê um console.log nela
app.listen(port, function () {
    console.log(`app listening on port ${port}`)
});