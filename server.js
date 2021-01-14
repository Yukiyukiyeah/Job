/*
 * @Author: your name
 * @Date: 2021-01-14 11:09:28
 * @LastEditTime: 2021-01-14 11:13:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JobList/job/server.js
 */
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
