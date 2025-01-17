import express from "express"

const app = express()
const PORT = process.env.PORT


app.get('/', (req, res) => {
	res.send("Server is Ready!")
})

app.listen(PORT, () => {
	console.log(`Server started at: http://localhost:${PORT}`)
})
