<style lang="scss" src="./style.scss" scoped></style>
<script lang="ts" src="./data"></script>

<template>
  <div class="CraftCart">
    <div class="headerCart">
      <span>Корзина</span>
      <div class="totalAmount">
        <div class="totalWeight">
          <img src="../../../assets/svg/iconWeight.svg">
          <span>{{ totalWeight }}</span>
        </div>
        <div class="totalMaterials">
          <img src="../../../assets/svg/iconMaterials.svg">
          <span>{{ totalMaterials }}</span>
        </div>
      </div>
    </div>
    <div class="listCart">
      <div class="cellCart" v-for="cartItem in cartItems" :key="cartItem.uid">
    <div class="topcellCart">
      <div class="leftTopCellCart">
        <img :src="getCraftItemById(cartItem.uid)?.image">
      </div>
      <div class="rightTopCellCart">
        <span id="category">{{ getCategoryName(getCraftItemById(cartItem.uid)?.category) }}</span>
        <span id="name">{{ getCraftItemById(cartItem.uid)?.name }}</span>
      </div>
    </div>
    <div class="bottomcellCart">
      <div class="leftBottomcellCart">
        <div class="weightQuantity">
          <img src="../../../assets/svg/iconWeight.svg">
          <span>{{ cartItem.weight }}</span>
        </div>
        <div class="materialsQuantity">
          <img src="../../../assets/svg/iconMaterials.svg">
          <span>{{ cartItem.materials }}</span>
        </div>
      </div>
      <div class="rightBottomcellCart">
        <div class="leftArrowButton" @click="decreaseQuantity(cartItem)" @mouseenter="handleMouseEnterLeftArrow" @mouseleave="handleMouseLeaveArrow">
          <img src="../../../assets/svg/iconLeftArrowActive.svg" v-if="isLeftArrow">
          <img src="../../../assets/svg/iconLeftArrow.svg" v-else>
        </div>
        <div class="inputQuantity">
          <input v-model.number="cartItem.quantity" @input="handleInputQuantityChange(cartItem)" @keydown="preventNonInteger" type="number" style="width: 100%">
        </div>
        <div class="rightArrowButton" @click="increaseQuantity(cartItem)" @mouseenter="handleMouseEnterRightArrow" @mouseleave="handleMouseLeaveArrow">
          <img src="../../../assets/svg/iconRightArrowActive.svg" v-if="isRightArrow">
          <img src="../../../assets/svg/iconRightArrow.svg" v-else>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="buttonCart" @click="tryCrafting" :class="{ failure: isFailure }">
      <span v-if="!isFailure">Создать</span>
      <span v-if="isFailure">Недостаточно средств</span>
    </div>
  </div>
</template>