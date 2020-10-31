
// importar dependencia

const express = require('express');
const path = require('path');
const pages = require('./pages.js');
//iniciando o express
const server = express()
server
//ultilizar o body e o req

.use(express.urlencoded({extended:true}))

//utilizando arquivos estáticos
.use(express.static('public'))

//configurar template enginem
.set('views', path.join(__dirname,"views"))
.set('view engine','hbs')

//rotas da aplicação 
.get('/', pages.index)//index
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)
// ligar servidor

server.listen(5566)