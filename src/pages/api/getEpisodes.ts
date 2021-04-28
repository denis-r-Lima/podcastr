import type { NextApiRequest, NextApiResponse } from 'next'

import Episodes from "../../services/database/episodeSchema"

export default async function getEpisodes (request: NextApiRequest, response: NextApiResponse) {

    try{
        const episodes = await Episodes.find({}, null, {sort:{published_at: -1}})
        response.status(200).json(episodes)
    }catch(err){
        response.status(400).json(err)
    }
}