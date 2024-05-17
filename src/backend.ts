import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

export async function allMaisons() {
  const records = await pb.collection('maison').getFullList()
  return records
}

export async function oneID(id) {
  const maison = await pb.collection('maison').getOne(id)
  return maison
}

export async function allMaisonsFavori() {
  const maisonFavori = await pb.collection('maison').getFullList({
    filter: 'Favori=true'
  })
  return maisonFavori
}

export async function allMaisonsSorted() {
  const sortedRecords = await pb.collection('maison').getFullList({
    sort: 'Prix'
  })
  return sortedRecords
}

export async function bySurface(s) {
  const maisonSurface = await pb.collection('maison').getFullList({
    filter: `Surface_m2>=${s}`
  })
  return maisonSurface
}

export async function surfaceORprice(surface, prix) {
  const SurfacePrice = await pb.collection('maison').getFullList({
    filter: `Surface_m2 > ${surface} || Prix < ${prix}`
  })
  return SurfacePrice
}

export async function oneID_agent(id) {
  const AgentID = await pb.collection('agent').getOne(id)
  return AgentID
}

// Copier ici les fonctions developpées en R214 | Système d'information
