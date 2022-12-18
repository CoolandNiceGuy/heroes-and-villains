import {ITEMS} from '../../data/tracks'
const url = require('url');

 export default function handler(req, res) {
  const queryObject = url.parse(req.url, true).query;
  const tracks = queryObject.tracks.split(',')

  let output = []
  for(let i = 0; i < tracks.length; i++){
    output.push(ITEMS[tracks[i]])
  }

  res.status(200).json(output)
 };