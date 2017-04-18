global.express = require('express');
var app = express();
app.use(require('./index'));

app.listen(3000);
