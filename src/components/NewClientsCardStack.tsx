import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Archive, Menu, Folder } from "lucide-react"
import { ClientProjectModal } from "./ClientProjectModal"
import type { ClientProject } from "./ClientProjectModal"
import { clientProjects } from "../data/clientProjects"

interface Card {
  id: number
  contentType: number
}

const initialCards: Card[] = [
  { id: 1, contentType: 0 },
  { id: 2, contentType: 1 },
  { id: 3, contentType: 2 },
]

const positionStyles = [
  { scale: 1, y: 0 },
  { scale: 0.95, y: -30 },
  { scale: 0.9, y: -60 },
]

const exitAnimation = {
  y: 450,
  scale: 1.05,
  opacity: 1,
}

const enterAnimation = {
  y: -60,
  scale: 0.9,
}

function CardContent({
  contentType,
  onReadClick,
}: {
  contentType: number
  onReadClick: () => void
}) {
  const project = clientProjects[contentType % clientProjects.length]

  return (
    <div
      className="flex h-full w-full flex-col gap-4 cursor-pointer"
      onClick={onReadClick}
    >
      <div className="relative -outline-offset-1 flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg outline outline-white/10">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full select-none object-cover"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm">
            {project.category}
          </span>
        </div>
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-black/80 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
            {project.company}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-semibold text-white">{project.title}</span>
          <span className="text-sm text-gray-400">{project.industry}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onReadClick()
          }}
          className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-white pl-4 pr-3 text-sm font-medium text-black transition-transform hover:scale-105 hover:bg-gray-100 active:scale-95"
        >
          Website
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
  isAnimating,
  onReadClick,
}: {
  card: Card
  index: number
  isAnimating: boolean
  onReadClick: () => void
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const baseZIndex = 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale, zIndex: baseZIndex }}
      exit={{ ...exitAnim, zIndex: 100 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 0.5,
      }}
      style={{
        left: "50%",
        x: "-50%",
        bottom: "0",
        position: "absolute",
      }}
      className="absolute flex h-[420px] w-[486px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-white/10 bg-zinc-900 p-1 shadow-lg will-change-transform sm:w-[768px]"
    >
      <CardContent contentType={card.contentType} onReadClick={onReadClick} />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
    </motion.div>
  )
}

interface NewClientsCardStackProps {
  onAtlasClick?: () => void
}

export function NewClientsCardStack({ onAtlasClick }: NewClientsCardStackProps = {}) {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null)
  const [viewMode, setViewMode] = useState<'stack' | 'list'>('stack')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const lastScrollTime = useRef(0)
  const cardContainerRef = useRef<HTMLDivElement>(null)

  const currentIndex = cards[0].contentType % clientProjects.length

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    const prevContentType = currentIndex === 0 ? clientProjects.length - 1 : currentIndex - 1

    setTimeout(() => {
      setCards([{ id: nextId, contentType: prevContentType }, ...cards.slice(0, 2)])
      setNextId((prev) => prev + 1)
    }, 0)

    setTimeout(() => setIsAnimating(false), 450)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    const nextContentType = (cards[2].contentType + 1) % clientProjects.length

    setTimeout(() => {
      setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }])
      setNextId((prev) => prev + 1)
    }, 0)

    setTimeout(() => setIsAnimating(false), 450)
  }

  const handleReadClick = (contentType: number) => {
    setSelectedProject(clientProjects[contentType % clientProjects.length])
  }

  const handleListItemClick = (index: number) => {
    setSelectedProject(clientProjects[index])
  }

  // Native wheel event listener with { passive: false } to ensure preventDefault works
  useEffect(() => {
    const container = cardContainerRef.current
    if (!container || viewMode !== 'stack') return

    const handleWheel = (e: WheelEvent) => {
      // ALWAYS prevent page scroll when cursor is over the card stack
      e.preventDefault()
      e.stopPropagation()

      const now = Date.now()
      const timeSinceLastScroll = now - lastScrollTime.current

      // Debounce: Only allow card change every 350ms for smoother scrolling
      if (timeSinceLastScroll < 350) return

      lastScrollTime.current = now

      // Scroll down (positive deltaY) = next card
      // Scroll up (negative deltaY) = previous card
      if (e.deltaY > 0) {
        handleNext()
      } else if (e.deltaY < 0) {
        handlePrevious()
      }
    }

    // Add listener with passive: false to allow preventDefault
    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [viewMode, handleNext, handlePrevious])

  return (
    <>
      <div className="w-full">
        {/* Navigation Controls */}
        <div className="flex flex-col items-center justify-center mb-12 gap-6">
          <div className="flex items-center gap-6">
            {/* Arrow Navigation */}
            {viewMode === 'stack' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Previous article"
                >
                  <ChevronLeft className="h-5 w-5 text-white/70" />
                </button>
                <span className="text-sm text-gray-500 min-w-[60px] text-center">
                  {currentIndex + 1} / {clientProjects.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Next article"
                >
                  <ChevronRight className="h-5 w-5 text-white/70" />
                </button>
              </div>
            )}

            {/* Unified View Toggle & Atlas */}
            <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
              <button
                className={`rounded-md p-2 transition-colors ${viewMode === 'stack' ? 'bg-white/10' : 'hover:bg-white/10'}`}
                onClick={() => setViewMode('stack')}
                aria-label="Stack view"
              >
                <Archive className="h-5 w-5 text-white/70" />
              </button>
              <button
                className={`rounded-md p-2 transition-colors ${viewMode === 'list' ? 'bg-white/10' : 'hover:bg-white/10'}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <Menu className="h-5 w-5 text-white/70" />
              </button>
              <button
                onClick={onAtlasClick}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
                aria-label="Atlas 3D"
              >
                <Folder className="h-5 w-5 text-white/70" />
                <span className="text-sm font-medium text-white/70">Atlas (3D)</span>
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'stack' ? (
          <div className="flex w-full flex-col items-center justify-center pt-2">
            <div
              ref={cardContainerRef}
              className="relative h-[460px] w-full sm:w-[966px] overflow-hidden"
              style={{ perspective: '1500px' }}
            >
              <div className="relative h-full w-full" style={{ transformStyle: 'preserve-3d' }}>
                <AnimatePresence initial={false} mode="popLayout">
                  {cards.slice(0, 3).map((card, index) => (
                    <AnimatedCard
                      key={card.id}
                      card={card}
                      index={index}
                      isAnimating={isAnimating}
                      onReadClick={() => handleReadClick(card.contentType)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <div className="w-full max-w-5xl">
              <div className="divide-y divide-white/10">
                {clientProjects.map((project, index) => (
                  <button
                    key={project.id}
                    className="group flex w-full items-center gap-6 py-4 text-left transition-all hover:bg-white/5 overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleListItemClick(index)}
                  >
                    <span className="w-32 shrink-0 text-sm text-gray-600">
                      {project.category}
                    </span>
                    <span className="min-w-0 shrink-0 font-medium text-white" style={{ width: '280px' }}>
                      {project.title}
                    </span>
                    <span className="min-w-0 flex-1 text-gray-400">{project.company} • {project.industry}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-gray-700 transition-transform group-hover:translate-x-1 group-hover:text-gray-500" />

                    {/* Inline preview image */}
                    <div
                      className="shrink-0 overflow-hidden rounded-lg border border-white/20 shadow-lg transition-all duration-300 ease-out relative"
                      style={{
                        width: hoveredIndex === index ? '200px' : '0px',
                        height: hoveredIndex === index ? '120px' : '0px',
                        opacity: hoveredIndex === index ? 1 : 0,
                        marginLeft: hoveredIndex === index ? '16px' : '0px',
                      }}
                    >
                      <img
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                      {/* Gradient overlay - bottom and right fade */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/60" />
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <ClientProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  )
}
