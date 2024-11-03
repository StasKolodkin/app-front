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
  iconActive: string
}

export const CategoryProperty: Record<CategoryList, Property> = {
  [CategoryList.equipment]: {
    name: "Снаряжение",
    icon: require("../assets/svg/equipment.svg"),
    iconActive: require("../assets/svg/equipmentActive.svg")
  },
  [CategoryList.glock]: {
    name: "Пистолеты",
    icon: require("../assets/svg/glock.svg"),
    iconActive: require("../assets/svg/glockActive.svg")
  },
  [CategoryList.rifle]: {
    name: "Автоматы",
    icon: require("../assets/svg/rifle.svg"),
    iconActive: require("../assets/svg/rifleActive.svg")
  },
  [CategoryList.shotgun]: {
    name: "Дробовики",
    icon: require("../assets/svg/shotgun.svg"),
    iconActive: require("../assets/svg/shotgunActive.svg")
  },
  [CategoryList.ammo]: {
    name: "Патроны",
    icon: require("../assets/svg/ammo.svg"),
    iconActive: require("../assets/svg/ammoActive.svg")
  },
  [CategoryList.edgedWeapon]: {
    name: "Холодное оружие",
    icon: require("../assets/svg/edgedWeapon.svg"),
    iconActive: require("../assets/svg/edgedWeaponActive.svg")
  },
}