export enum CategoryList { 
  equipment,
  glock,
  rifle,
  shotgun,
  ammo,
  edgedWeapon
}

export type Property = {
  name: string
  icon: string
}

export const CategoryProperty: Record<CategoryList, Property> = {
  [CategoryList.equipment]: {
    name: "Снаряжение",
    icon: require("../assets/svg/equipment.svg")
  },
  [CategoryList.glock]: {
    name: "Пистолеты",
    icon: require("../assets/svg/glock.svg")
  },
  [CategoryList.rifle]: {
    name: "Автоматы",
    icon: require("../assets/svg/rifle.svg")
  },
  [CategoryList.shotgun]: {
    name: "Дробовики",
    icon: require("../assets/svg/shotgun.svg")
  },
  [CategoryList.ammo]: {
    name: "Патроны",
    icon: require("../assets/svg/bullets.svg")
  },
  [CategoryList.edgedWeapon]: {
    name: "Холодное оружие",
    icon: require("../assets/svg/edgedWeapon.svg")
  },
}