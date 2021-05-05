import type { NextApiRequest, NextApiResponse } from 'next'

import Episodes from "../../services/database/Schema/episodeSchema"

export default async function getEpisodeById (request: NextApiRequest, response: NextApiResponse) {

    const [ , option ] = request.url.split('?') 
    const [ , slug ] = option.split('=')


    try{
        const episodes = await Episodes.findOne({slug})
        return response.status(200).json(episodes)
    }catch(err){
        return response.status(400).json(err)
    }


}