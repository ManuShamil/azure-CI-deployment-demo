const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('*', ( req, res, next) => {
    res.redirect('https://' + req.headers.host + req.url);
})

app.get('/', ( req, res, next) => {
    
    res
    .status(200)
    .json({
        info: `Azure CI Sample App`
    })
    .end();
})

app.listen( PORT , () => {
    console.log(`APP RUNNING ON PORT ${ PORT }`)
})