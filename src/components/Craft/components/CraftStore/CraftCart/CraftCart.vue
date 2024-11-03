<style lang="scss" src="./style.scss" scoped></style>
<script lang="ts" src="./data"></script>

<template>
  <div class="CraftCart">
    <div class="headerCart">
      <span>Корзина</span>
      <div class="totalAmount">
        <div class="totalWeight">
          <img :src="svg['iconWeight']">
          <span>{{ totalWeight }}</span>
        </div>
        <div class="totalMaterials">
          <img :src="svg['iconMaterials']">
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
          <img :src="svg['iconWeight']">
          <span>{{ cartItem.weight }}</span>
        </div>
        <div class="materialsQuantity">
          <img :src="svg['iconMaterials']">
          <span>{{ cartItem.materials }}</span>
        </div>
      </div>
      <div class="rightBottomcellCart">
        <div class="leftArrowButton" @click="decreaseQuantity(cartItem)" @mouseenter="handleMouseEnterLeftArrow" @mouseleave="handleMouseLeaveArrow">
          <img :src="isLeftArrow ? svg['iconLeftArrowActive'] : svg['iconLeftArrow'] ">
        </div>
        <div class="inputQuantity">
          <input v-model.number="cartItem.quantity" @input="handleInputQuantityChange(cartItem)" @keydown="preventNonInteger" type="number" style="width: 100%">
        </div>
        <div class="rightArrowButton" @click="increaseQuantity(cartItem)" @mouseenter="handleMouseEnterRightArrow" @mouseleave="handleMouseLeaveArrow">
          <img :src="isRightArrow ? svg['iconRightArrowActive'] : svg['iconRightArrow'] ">
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