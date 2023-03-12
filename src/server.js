const app = require('./app');
const db = require('./db');

db.sequelize.sync().then(async () => {
  await console.log('Conectado ao Banco de Dados');
});

app.listen(5678, () => {
  console.log('Aplicação porta 5678');
});
