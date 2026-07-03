import { useEffect, useRef, useState, useCallback } from 'react'

export interface Manifest {
  images: string[]
  videos: string[]
}

export type MediaItem = { type: 'image'; src: string } | { type: 'video'; src: string }

export function interleave(
  images: string[],
  videos: string[],
  imgBase = '/portifolioImgs',
  vidBase = '/videosImgs',
): MediaItem[] {
  const items: MediaItem[] = []
  const imgs = images.map(f => ({ type: 'image' as const, src: `${imgBase}/${f}` }))
  const vids = videos.map(f => ({ type: 'video' as const, src: `${vidBase}/${f}` }))
  const max = Math.max(imgs.length, vids.length)
  for (let i = 0; i < max; i++) {
    if (imgs[i]) items.push(imgs[i])
    if (vids[i]) items.push(vids[i])
  }
  return items
}

/** Fetch a media manifest and return the interleaved items + a loaded flag. */
export function useManifest(
  url: string,
  imgBase = '/portifolioImgs',
  vidBase = '/videosImgs',
): { items: MediaItem[]; loaded: boolean } {
  const [items, setItems] = useState<MediaItem[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then((m: Manifest) => {
        setItems(interleave(m.images ?? [], m.videos ?? [], imgBase, vidBase))
        setLoaded(true)
      })
      .catch(() => setLoaded(true))
  }, [url, imgBase, vidBase])

  return { items, loaded }
}

function VideoTile({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? el.play() : el.pause() },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
    />
  )
}

function Lightbox({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-carbon/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-sand hover:text-cream transition-colors z-10"
        aria-label="Fechar"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>

      {/* Media — stop propagation so clicking it doesn't close */}
      <div
        className="max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {item.type === 'image' ? (
          <img
            src={item.src}
            alt=""
            className="max-w-full max-h-[90vh] object-contain"
          />
        ) : (
          <video
            src={item.src}
            autoPlay
            controls
            playsInline
            className="max-w-full max-h-[90vh]"
          />
        )}
      </div>
    </div>
  )
}

/** Masonry media grid with click-to-open lightbox. Reveals its own tiles on scroll. */
export function MediaGallery({
  items,
  columns = 'columns-2 lg:columns-3',
}: {
  items: MediaItem[]
  columns?: string
}) {
  const [selected, setSelected] = useState<MediaItem | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const close = useCallback(() => setSelected(null), [])

  // Tiles mount asynchronously (after the manifest loads), so the global
  // App observer has already run — reveal them with a local observer.
  useEffect(() => {
    const root = gridRef.current
    if (!root || items.length === 0) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    root.querySelectorAll('.fade-up').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [items])

  return (
    <>
      <div ref={gridRef} className={`${columns} gap-3 [&>*]:mb-3`}>
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(item)}
            className="break-inside-avoid overflow-hidden group cursor-pointer relative fade-up"
            style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt=""
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <VideoTile src={item.src} />
            )}

            {/* Play icon hint for videos */}
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-carbon/60 backdrop-blur-sm flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-cream translate-x-0.5">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {selected && <Lightbox item={selected} onClose={close} />}
    </>
  )
}
