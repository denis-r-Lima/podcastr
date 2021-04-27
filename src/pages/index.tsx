import { GetStaticProps } from "next"
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import { format , parseISO} from 'date-fns'
import { MdPlaylistAdd } from 'react-icons/md'

import { api } from "../services/api"
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString"
import { Container , AllEpisodes, LatestEpisodes, Details, Buttons} from "../styles/index/styles"
import { usePlayerContext } from "../contexts/PlayerContext"

type Episode = {
  id: string,
  title: string,
  members: string,
  publishedAt: string,
  thumbnail: string,
  duration: number,
  durationAsString: string
  url: string,
}

type HomeProps = {
  latestEpisodes: Episode[],
  allEpisodes: Episode[]

}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {

  const { play, addToList } = usePlayerContext()

  return (
    <Container>
      <Head>
        <title>Podcatr | The best for you, always!</title>
      </Head>
      <LatestEpisodes>
        <h2>Last Episodes</h2>
        <ul>
          {latestEpisodes.map(episode => {
            return(
              <li key={episode.id}>
                <Image 
                src={episode.thumbnail} 
                alt={episode.title} 
                width={192} 
                height={192}
                objectFit="cover"
                 />
                <Details>
                  <Link href={`/episode/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                  <p>{episode.members}</p>
                  <span>{episode.publishedAt}</span>
                  <span> {episode.durationAsString} </span>
                </Details>
                <Buttons>
                  <button onClick={() => play(episode)}>
                    <img src="/play-green.svg" alt="Play episode" style={{width: '1.5rem'}}  />
                  </button>
                  <button onClick={() => addToList(episode)}>
                    <MdPlaylistAdd />
                  </button>
                  </Buttons>
              </li>
            )
          })}
        </ul>
      </LatestEpisodes>
      <AllEpisodes>
        <h2>All Episodes</h2>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Podcast</th>
              <th>Members</th>
              <th>Date</th>
              <th>Duration</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              allEpisodes.map(episode => {
                return(
                  <tr key={episode.id}>
                    <td style={{width: 72}}>
                      <Image 
                      src={episode.thumbnail} 
                      alt={episode.title} 
                      width={120} 
                      height={120}
                      objectFit="cover"
                      />
                    </td>
                    <td>
                      <Link href={`/episode/${episode.id}`}>
                        <a>{episode.title}</a>
                      </Link>
                    </td>
                    <td>{episode.members}</td>
                    <td style={{width: 120}}>{episode.publishedAt}</td>
                    <td>{episode.durationAsString}</td>
                    <td>
                      <button onClick={() => play(episode)}>
                        <img src="/play-green.svg" alt="Play episode"/>
                      </button>
                      <button onClick={() => addToList(episode)}>
                        <MdPlaylistAdd color="#808080" size="1.5rem"/>
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </AllEpisodes>
    </Container>
  )
}





export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/api/getEpisodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  })

  const episodes: Episode[] = data.map((d) => {
    return {
      id: d.id,
      title: d.title,
      members: d.members,
      publishedAt: format(parseISO(d.published_at), 'MMM do yy'),
      thumbnail: d.thumbnail,
      duration: Number(d.file.duration),
      durationAsString: convertDurationToTimeString(Number(d.file.duration)),
      url: d.file.url
      } 
    }
  )

  const latestEpisodes = episodes.slice(0,2)
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 12
  }
}