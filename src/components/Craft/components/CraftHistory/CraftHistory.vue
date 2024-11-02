<style lang="scss" src="./style.scss" scoped></style>
<script lang="ts" src="./data"></script>

<template>
  <div class="CraftHistory">
    <div class="searchHistory">
      <div class="iconSearch">
          <img :src="svg['iconSearch']">
        </div>
        <div class="strokeSearch">
          <input v-model="searchHistory" type="text" placeholder="Поиск" style="width: 100%">
        </div>
    </div>
    <div class="rosterHistory">
      <div class="titleHistory">
        <div class="titleCell"><span>Имя сотрудника</span></div>
        <div class="titleCell"><span>Дата действия</span></div>
        <div class="titleCell"><span>Количество материалов</span></div>
        <div class="titleCell"><span>Было скрафчено</span></div>
      </div>
      <div class="listHistory">
        <div class="cellHistory" v-for="(item, index) in filteredCraftHistory" :key="index" :style="{ background: index % 2 === 0 ? 'rgba(29, 29, 38, 0.5)' : 'transparent' }">
          <div class="cellPlayer">
            <div class="cellImage">
              <img :src="images['prof']">
            </div>
            <div class="cellName"><span>{{ item.name }}</span></div>
          </div>
          <div class="cellDate"><span>{{ item.date }}</span></div>
          <div class="cellQuantity"><span>-{{ item.quantity }} мат.</span></div>
          <div class="cellItems"><span>{{ item.listItem.join(', ') }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>