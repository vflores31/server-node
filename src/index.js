import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) =>{
    req.send({msg:'Hello There' })
})

app.listen(port)