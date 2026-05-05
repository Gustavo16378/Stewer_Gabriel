import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const IMAGE_EXTS = /\.(jpg|jpeg|png|webp|gif|avif)$/i
const VIDEO_EXTS = /\.(mp4|webm|mov)$/i

function portfolioManifestPlugin() {
  const imgDir = path.resolve(__dirname, 'public/portifolioImgs')
  const vidDir = path.resolve(__dirname, 'public/videosImgs')
  const out = path.resolve(__dirname, 'public/portfolio-manifest.json')

  function generate() {
    const images = fs.existsSync(imgDir)
      ? fs.readdirSync(imgDir).filter(f => IMAGE_EXTS.test(f))
      : []
    const videos = fs.existsSync(vidDir)
      ? fs.readdirSync(vidDir).filter(f => VIDEO_EXTS.test(f))
      : []
    fs.writeFileSync(out, JSON.stringify({ images, videos }))
  }

  return {
    name: 'portfolio-manifest',
    buildStart: generate,
    configureServer(server: any) {
      generate()
      server.watcher.on('add', generate)
      server.watcher.on('unlink', generate)
    },
  }
}

export default defineConfig({
  plugins: [react(), portfolioManifestPlugin()],
})
