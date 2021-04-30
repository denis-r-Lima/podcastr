import React, { useContext, useEffect, useRef, useState } from "react";
import Image from 'next/image'
import Slider from 'rc-slider'
import { 
    IoRepeat, 
    IoPlaySharp, 
    IoPlaySkipForwardSharp, 
    IoPlaySkipBackSharp,  
    IoShuffle,
    IoPauseSharp,
} from 'react-icons/io5'

import 'rc-slider/assets/index.css'

import { usePlayerContext } from "../../contexts/PlayerContext";
import { Container, EmptyPlayer, Progress, EmptySlider, Buttons, CurrentPlaying } from "./styles";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";
import { ThemeContext } from "styled-components";

export function Player() {

    const [progress, setProgress] = useState(0)

    const { episodeList, 
        currentEpisodeIndex, 
        isPlaying, 
        isLooping,
        isShuffling,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        setPlayState,
        previousEpisode,
        nextEpisode,
        playOrder} = usePlayerContext()

    const audioRef = useRef<HTMLAudioElement>(null)
    const playerRef = useRef<HTMLDivElement>(null)

    const { colors } = useContext(ThemeContext)

    useEffect(()=>{
        if(!audioRef.current){
            return
        }
        if(isPlaying){
            audioRef.current.play()
            return
        }
        audioRef.current.pause()
        return
    },[isPlaying])

    const episode = episodeList[playOrder.current[currentEpisodeIndex]]

    function setUpProgressListener() {
        audioRef.current.currentTime = 0

        audioRef.current.addEventListener('timeupdate', () => {
            setProgress(Math.floor(audioRef.current.currentTime))
        })

        document.addEventListener('keypress', ({ key }) => {
            if(key === ' ') togglePlay()
        })
    }

    function onSlide(e: number){
        audioRef.current.currentTime = e
        setProgress(e)
    }

    function openClosePlayer(e: React.MouseEvent<HTMLDivElement>) {

        if(window.innerWidth > 720) return
        
        const isVisible = playerRef.current.classList.contains('visible')

        if(isVisible && e.clientX < e.currentTarget.offsetLeft){
            playerRef.current.classList.remove('visible')
            return
        }

        playerRef.current.classList.add('visible')    
    }

    return(
        <Container ref={playerRef} onClick={ e => openClosePlayer(e)}>
            <header>
                <img src="/playing.svg" alt="Playing now"/>
                <strong>Playing now</strong>
            </header>
                {episode ? 
                (
                    <CurrentPlaying>
                        <Image  width={592} height={592} src={episode.thumbnail} objectFit="cover" />
                        <strong>{episode.title}</strong>
                        <span>{episode.members}</span>
                    </CurrentPlaying>
                ):
                (<EmptyPlayer>
                    <strong>Select one podcast to play!</strong>
                </EmptyPlayer>)
                }
            <footer className={!episode? 'empty': ''}>
                <Progress className="progressBar">
                    <span>{convertDurationToTimeString(progress)}</span>
                    {episode ? 
                    (
                        <Slider 
                        max={episode.duration}
                        value={progress}
                        trackStyle={{ backgroundColor: colors.green}}
                        railStyle={{ backgroundColor: colors.Player_button_light }}
                        handleStyle={{ borderColor: colors.green, borderWidth: 3 }}
                        onChange={e => onSlide(e)}
                        />
                    ):
                    (
                        <EmptySlider />
                    )}
                    <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
                </Progress>

                { episode && (
                    <audio
                    ref={audioRef}
                    src={episode.url}
                    autoPlay
                    loop={isLooping}
                    onPlay={() => setPlayState(true)}
                    onPause={() => setPlayState(false)}
                    onLoadedMetadata={setUpProgressListener}
                    onEnded={nextEpisode}
                    />
                    )}

                <Buttons>
                    <button 
                    disabled={!episode || episodeList.length < 2}
                    className={isShuffling ? 'isActive': ''}
                    onClick={toggleShuffle}
                    >
                        {/* <img src="/shuffle.svg" alt="Shuffle"/> */}
                        <IoShuffle />
                    </button>
                    <button 
                    disabled={!episode || currentEpisodeIndex === 0} 
                    onClick={previousEpisode}>
                        {/* <img src="/play-previous.svg" alt="Previous"/> */}
                        <IoPlaySkipBackSharp />
                    </button>
                    <button 
                    className="play" 
                    disabled={!episode}
                    onClick={togglePlay}
                    >
                        { isPlaying && episode ? 
                        // <img src="/pause.svg" alt="Pause"/>
                        <IoPauseSharp /> :
                        // <img src="/play.svg" alt="Play"/>    
                        <IoPlaySharp />
                    }
                    </button>
                    <button 
                    disabled={!episode 
                        || currentEpisodeIndex === (episodeList.length - 1) 
                         }
                    onClick={nextEpisode}
                    >
                        {/* <img src="/play-next.svg" alt="Next"/> */}
                        <IoPlaySkipForwardSharp />
                    </button>
                    <button 
                    disabled={!episode} 
                    onClick={toggleLoop} 
                    className={isLooping ? 'isActive': ''}>
                        {/* <img src="/repeat.svg" alt="Repeat"/> */}
                        <IoRepeat />
                    </button>
                </Buttons>
            </footer>
        </Container>
    )
}