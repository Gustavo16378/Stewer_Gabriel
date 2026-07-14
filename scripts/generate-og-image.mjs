// Gera public/og-image.jpg (1200x630) a partir da foto principal do hero.
// Crop centralizado no rosto/busto (estratégia de atenção) + overlay escuro
// sutil em gradiente linear a partir da esquerda, mantendo a estética dark.
//
// Uso: node scripts/generate-og-image.mjs   (ou: npm run og:image)

import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const SRC = resolve(root, 'public/photos/Stewer1.jpg') // foto principal do hero
const OUT = resolve(root, 'public/og-image.jpg')

const WIDTH = 1200
const HEIGHT = 630

// Overlay: gradiente linear preto a partir da esquerda (sutil).
const overlay = Buffer.from(
  `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="darken" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stop-color="#000000" stop-opacity="0.55" />
        <stop offset="40%"  stop-color="#000000" stop-opacity="0.20" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0" />
      </linearGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#darken)" />
  </svg>`
)

async function main() {
  await sharp(SRC)
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: sharp.strategy.attention })
    .composite([{ input: overlay }])
    .jpeg({ quality: 85 })
    .toFile(OUT)

  const meta = await sharp(OUT).metadata()
  console.log(`✔ og-image.jpg gerada: ${meta.width}x${meta.height} ${meta.format} (q85)`)
}

main().catch(err => {
  console.error('Falha ao gerar og-image:', err)
  process.exit(1)
})
