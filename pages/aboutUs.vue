<script setup>
const router = useRouter()

watchEffect(() => {
  const scrollToBottom = router.currentRoute.value.query.scrollToBottom

  if (scrollToBottom === 'true' && process.client) {
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }, 0)
  }
})
</script>

<template>
  <div class="mt-[86px]">
    <!-- 关于我们 banner -->
    <div class="about-us-banner bg-cover bg-center h-[652px]">
      <div class="wjaq-container mx-auto h-[100%] flex items-center">
        <div>
          <div class="text-[45px] mb-[35px]">让世界<span class="font-bold-600">更安全</span>，让安全<span
              class="font-bold-600">更简单</span>
          </div>
          <div class="text-[18px] leading-[35px] w-[588px]">
            四维创智（北京）科技发展有限公司，公司品牌名称万径安全，成立于2013年，公司以“让世界更安全，让安全更简单”为使命，致力于为用户提供全面、高效、安全的网络安全解决方案。公司以“AI+YAK”为企业核心战略，专注于网络安全基础设施和智能化技术研究，打造了国内外首创的全国产化网络安全开发环境YAK和网络安全高级AI智能体万径千机两大核心，并基于YAK
            构建自主可控的网络安全生态体系，推动安全产业融合发展，自研产品已广泛应用于能源、金融、运营商等多个行业。
          </div>
        </div>
      </div>
    </div>

    <!-- 发展历程 -->
    <div class="mx-auto mt-[150px] mb-[285px]">
      <div class="relative py-[15px] px-[40px] mb-[250px] mx-auto w-[250px]">
        <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"
          fill="none">
          <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
        </svg>
        <div class="text-[40px] text-center font-bold-600">
          发展历程
        </div>
        <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 21" fill="none">
          <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
        </svg>
      </div>
      <div class="about-us-history bg-center bg-contain bg-no-repeat h-[1453px] text-[16px]"></div>
    </div>

    <!-- 二维码-->
    <div class="relative h-[409px] bg-[#E4F3FF]">
      <div class="bottom-left-bg absolute left-[0] top-[0]">
        <NuxtImg src="/Images/light-bg-left.png" class="h-[409px]" />
      </div>
      <div class="bottom-right-bg absolute right-[0] top-[0]">
        <NuxtImg src="/Images/light-bg-right.png" class="h-[409px]" />
      </div>
      <div class="relative wjaq-container mx-auto h-[100%]">
        <div class="absolute left-[50%] top-[-110px] translate-x-[-50%] flex">
          <div class="flex flex-col items-center mr-[50px]">
            <NuxtImg src="/Images/wanjing-code.png" class="w-[170px]" />
            <div class="text-[18px] mr-[10px] mt-[-10px]">万径安全公众号</div>
          </div>
          <div class="flex flex-col items-center ml-[50px]">
            <NuxtImg src="/Images/yakit-code.png" class="w-[170px]" />
            <div class="text-[18px] mr-[20px] mt-[-10px]">Yak Project公众号</div>
          </div>
        </div>
        <div class="absolute top-[150px] left-[50%] translate-x-[-50%] flex justify-around w-[100%]">
          <div class="text-[22px]">
            <div
              class="flex items-center rounded-[60px] bg-[#0070FF] color-[#fff] py-[16px] px-[47px] text-[18px] mt-[45px]">
              <svg class="w-[36px] h-[26px]" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.5 6.7128L15.8794 14.6114C17.0555 15.3058 18.5161 15.3058 19.6922 14.6114L33.0716 6.7128V2.5H2.5V6.7128ZM0 2C0 0.895431 0.895431 0 2 0H33.5716C34.6762 0 35.5716 0.895431 35.5716 2V23.8069C35.5716 24.9114 34.6762 25.8069 33.5716 25.8069H2C0.895427 25.8069 0 24.9114 0 23.8069V2ZM33.0716 9.61595L20.9632 16.7643C19.003 17.9215 16.5686 17.9215 14.6084 16.7643L2.5 9.61595V23.3069H33.0716V9.61595Z"
                  fill="white" />
              </svg>
              <span class="ml-[15px]">market@4dogs.cn</span>
            </div>
          </div>
          <div class="text-[22px]">
            <div
              class="flex items-center rounded-[60px] bg-[#0070FF] color-[#fff] py-[16px] px-[47px] text-[18px] mt-[45px]">
              <svg class="w-[24px] h-[30px]" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.7933 20.6776C13.6847 21.3691 14.906 21.4524 15.883 20.8883C16.8569 20.326 18.1022 20.6597 18.6645 21.6336L20.4826 24.7826C20.7556 25.2555 20.5936 25.8602 20.1207 26.1332C17.3846 27.7129 13.9258 27.2373 11.7176 24.9776C7.82654 20.9959 4.99964 16.0995 3.49686 10.7389C2.64401 7.69671 3.96151 4.46347 6.69762 2.88378C7.17051 2.61075 7.77519 2.77278 8.04822 3.24567L9.8663 6.39468C10.4286 7.36858 10.0949 8.61391 9.121 9.17619C8.14398 9.74027 7.60551 10.8396 7.75866 11.9573C8.23176 15.4107 10.0392 18.5412 12.7933 20.6776ZM14.3256 18.7022C14.4144 18.7711 14.5359 18.7793 14.633 18.7233C16.8026 17.4706 19.5769 18.214 20.8296 20.3836L22.6477 23.5326C23.611 25.2013 23.0393 27.3349 21.3707 28.2983C17.6454 30.4491 12.9361 29.8015 9.92953 26.7249C5.74545 22.4432 2.70563 17.1781 1.08967 11.4138C-0.0715173 7.27172 1.7223 2.86953 5.44762 0.718713C7.11624 -0.244667 9.2499 0.327046 10.2133 1.99567L12.0314 5.14468C13.284 7.31431 12.5406 10.0886 10.371 11.3412C10.2739 11.3973 10.2203 11.5067 10.2355 11.6179C10.6199 14.4234 12.0882 16.9667 14.3256 18.7022Z"
                  fill="white" />
              </svg>
              <span class="ml-[15px]">010-6296 0053（北京）</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MegavectorOnlineConsultation></MegavectorOnlineConsultation>
</template>

<style lang="scss" scoped>
.about-us-banner {
  background-image: url('/Images/aboutUs.jpg');
}

.about-us-history {
  background-image: url("/Images/fzlc.png");
}
</style>
