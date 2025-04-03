<template>
  <div class="default" :style="{ height: '100%' }">
    <MegavectorHeader></MegavectorHeader>
    <slot />
    <MegavectorFooter></MegavectorFooter>
    <MegavectorOnlineConsultation></MegavectorOnlineConsultation>
  </div>
</template>