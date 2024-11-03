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
    icon: "equipment",
  },
  [CategoryList.glock]: {
    name: "Пистолеты",
    icon: "glock",
  },
  [CategoryList.rifle]: {
    name: "Автоматы",
    icon: "rifle",
  },
  [CategoryList.shotgun]: {
    name: "Дробовики",
    icon: "shotgun",
  },
  [CategoryList.ammo]: {
    name: "Патроны",
    icon: "ammo",
  },
  [CategoryList.edgedWeapon]: {
    name: "Холодное оружие",
    icon: "edgedWeapon",
  },
};
