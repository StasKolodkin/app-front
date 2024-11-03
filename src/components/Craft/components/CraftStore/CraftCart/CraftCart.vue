<style lang="scss" src="./style.scss" scoped></style>
<script lang="ts" src="./data"></script>

<template>
  <div class="CraftCart">
    <div class="headerCart">
      <span>Корзина</span>
      
    </div>
    <div class="listCart">
      <div class="cellCart" v-for="cartItem in cartItems" :key="cartItem.uid">
    <div class="topcellCart">
      <div class="leftTopCellCart">
        <!-- <img :src="images['AssaultRifle']"> -->
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
        <div class="leftArrowButton">
          <img :src="svg['iconLeftArrow']">
        </div>
        <div class="inputQuantity">
          <input v-model="cartItem.quantity" type="text" style="width: 100%">
        </div>
        <div class="rightArrowButton">
          <img :src="svg['iconRightArrow']">
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="buttonCart">
    </div>
  </div>
</template>