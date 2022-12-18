import { NAMES } from "../../data/names";

export default function handler(req, res) {
  res.status(200).json(NAMES)
}