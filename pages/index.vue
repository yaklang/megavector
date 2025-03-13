<script setup>
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
SwiperCore.use([Autoplay, Navigation, Pagination])

// 底部轮播数据
const bannerBottomList = [
  { imgUrl: "/Images/gjdw.png" },
  { imgUrl: "/Images/zgnfdw.png" },
  { imgUrl: "/Images/zghnjtyxgs.png" },
  { imgUrl: "/Images/zgdtjtgs.png" },
  { imgUrl: "/Images/zgh.png" },
  { imgUrl: "/Images/zglt.png" },
  { imgUrl: "/Images/zgdx.png" },
  { imgUrl: "/Images/zgjsyh.png" },
  { imgUrl: "/Images/zgmsyh.png" },
  { imgUrl: "/Images/gwydjt.png" },
  { imgUrl: "/Images/hxyh.png" },
  { imgUrl: "/Images/zgxxaqcpzx.png" },
  { imgUrl: "/Images/hnsgat.png" },
  { imgUrl: "/Images/gabyjs.png" },
  { imgUrl: "/Images/zhrmghgslb.png" },
  { imgUrl: "/Images/zhrmghgjtysb.png" },
  { imgUrl: "/Images/xxgcdx.png" },
  { imgUrl: "/Images/zzdx.png" },
  { imgUrl: "/Images/cdxxgcdx.png" },
  { imgUrl: "/Images/dzkjdx.png" },
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
  <Title>首页</Title>
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
                <div class="text-[22px] leading-[30px]">立足于攻防一线，为企业带来全新的安全体系建设思路。</div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="h-[100%] bg-no-repeat bg-positon-center"
            :style="{ backgroundImage: 'url(/Images/qj_banner.png)', backgroundPosition: '50% center', backgroundSize: 'contain' }">
            <div class="wjaq-container h-[100%] mx-auto flex items-center">
              <div class='text-center'>
                <div class="text-center text-[35px] font-bold-600 w-[880px]">
                  <span class="color-[#0070FF]">万径千机（SecMate）</span>新一代网络安全高级AI智能体
                </div>
                <div class="text-left text-[18px] mt-[10px] leading-[30px] w-[880px]">
                  具备自主规划、动态决策、工具调度、全程自主四大优势，能够7X24小时自主完成复杂网络安全任务，大幅提升人工效率。
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
            :style="{ backgroundImage: 'url(/Images/solution-banner.png)', backgroundPosition: '50% center', backgroundSize: 'contain' }">
            <div class="wjaq-container h-[100%] mx-auto flex items-center">
              <div class='text-center'>
                <div class="text-center text-[35px] font-bold-600 w-[660px]">
                  <span class="color-[#0070FF]">CDSL-YAK</span>企业安全建设解决方案
                </div>
                <div class="text-left text-[18px] mt-[10px] leading-[30px] w-[660px]">
                  以YAK语言为核心，以衍生产品为配套。通过构建底层安全能力基座，实现低位安全产品的高效集成，协助企业进行网络安全体系建设。
                </div>
                <NuxtLink to="/solution/constructionScheme"><span
                    class="inline-block rounded-50 bg-[#000] color-[#fff] px-[10px] w-[162px] h-[53px] text-[20px] leading-[53px] text-center mt-[50px]">
                    了解详情
                  </span></NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="h-[100%] bg-no-repeat bg-positon-center"
            :style="{ backgroundImage: 'url(/Images/qualityImproScheme-banner.png)', backgroundPosition: '50% center', backgroundSize: 'contain' }">
            <div class="wjaq-container h-[100%] mx-auto flex items-center">
              <div class='text-center'>
                <div class="text-center text-[35px] font-bold-600 w-[600px]">
                  渗透测试质量提升方案
                </div>
                <div class="text-left text-[18px] mt-[10px] leading-[30px] w-[600px]">
                  渗透测试，也被称为渗透性评估或者攻击模拟，是完全模拟黑客可能使用的攻击技术和漏洞发现技术，对目标系统的安全作深入的探测，发现系统最脆弱的环节。
                </div>
                <div class="text-left text-[18px] mt-[10px] leading-[30px] w-[600px] mb-[25px]">
                  渗透测试能够直观地让管理人员知道自己网络所面临的问题，从而帮助组织提前采取防范措施，避免或者减轻可能发生的损失。
                </div>
                <div class="text-center color-[#0070FF] text-[30px]">渗透测试是一种非常专业的安全服务。</div>
                <NuxtLink to="/solution/qualityImproScheme"><span
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
              <div class='text-center'>
                <div class="text-center text-[35px] font-bold-600 w-[640px]">
                  <span class="color-[#0070FF]">小智</span>新一代自动化渗透测试平台
                </div>
                <div class="text-left text-[18px] mt-[10px] leading-[30px] w-[640px]">
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
            :style="{ backgroundImage: 'url(/Images/yakit-banner.png)', backgroundPosition: '50% center', backgroundSize: 'contain' }">
            <div class="wjaq-container h-[100%] mx-auto flex items-center">
              <div class='text-center'>
                <div class="text-center text-[35px] font-bold-600 w-[610px]">
                  <span class="color-[#0070FF]">Yakit</span>交互式应用安全测试平台
                </div>
                <div class="text-left text-[18px] mt-[10px] leading-[30px] w-[610px]">
                  为Yaklang编写了gRPC服务器，并基于gRPC服务器构建了客户端，通过GUI操控引擎能力，集成Yaklang的所有能力。
                </div>
                <NuxtLink to="/safetyProduct/securityTestPlatform"><span
                    class="inline-block rounded-50 bg-[#000] color-[#fff] px-[10px] w-[162px] h-[53px] text-[20px] leading-[53px] text-center mt-[50px]">
                    了解详情
                  </span></NuxtLink>
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
        <div class="text-[40px] text-center text-[#fff] my-[70px]">他们也选择万径</div>
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
  <MegavectorOnlineConsultation></MegavectorOnlineConsultation>
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
