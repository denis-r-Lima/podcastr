import type { NextApiRequest, NextApiResponse } from 'next'
import Episodes from "../../services/database/episodeSchema"

export default async function getEpisode (_request: NextApiRequest, response: NextApiResponse) {

    const episodes = await Episodes.find({})
    
    response.status(200).json(episodes)

}