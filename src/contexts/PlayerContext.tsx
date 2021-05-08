import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState
} from 'react'

type Episode = {
  id: string
  title: string
  members: string
  thumbnail: string
  duration: number
  url: string
}

type PlayerContextData = {
  episodeList: Episode[]
  currentEpisodeIndex: number
  isPlaying: boolean
  isLooping: boolean
  isShuffling: boolean
  play: (episode: Episode) => void
  addToList: (episode: Episode) => void
  togglePlay: () => void
  toggleLoop: () => void
  toggleShuffle: () => void
  setPlayState: (state: boolean) => void
  nextEpisode: () => void
  previousEpisode: () => void
  playOrder: React.MutableRefObject<number[]>
}

export const PlayerContext = createContext({} as PlayerContextData)

type PlayerContextProviderProps = {
  children: ReactNode
}

export const PlayerContextProvider: React.FC<PlayerContextProviderProps> = ({
  children
}) => {
  const [episodeList, setEpisodeList] = useState<Episode[]>([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)

  const playOrder = useRef<number[]>([])

  function play(episode: Episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    playOrder.current = [0]
    setIsLooping(false)
    setIsShuffling(false)
  }

  function addToList(episode: Episode) {
    if (episodeList.some(e => e.id === episode.id)) return
    playOrder.current = [...playOrder.current, playOrder.current.length]
    setEpisodeList(current => [...current, episode])
  }

  function togglePlay() {
    setIsPlaying(current => !current)
  }

  function toggleLoop() {
    setIsLooping(current => !current)
  }

  function randomEpisodeIndex() {
    const nextRandomEpisodeIndex = Math.floor(
      Math.random() * episodeList.length
    )
    if (playOrder.current.includes(nextRandomEpisodeIndex)) {
      return randomEpisodeIndex()
    }
    return nextRandomEpisodeIndex
  }

  function toggleShuffle() {
    if (isShuffling) {
      setCurrentEpisodeIndex(playOrder.current[currentEpisodeIndex])
      playOrder.current = playOrder.current.map((_p, index) => {
        return index
      })
    } else {
      playOrder.current = [playOrder.current[currentEpisodeIndex]]
      setCurrentEpisodeIndex(0)
      for (let i = 1; i < episodeList.length; i++) {
        playOrder.current.push(randomEpisodeIndex())
      }
    }

    setIsShuffling(current => !current)
  }

  function setPlayState(state: boolean) {
    setIsPlaying(state)
  }

  function nextEpisode() {
    if (currentEpisodeIndex + 1 < episodeList.length) {
      setCurrentEpisodeIndex(current => current + 1)
    }
  }

  function previousEpisode() {
    if (currentEpisodeIndex - 1 >= 0) {
      setCurrentEpisodeIndex(current => current - 1)
    }
  }

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        isLooping,
        isShuffling,
        play,
        addToList,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        setPlayState,
        nextEpisode,
        previousEpisode,
        playOrder
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayerContext = () => {
  return useContext(PlayerContext)
}
