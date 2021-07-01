const express = require('express')
const app = express()

app.get('/', ( req, res, next) => {
    
    res
    .status(200)
    .json({
        info: `Azure CI Sample App`
    })
    .end();
})

app.listen(80, () => {
    console.log(`APP RUNNING ON PORT ${ 80 }`)
})