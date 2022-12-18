import { ARTISTS } from "../../data/artists"

export default function handler(req, res) {
  res.status(200).json(ARTISTS)
}