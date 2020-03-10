import fs from 'fs'
import multer from './src/config/multer'
import cloudinary from './src/config/cloudinary'
import server from './src/config/apolloServer'
import app from './src/config/app'

require('dotenv').config()
require('./src/config/db')

app.post('/upload-images', multer.array('image', 10), async (req, res) => {
  const uploader = async path => await cloudinary.uploads(path, 'prueba_nodejs')
  if (req.method === 'POST') {
    const urls = []
    const files = req.files
    for (const file of files) {
      const { path } = file
      const newPath = await uploader(path)
      urls.push(newPath)
      fs.unlinkSync(path)
    }

    res.status(200).json({
      message: 'images uploaded successfully',
      data: urls,
    })
  } else {
    res.status(405).json({
      err: `${req.method} method not allowed`,
    })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`server: http://localhost:${process.env.PORT}`)
})
