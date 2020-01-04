import express from 'express'
import * as ui from 'cra-package'

const app = express()

app.use(express.static(ui.directoryPath))
app.get('/', function (req, res) {
    res.sendFile(ui.defaultFilePath)
})

app.listen(9000, () => {
    console.log(`Server started on http://localhost:9000`)
})