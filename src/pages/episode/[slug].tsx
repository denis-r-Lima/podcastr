import { format, parseISO } from 'date-fns'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { IoPlaySharp, IoChevronBack } from 'react-icons/io5'

import api from '../../services/api'
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString'
import {
  Container,
  ThumbnailContainer,
  Description,
  OuterContainer
} from './styles'
import { usePlayerContext } from '../../contexts/PlayerContext'

type Episode = {
  id: string
  slug: string
  title: string
  members: string
  publishedAt: string
  thumbnail: string
  description: string
  duration: number
  durationAsString: string
  url: string
}

type EpisodeProps = {
  episode: Episode
}

export default function Episode({ episode }: EpisodeProps) {
  const { play } = usePlayerContext()

  return (
    <OuterContainer>
      <Container>
        <Head>
          <title>{episode.title}</title>
        </Head>
        <ThumbnailContainer>
          <Link href="/">
            <button>
              {/* <img src="/arrow-left.svg" alt="Back"/> */}
              <IoChevronBack />
            </button>
          </Link>
          <Image
            width={700}
            height={160}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <button
            onClick={() => {
              play(episode)
            }}
          >
            {/* <img src="/play.svg" alt="play podcast"/> */}
            <IoPlaySharp />
          </button>
        </ThumbnailContainer>
        <header>
          <h1>{episode.title}</h1>
          <span>{episode.members}</span>
          <span>{episode.publishedAt}</span>
          <span>{episode.durationAsString}</span>
        </header>
        <Description
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      </Container>
    </OuterContainer>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params

  const { data } = await api.get(`/getEpisodeById`, {
    params: {
      slug: slug
    }
  })

  const episode: Episode = {
    id: data['_id'],
    slug: data.slug,
    title: data.title,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'MMM do yy'),
    thumbnail: data.thumbnail,
    description: data.description,
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    url: data.file.url
  }

  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 48 //revalidate every 48h
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
