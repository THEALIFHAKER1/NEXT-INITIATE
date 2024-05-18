import "server-only"

import { db } from "./db"

export async function getMyTexts() {
  const texts = await db.query.text.findMany()
  return texts
}
