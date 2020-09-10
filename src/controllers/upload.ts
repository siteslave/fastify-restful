import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

import { v4 as uuidv4 } from 'uuid'

const multer = require('fastify-multer')
const mime = require('mime-types')

import * as fse from 'fs-extra'
import * as path from 'path'
import * as fs from 'fs'


export default async function upload(fastify: FastifyInstance) {

  const uploadDir = './uploads'

  var storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
      cb(null, uploadDir)
    },
    filename: function (req: any, file: any, cb: any) {
      const _ext = path.extname(file.originalname)
      const fileName = `${uuidv4()}${_ext}`
      cb(null, fileName)
    }
  })

  const upload = multer({ storage })

  fse.ensureDirSync(uploadDir)

  fastify.post('/', {
    preHandler: upload.single('file')
  }, async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const file = request.file

      reply.send({ file })
    } catch (error) {
      console.log(error)
      reply.code(500).send({ statusCode: 500, error: error.message })
    }
  })

  fastify.get('/:fileName', (request: FastifyRequest, reply: FastifyReply) => {
    const params: any = request.params
    const fileName = params.fileName
    const filePath = path.join(uploadDir, fileName)

    try {
      if (fs.existsSync(filePath)) {
        const mimeType = mime.lookup(fileName)
        const fileData = fs.readFileSync(filePath)
        reply.type(mimeType)
        reply.send(fileData)
      } else {
        reply.code(400).send({
          statusCode: 404,
          error: 'File not found'
        })
      }
    } catch (error) {
      reply.code(500).send({ statusCode: 500, error: error.message })
    }
  })
}
