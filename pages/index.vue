<script setup>
useSeoMeta({
  ogTitle: '万径安全',
  ogDescription: '公司以“AI+YAK”为企业核心战略，专注于网络安全基础设施和智能化技术研究，打造了首款网络安全语言YAK和网络安全高级AI智能体万径千机两大核心。',
})
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination])

// 底部轮播数据
const bannerBottomList = [
  { imgUrl: "/Images/gjdw.png" },
  { imgUrl: "/Images/zgnfdw.png" },
  { imgUrl: "/Images/zgsy.png" },
  { imgUrl: "/Images/zgsh.png" },

  { imgUrl: "/Images/gjgw.png" },
  { imgUrl: "/Images/zgdx.png" },
  { imgUrl: "/Images/zgyd.png" },
  { imgUrl: "/Images/zglt.png" },

  { imgUrl: "/Images/zgdz.png" },
  { imgUrl: "/Images/zgdk.png" },
  { imgUrl: "/Images/gadyyjs.png" },
  { imgUrl: "/Images/gass.png" },

  { imgUrl: "/Images/gjxxjsaqyjzx.png" },
  { imgUrl: "/Images/zgxxaqcpzx.png" },
  { imgUrl: "/Images/zggcwlyjy.png" },
  { imgUrl: "/Images/zgrjcpzx.png" },

  { imgUrl: "/Images/zggsyh.png" },
  { imgUrl: "/Images/zgnyyh.png" },
  { imgUrl: "/Images/zgyh.png" },
  { imgUrl: "/Images/zgjsyh.png" },

  { imgUrl: "/Images/jtyh.png" },
  { imgUrl: "/Images/zsyh.png" },
  { imgUrl: "/Images/zgmsyh.png" },
  { imgUrl: "/Images/zggdyh.png" },

  { imgUrl: "/Images/sd.png" },
  { imgUrl: "/Images/zghg.png" },
  { imgUrl: "/Images/hnga.png" },
  { imgUrl: "/Images/zgjrrzzx.png" },

  { imgUrl: "/Images/dzkjdx.png" },
  { imgUrl: "/Images/zgkxy.png" },
  { imgUrl: "/Images/zgkxjsdx.png" },
  { imgUrl: "/Images/zzdx.png" }
]
const newBannerBottomList = computed(() => {
  let pages = []
  bannerBottomList.forEach((item, index) => {
    let idx = Math.floor(index / 8)
    if (!pages[idx]) pages[idx] = []
    pages[idx].push(item)
  })
  return pages
})
</script>

<template>
  <div class="mt-[86px]">
    <!-- 头部轮播 -->
    <div class="top-swiper-wrap h-[560px] bg-[#F4FAFF]">
      <swiper class="h-[100%]" loop :speed="1500" :autoplay="{ disableOnInteraction: false, delay: 5000 }"
        :pagination="{ el: '.swiper-pagination', clickable: true }" :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
          ">
        <swiper-slide>
          <div class="h-[100%] bg-no-repeat overflow-hidden"
            :style="{ backgroundImage: 'url(/Images/wanjing-banner.png)', backgroundPosition: 'bottom', backgroundSize: 'contain' }">
            <div class="wjaq-container h-[100%] mx-auto flex mt-[100px]">
              <div>
                <div class="text-left text-[60px] font-bold-600">
                  重新定义<span class="color-[#0070FF]">安全能力融合</span>
                </div>
                <div class="text-[22px] leading-[30px]">让世界更安全，让安全更简单</div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="h-[100%] bg-no-repeat bg-positon-center"
            :style="{ backgroundImage: 'url(/Images/solution-banner.png)', backgroundPosition: '50% center', backgroundSize: 'contain' }">
            <div class="wjaq-container h-[100%] mx-auto flex items-center">
              <div class='text-left'>
                <div class="text-[35px] font-bold-600 w-[450px] leading-[40px]">
                  国内外首创的全国产化网络安全开发环境——<span class="color-[#0070FF]">YAK</span>
                </div>
                <div class="text-[18px] mt-[10px] leading-[30px] w-[540px]">
                  完全国产化、自主可控、国内外首创。荣获信息通信领域十大科技进展，重塑中国网络安全产业生产力。
                </div>
                <NuxtLink to="https://www.yaklang.com" target="_blank"><span
                    class="inline-block rounded-50 bg-[#000] color-[#fff] px-[10px] w-[162px] h-[53px] text-[20px] leading-[53px] text-center mt-[50px]">
                    了解详情
                  </span></NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="h-[100%] bg-no-repeat bg-positon-center"
            :style="{ backgroundImage: 'url(/Images/yakit-banner.png)', backgroundPosition: '50% center', backgroundSize: 'contain' }">
            <div class="wjaq-container h-[100%] mx-auto flex items-center">
              <div class='text-left'>
                <div class="text-[35px] font-bold-600 w-[454px] leading-[40px]">
                  国产自主可控的交互式应用安全测试平台——<span class="color-[#0070FF]">Yakit</span>
                </div>
                <div class="text-[18px] mt-[10px] leading-[30px] w-[741px]">
                  所有工具能力均采用国产编程语言 YAK 完成，完全自主可控。
                </div>
                <NuxtLink to="/safetyProduct/securityTestPlatform"><span
                    class="inline-block rounded-50 bg-[#000] color-[#fff] px-[10px] w-[162px] h-[53px] text-[20px] leading-[53px] text-center mt-[50px]">
                    了解详情
                  </span></NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="h-[100%] bg-no-repeat bg-positon-center"
            :style="{ backgroundImage: 'url(/Images/iRify-banner.png)', backgroundPosition: '50% center', backgroundSize: '1200px' }">
            <div class="wjaq-container h-[100%] mx-auto flex items-center">
              <div class='text-left'>
                <div class="text-[35px] font-bold-600 w-[454px] leading-[40px]">
                  基于代码建模的大型项目代码审计平台——<span class="color-[#0070FF]">IRify</span>
                </div>
                <div class="text-[18px] mt-[10px] leading-[30px] w-[504px]">
                  一款领先于传统SAST产品的创新型安全分析平台，深度解析复杂代码结构，涵盖多语言场景并提供精细的数据流和控制流分析能力。
                </div>
                <NuxtLink to="/safetyProduct/iRify"><span
                    class="inline-block rounded-50 bg-[#000] color-[#fff] px-[10px] w-[162px] h-[53px] text-[20px] leading-[53px] text-center mt-[50px]">
                    了解详情
                  </span></NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="h-[100%] bg-no-repeat bg-positon-center"
            :style="{ backgroundImage: 'url(/Images/qj_banner.png)', backgroundPosition: '50% center', backgroundSize: 'contain' }">
            <div class="wjaq-container h-[100%] mx-auto flex items-center">
              <div class="text-left">
                <div class="text-[35px] font-bold-600 w-[508px] leading-[40px]">
                  新一代网络安全高级 AI 智能体——<span class="color-[#0070FF]">万径千机</span>
                </div>
                <div class="text-[18px] mt-[10px] leading-[30px] w-[627px]">
                  致力于推动网络安全攻防走向智能化、无人化，具备自主规划、动态决策、工具调度、全程自主四大优势，7X24小时自主完成复杂网络安全任务，大幅提升人工效率。
                </div>
                <NuxtLink to="/safetyProduct/qjLargeModel"><span
                    class="inline-block rounded-50 bg-[#000] color-[#fff] px-[10px] w-[162px] h-[53px] text-[20px] leading-[53px] text-center mt-[50px]">
                    了解详情
                  </span></NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="h-[100%] bg-no-repeat bg-positon-center"
            :style="{ backgroundImage: 'url(/Images/xiaozhi-banner.png)', backgroundPosition: '50% center', backgroundSize: 'contain' }">
            <div class="wjaq-container h-[100%] mx-auto flex items-center">
              <div class='text-left'>
                <div class="text-[35px] font-bold-600 w-[455px] leading-[40px]">
                  新一代自动化渗透测试平台——<span class="color-[#0070FF]">小智</span>
                </div>
                <div class="text-[18px] mt-[10px] leading-[30px] w-[544px]">
                  国内率先实现“AI+网络安全检测”的智能渗透测试平台，能够实现自动化完成从信息收集、漏洞验证、漏洞利用、输出报告的渗透测试全过程。
                </div>
                <NuxtLink to="/safetyProduct/xiaozhi"><span
                    class="inline-block rounded-50 bg-[#000] color-[#fff] px-[10px] w-[162px] h-[53px] text-[20px] leading-[53px] text-center mt-[50px]">
                    了解详情
                  </span></NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="h-[100%] bg-no-repeat bg-positon-center"
            :style="{ backgroundImage: 'url(/Images/aqfw-banner.png)', backgroundPosition: '50% center', backgroundSize: '1300px' }">
            <div class="wjaq-container h-[100%] mx-auto flex items-center">
              <div class='text-left'>
                <div class="text-[35px] font-bold-600 w-[540px] leading-[40px]">
                  专业化安全服务与运营
                </div>
                <div class="text-[18px] mt-[10px] leading-[30px] w-[540px]">
                  以保障用户业务安全为核心目标，通过专业化安全能力和系统化技术方案，实现安全风险“发现-验证-分析-处置”闭环，提供7 X
                  24小时常态化安全托管服务，构建全方位安全运营体系，将风险持续降低，提升安全运营质量。
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev flex" slot="button-prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="48" viewBox="0 0 21 48" fill="none">
            <path d="M19.014 45.4263L2 24.2131L19.014 2.99993" stroke="white" stroke-width="4" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <div class="swiper-button-next flex" slot="button-next">
          <svg width="21" height="48" viewBox="0 0 21 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Rectangle 323" d="M1.98603 2.99993L19 24.2131L1.98603 45.4263" stroke="white" stroke-width="4"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </swiper>
    </div>

    <!-- 万径树 -->
    <div class="h-[1000px] tree-wrap bg-center bg-contain bg-no-repeat mt-[150px] mb-[150px]">
    </div>

    <!-- 底部轮播 -->
    <div class="bottom-swiper-wrap relative overflow-hidden h-[500px] bg-[#1E83FF]">
      <div class="bottom-left-bg absolute left-[0] top-[0]">
        <NuxtImg src="/Images/bottom-banner-left-bg.png" class="h-[500px]" />
      </div>
      <div class="bottom-right-bg absolute right-[0] top-[0]">
        <NuxtImg src="/Images/bottom-banner-right-bg.png" class="h-[500px]" />
      </div>
      <div class="wjaq-container mx-auto h-[100%] font-bold overflow-hidden bg-[#1E83FF]">
        <div class="text-[40px] text-center text-[#fff] my-[70px]">他们也选择万径安全</div>
        <swiper class="h-[160px]" :speed="1500" loop :autoplay="{ disableOnInteraction: false, delay: 5000 }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
            ">
          <swiper-slide v-for='(item, i) in newBannerBottomList' :key='i'>
            <el-row :gutter="0" justify="space-evenly" class="h-[100%] items-center bottom-swiper-row px-[120px]">
              <el-col :span="6" v-for="(page, j) in item" :key="j"
                class="h-[66px] w-[230px] flex items-center justify-center overflow-hidden rounded-[5px] px-[9px]">
                <NuxtImg :src="page.imgUrl" class="h-[100%]" />
              </el-col>
            </el-row>
          </swiper-slide>
          <div class="swiper-button-prev flex bg-[#1E83FF]" slot="button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="48" viewBox="0 0 21 48" fill="none">
              <path d="M19.014 45.4263L2 24.2131L19.014 2.99993" stroke="white" stroke-width="4" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
          <div class="swiper-button-next flex bg-[#1E83FF]" slot="button-next">
            <svg width="21" height="48" viewBox="0 0 21 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Rectangle 323" d="M1.98603 2.99993L19 24.2131L1.98603 45.4263" stroke="white" stroke-width="4"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tree-wrap {
  background-image: url('/Images/wanjin_tree.png');
}

[data-aos^=zoom][data-aos^=zoom].aos-animate {
  opacity: .8 !important;
}

.top-swiper-wrap {
  &:hover {

    .swiper-button-next,
    .swiper-button-prev {
      visibility: visible;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    justify-content: center;
    overflow: hidden;
    width: 37px;
    height: 54px;
    border-radius: 3px;
    background-color: #BCD9FF;
    visibility: hidden;

    svg {
      width: 24px;
      height: 24px;
    }

  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }
}

.bottom-swiper-wrap {

  .swiper-button-next,
  .swiper-button-prev {
    width: 68px !important;
    height: 100% !important;
  }

  .swiper-button-prev {
    top: 25px;
    left: 0;
    justify-content: flex-start;
  }

  .swiper-button-next {
    top: 25px;
    right: 0;
    justify-content: flex-end;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    display: none;
  }
}

@media (max-width: 1366px) {
  .bottom-swiper-row {
    padding: 0 65px;
  }
}
</style>
