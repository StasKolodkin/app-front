<style lang="scss" src="./style.scss" scoped></style>
<script lang="ts" src="./data"></script>

<template>
  <div class="CraftStore">
    <div class="rosterStore">
      <div class="listCategory">
        <div class="cellCategory" v-for="(category, index) in categories" :key="index"
          :class="{ selected: selectedCategory === index }" @click="handleCategoryClick(index)"
          @mouseenter="handleMouseEnter(index)" @mouseleave="handleMouseLeave"
        >
          <img :src="getIconActivePath(category.icon)" v-if="selectedCategory === index || hoveredCategory === index">
          <img :src="getIconPath(category.icon)" v-else>
          <span>{{ category.name }}</span>
        </div>
      </div>
      <div class="search">
        <div class="iconSearch">
          <img src="../../assets/svg/iconSearch.svg">
        </div>
        <div class="strokeSearch">
          <input v-model="searchStore" type="text" placeholder="Поиск" style="width: 100%">
        </div>
      </div>
      <div class="listItems">
        <div class="cellItem" v-for="item in filteredCraftStore" :key="item.uid">
          <div class="topCellItem">
            <div class="leftTopCellItem">
              <span id="category">{{ getCategoryName(item.category) }}</span>
              <span id="name">{{ item.name }}</span>
            </div>
            <div class="rightTopCellItem" v-if="item.subValue">
              <span id="type" v-if="item.category == 4">Кол-во патронов</span>
              <span id="type" v-else>Тип патронов</span>
              <span id="quantity">{{ item.subValue }}</span>
            </div>
          </div>
          <div class="midCellItem">
            <img :src="item.image">
          </div>
          <div class="bottomCellItem">
            <div class="leftBottomCellItem">
              <div class="weightQuantity">
                <img src="../../assets/svg/iconWeight.svg">
                <span>{{ item.weightAmount }}</span>
              </div>
              <div class="materialsQuantity">
                <img src="../../assets/svg/iconMaterials.svg">
                <span>{{ item.materialsAmount }}</span>
              </div>
            </div>
            <div class="rightBottomCellItem" :class="{ inCart: isInCart(item.uid) }" @click="handleCartClick(item)"
              @mouseenter="handleMouseEnterItem(item.uid)" @mouseleave="handleMouseLeaveItem"
            >
              <div class="iconCartBlock">
                <img src="../../assets/svg/iconCart.svg" v-if="isInCart(item.uid) || hoveredItem === item.uid">
                <img src="../../assets/svg/iconCartActive.svg" v-else>
              </div>
              <div class="textCartBlock">
                <span>{{ isInCart(item.uid) ? 'В корзине' : 'В корзину' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cartStore">
      <CraftCart :cartItems="CartArray" @removeItem="removeCartItem" @emptyCart="emptyCart"/>
    </div>
  </div>
</template>