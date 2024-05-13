/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agents = "agents",
	Artiste = "artiste",
	Evenement = "evenement",
	Maison = "maison",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgentsRecord = {
	email?: string
	nom?: string
	prenom?: string
	telephone?: number
}

export type ArtisteRecord = {
	Bibliographie?: string
	Description?: string
	Nom?: string
	Numero?: number
	Prenom?: string
}

export enum EvenementCategorieOptions {
	"Danse" = "Danse",
	"Musique" = "Musique",
	"Théâtre" = "Théâtre",
}
export type EvenementRecord = {
	Categorie?: EvenementCategorieOptions[]
	Date?: IsoDateString
	Description?: string
	Extrait?: string
	Heure?: IsoDateString
	Nom_evenement?: string
}

export type MaisonRecord = {
	Adresse?: string
	Favori?: boolean
	Image?: string
	Nom?: string
	Nombre_chambre?: number
	Nombre_salle_de_bain?: number
	Prix?: number
	Surface_m2?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AgentsResponse<Texpand = unknown> = Required<AgentsRecord> & BaseSystemFields<Texpand>
export type ArtisteResponse<Texpand = unknown> = Required<ArtisteRecord> & BaseSystemFields<Texpand>
export type EvenementResponse<Texpand = unknown> = Required<EvenementRecord> & BaseSystemFields<Texpand>
export type MaisonResponse<Texpand = unknown> = Required<MaisonRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	agents: AgentsRecord
	artiste: ArtisteRecord
	evenement: EvenementRecord
	maison: MaisonRecord
	users: UsersRecord
}

export type CollectionResponses = {
	agents: AgentsResponse
	artiste: ArtisteResponse
	evenement: EvenementResponse
	maison: MaisonResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'agents'): RecordService<AgentsResponse>
	collection(idOrName: 'artiste'): RecordService<ArtisteResponse>
	collection(idOrName: 'evenement'): RecordService<EvenementResponse>
	collection(idOrName: 'maison'): RecordService<MaisonResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
