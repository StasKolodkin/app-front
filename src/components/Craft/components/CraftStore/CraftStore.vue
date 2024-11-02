<style lang="scss" src="./style.scss" scoped></style>
<script lang="ts" src="./data"></script>

<template>
  <div class="CraftStore">
    <div class="rosterStore">
      <div class="listCategory">
        <div class="cellCategory" v-for="(category, index) in categories" :key="index">
          <img :src="category.icon">
          <span>{{ category.name }}</span>
        </div>
      </div>
      <div class="search">
        <div class="iconSearch">
          <img :src="svg['iconSearch']">
        </div>
        <div class="strokeSearch">
          <input v-model="searchQuery" type="text" placeholder="Поиск" style="width: 100%">
        </div>
      </div>
      <div class="listItems">
        <div class="cellItem" v-for="item in CraftStore" :key="item.id">
          <div class="topCellItem">
            <div class="leftTopCellItem">
              <span id="category">{{ getCategoryName(item.category) }}</span>
              <span id="name">{{ item.name }}</span>
            </div>
            <div class="rightTopCellItem">
              <span id="type">Тип патрон</span>
              <span id="quantity">{{ item.subValue }}</span>
            </div>
          </div>
          <div class="bottomCellItem">
            <div class="leftBottomCellItem"></div>
            <div class="rightBottomCellItem">
              <div class="iconCartBlock">
                <img :src="svg['iconCart']">
              </div>
              <span>В корзину</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cartStore">
      <CartStore/>
    </div>
  </div>
</template>