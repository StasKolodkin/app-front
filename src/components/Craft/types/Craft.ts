import { CategoryList } from "./Category"

export type Craft = {
  craftData: CraftData
  craftStore: CraftStore[]
  craftHistory: CraftHistory[]
}

export type CraftData = {
  department: string
  materials: number
  weight: number
}

export type CraftStore = {
  id: number
  name: string
  category: CategoryList
  subValue: number
}

export type CraftHistory = {
  name: string
  date: string
  quantity: number
}
