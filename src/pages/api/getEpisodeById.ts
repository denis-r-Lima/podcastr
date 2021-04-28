import type { NextApiRequest, NextApiResponse } from 'next'

import Episodes from "../../services/database/episodeSchema"

export default async function getEpisodeById (request: NextApiRequest, response: NextApiResponse) {

    const [ , option ] = request.url.split('?') 
    const [ , slug ] = option.split('=')


    try{
        const episodes = await Episodes.findOne({slug})
        response.status(200).json(episodes)
    }catch(err){
        response.status(400).json(err)
    }


}