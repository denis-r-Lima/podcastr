import type { NextApiRequest, NextApiResponse } from 'next'

import Episodes from "../../services/database/Schema/episodeSchema"

export default async function getEpisodes (_request: NextApiRequest, response: NextApiResponse) {

    try{
        const episodes = await Episodes.find({}, null, {sort:{published_at: -1}})
        return response.status(200).json(episodes)
    }catch(err){
        return response.status(400).json(err)
    }
}