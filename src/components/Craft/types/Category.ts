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

import equipmentIcon from "../assets/svg/equipment.svg";
import equipmentIconActive from "../assets/svg/equipmentActive.svg";
import glockIcon from "../assets/svg/glock.svg";
import glockIconActive from "../assets/svg/glockActive.svg";
import rifleIcon from "../assets/svg/rifle.svg";
import rifleIconActive from "../assets/svg/rifleActive.svg";
import shotgunIcon from "../assets/svg/shotgun.svg";
import shotgunIconActive from "../assets/svg/shotgunActive.svg";
import ammoIcon from "../assets/svg/ammo.svg";
import ammoIconActive from "../assets/svg/ammoActive.svg";
import edgedWeaponIcon from "../assets/svg/edgedWeapon.svg";
import edgedWeaponIconActive from "../assets/svg/edgedWeaponActive.svg";

export const CategoryProperty: Record<CategoryList, Property> = {
  [CategoryList.equipment]: {
    name: "Снаряжение",
    icon: equipmentIcon,
    iconActive: equipmentIconActive,
  },
  [CategoryList.glock]: {
    name: "Пистолеты",
    icon: glockIcon,
    iconActive: glockIconActive,
  },
  [CategoryList.rifle]: {
    name: "Автоматы",
    icon: rifleIcon,
    iconActive: rifleIconActive,
  },
  [CategoryList.shotgun]: {
    name: "Дробовики",
    icon: shotgunIcon,
    iconActive: shotgunIconActive,
  },
  [CategoryList.ammo]: {
    name: "Патроны",
    icon: ammoIcon,
    iconActive: ammoIconActive,
  },
  [CategoryList.edgedWeapon]: {
    name: "Холодное оружие",
    icon: edgedWeaponIcon,
    iconActive: edgedWeaponIconActive,
  },
};
