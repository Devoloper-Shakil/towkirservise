
const app=require('./app/app')

const port = process.env.PORT ||4000



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
