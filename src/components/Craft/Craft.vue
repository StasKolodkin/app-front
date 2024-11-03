<style lang="scss" src="./style.scss" scoped></style>
<script lang="ts" src="./data"></script>

<template>
  <div class="Craft">
    <div class="mainWindow">
      <div class="header">
        <div class="leftPart">
          <div class="headlineBlock">
            <img :src="CraftData.departmentLogo">
            <div class="titles">
              <div class="mainTitle">
                <span>Крафт предметов</span>
              </div>
              <div class="subTitle">
                <span>{{ CraftData.department }}</span>
              </div>
            </div>
          </div>
          <div class="switchButtonsBlock">
            <div class="switchButton" :class="{ active: isCrashStoreVisible }" @click="toggleView(true)">
              <div class="iconSwitchButton">
                <img src="./assets/svg/iconCraftStore.svg">
              </div>
              <div class="textSwitchButton">
                <span>Крафт</span>
              </div>
            </div>
            <div class="switchButton" :class="{ active: !isCrashStoreVisible }" @click="toggleView(false)">
              <div class="iconSwitchButton">
                <img src="./assets/svg/iconCraftHistory.svg">
              </div>
              <div class="textSwitchButton">
                <span>История</span>
              </div>
            </div>
          </div>
          <div class="balanceBlock">
            <div class="weightBalance">
              <img src="./assets/svg/iconWeight.svg">
              <span>{{ CraftData.weight }}</span>
            </div>
            <div class="materialsBalance">
              <img src="./assets/svg/iconMaterials.svg">
              <span>{{ CraftData.materials }}</span>
            </div>
          </div>
        </div>
        <div class="rightPart" @click="exitCraft">
          <img src="./assets/svg/iconExit.svg">
          <span>Выход</span>
        </div>
      </div>
      <div class="body">
        <CraftStore v-show="isCrashStoreVisible"/>
        <CraftHistory v-show="!isCrashStoreVisible"/>
      </div>
    </div>
  </div>
</template>