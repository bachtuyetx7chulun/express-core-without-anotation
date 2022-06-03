import dotenv from 'dotenv'
dotenv.config()

import { app } from '@app'
import http from 'http'
import { config } from '@config/index'

const PORT = config.get('port')

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
