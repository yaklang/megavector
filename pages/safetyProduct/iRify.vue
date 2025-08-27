<script setup>
</script>

<template>
  <div class="iRify">
    <!-- IRify banner -->
    <div class="iRify-bannber-wrap relative h-[100%] bg-[#1D83FF]">
      <div class="bottom-left-bg absolute left-[0] top-[0] bottom-[0]">
        <NuxtImg src="/Images/light-bgL-left.png" class="h-[100%]" />
      </div>
      <div class="bottom-right-bg absolute right-[0] top-[0] bottom-[0]">
        <NuxtImg src="/Images/light-bgL-right.png" class="h-[100%]" />
      </div>
      <div class="xiaozhi-banner-cont relative wjaq-container mx-auto h-[100%] flex justify-center items-center">
        <div class="text-center">
          <div class="text-[52px] color-[#fff]"><span class="font-bold-600">IRify</span>基于代码建模的大型项目代码审计平台</div>
          <div class="text-[18px] mt-[12px] mb-[45px] color-[#fff]">
            一款领先于传统SAST产品的创新型安全分析平台，深度解析复杂代码结构，涵盖多语言场景并提供精细的数据流和控制流分析能力。</div>
          <a href="https://yaklang.oss-cn-beijing.aliyuncs.com/IRify-product-white-paper.pdf" download target="_block" class="mr-[20px]">
            <span
              class="inline-block rounded-[43px] bg-[#000] color-[#fff] py-[10px] px-[30px] h-[48px] text-[18px] leading-[26px] text-center mt-[55px]">
              <svg class="w-[18px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" fill="none">
                <path d="M1 9.5V12.5C1 13.6046 1.89543 14.5 3 14.5H15C16.1046 14.5 17 13.6046 17 12.5V9.5"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" />
                <path d="M5 5.80159L9 8.92857M9 8.92857L13 5.80159M9 8.92857V1" stroke="white" stroke-width="1.5"
                  stroke-linecap="round" />
              </svg>
              下载白皮书
            </span>
          </a>
          <a href="https://yaklang.com/irify" target="_block">
            <span
              class="inline-block rounded-[43px] bg-[#000] color-[#fff] py-[10px] px-[40px] h-[48px] text-[18px] leading-[26px] text-center mt-[55px]">
              <svg class="w-[18px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" fill="none">
                <path d="M1 9.5V12.5C1 13.6046 1.89543 14.5 3 14.5H15C16.1046 14.5 17 13.6046 17 12.5V9.5"
                  stroke="white" stroke-width="1.5" stroke-linecap="round" />
                <path d="M5 5.80159L9 8.92857M9 8.92857L13 5.80159M9 8.92857V1" stroke="white" stroke-width="1.5"
                  stroke-linecap="round" />
              </svg>
              下载IRify
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="wjaq-container mx-auto">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.iRify {
  height: calc(100% - 105px);
}

.iRify-banner-cont {
  z-index: 999;
}
</style>
