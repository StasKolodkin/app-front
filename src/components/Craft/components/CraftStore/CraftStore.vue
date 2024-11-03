<style lang="scss" src="./style.scss" scoped></style>
<script lang="ts" src="./data"></script>

<template>
  <div class="CraftStore">
    <div class="rosterStore">
      <div class="listCategory">
        <div class="cellCategory" v-for="(category, index) in categories" :key="index"
          :class="{ selected: selectedCategory === index }" @click="handleCategoryClick(index)"
        >
          <img :src="category.icon">
          <span>{{ category.name }}</span>
        </div>
      </div>
      <div class="search">
        <div class="iconSearch">
          <img :src="svg['iconSearch']">
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
            <div class="rightTopCellItem">
              <span id="type">Тип патронов</span>
              <span id="quantity">{{ item.subValue }}</span>
            </div>
          </div>
          <div class="midCellItem">
            <img :src="item.image">
          </div>
          <div class="bottomCellItem">
            <div class="leftBottomCellItem">
              <div class="weightQuantity">
                <img :src="svg['iconWeight']">
                <span>{{ item.weightAmount }}</span>
              </div>
              <div class="materialsQuantity">
                <img :src="svg['iconMaterials']">
                <span>{{ item.materialsAmount }}</span>
              </div>
            </div>
            <div class="rightBottomCellItem" :class="{ inCart: isInCart(item.uid) }" @click="handleCartClick(item)">
              <div class="iconCartBlock">
                <img :src="svg['iconCart']">
              </div>
              <span>{{ isInCart(item.uid) ? 'В корзине' : 'В корзину' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cartStore">
      <CraftCart :cart-items="CartArray" />
    </div>
  </div>
</template>