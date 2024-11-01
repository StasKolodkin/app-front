<style lang="scss" src="./style.scss" scoped></style>
<script lang="ts" src="./data"></script>

<template>
  <div class="Craft">
    <div class="mainWindow">
      <div class="header">
        <div class="leftPart">
          <div class="headlineBlock">
            <img :src="images['logoLSPD']">
            <div class="titles">
              <div class="mainTitle">
                <span>Крафт предметов</span>
              </div>
              <div class="subTitle">
                <span>Los Santos Police Department</span>
              </div>
            </div>
          </div>
          <div class="switchButtonsBlock">
            <div class="switchButton" :class="{ active: isCrashStoreVisible }" @click="toggleView(true)">
              <div class="iconSwitchButton">
                <img :src="svg['iconCraftStore']">
              </div>
              <div class="textSwitchButton">
                <span>Крафт</span>
              </div>
            </div>
            <div class="switchButton" :class="{ active: !isCrashStoreVisible }" @click="toggleView(false)">
              <div class="iconSwitchButton">
                <img :src="svg['iconCraftHistory']">
              </div>
              <div class="textSwitchButton">
                <span>История</span>
              </div>
            </div>
          </div>
          <div class="balanceBlock">
            <div class="weightBalance">
              <img :src="svg['iconWeight']">
              <span>2.00</span>
            </div>
            <div class="materialsBalance">
              <img :src="svg['iconMaterials']">
              <span>300</span>
            </div>
          </div>
        </div>
        <div class="rightPart">
          <img :src="svg['iconExit']">
          <span>Выход</span>
        </div>
      </div>
      <div class="body">
        <CraftStore v-if="isCrashStoreVisible"/>
        <CraftHistory v-if="!isCrashStoreVisible"/>
      </div>
    </div>
  </div>
</template>