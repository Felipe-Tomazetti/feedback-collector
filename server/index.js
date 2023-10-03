const express = require('express');
//import express from 'express'; Node doesnt have support for ES2015 sintax

const app = express();

//create route handler and associate it

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(3000);