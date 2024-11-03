import { CategoryList } from "./Category"

export type Craft = {
  craftData: CraftData
  craftStore: CraftStore[]
  craftHistory: CraftHistory[]
}

export type CraftData = {
  departmentLogo: string
  department: string
  materials: number
  weight: number
}

export type CraftStore = {
  uid: number
  id: number
  name: string
  category: CategoryList
  image: string
  subValue?: number
  weightAmount: number
  materialsAmount: number
}

export type CraftHistory = {
  name: string
  image: string
  date: string
  quantity: number
  listItem: string[]
}

