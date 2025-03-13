<script setup>
</script>

<template>
  <div class="header fixed top-[0px] left-[0px] right-[0px] bg-[#fff] h-[86px]">
    <div class="wjaq-container mx-auto bg-[#fff] flex justify-between items-center">
      <div class="header-left mt-[10px]">
        <NuxtLink to="/">
          <NuxtImg src="/Images/logo.png" class="w-[125px]" />
        </NuxtLink>
      </div>
      <div class="header-right flex h-[100%] leading-[86px]">
        <div class="ml-[90px] text-[18px]">
          <NuxtLink to="/">首页</NuxtLink>
        </div>
        <div class="dropdown relative ml-[80px] text-[18px]">
          <NuxtLink to="/safetyProduct">产品</NuxtLink>
          <ul
            class="dropdown-content safetyProduct-dropdown-content absolute left-[0px] w-[360px] h-[0px] overflow-hidden bg-[#fff] left-[0px] top-[55px] px-[0px] text-[14px] rounded-[3px]">
            <a href="https://www.yaklang.com/" target="_blank">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                YAK：网络安全领域编程语言
              </li>
            </a>
            <NuxtLink to="/safetyProduct/securityTestPlatform">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                Yakit：交互式应用安全测试平台
              </li>
            </NuxtLink>
            <NuxtLink to="/safetyProduct/qjLargeModel">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                万径千机（SecMate）：新一代网络安全高级AI智能体
              </li>
            </NuxtLink>
            <NuxtLink to="/safetyProduct/xiaozhi">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                小智：新一代自动化渗透测试平台
              </li>
            </NuxtLink>
          </ul>
        </div>
        <div class="dropdown relative ml-[70px] text-[18px]">
          <NuxtLink to="/solution">解决方案</NuxtLink>
          <ul
            class="dropdown-content solution-dropdown-content absolute w-[260px] h-[0px] overflow-hidden bg-[#fff] left-[0px] top-[55px] px-[0px] text-[14px] rounded-[3px]">
            <NuxtLink to="/solution/constructionScheme">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                CDSL-YAK：企业安全建设解决方案
              </li>
            </NuxtLink>
            <NuxtLink to="/solution/qualityImproScheme">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                渗透测试质量提升方案
              </li>
            </NuxtLink>
          </ul>
        </div>
        <div class="ml-[80px] text-[18px]">
          <NuxtLink to="/securityService">安全服务</NuxtLink>
        </div>
        <div class="ml-[80px] text-[18px]">
          <NuxtLink to="/aboutUs">关于我们</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  z-index: 99999;
}

.dropdown {
  .dropdown-content {
    background-color: #020100;
    line-height: normal;
    z-index: 99999;
    box-shadow: 1px 1px 3px 0px rgba(164, 207, 244, 0.10), 5px 4px 6px 0px rgba(164, 207, 244, 0.09), 10px 9px 8px 0px rgba(164, 207, 244, 0.05), 19px 16px 10px 0px rgba(164, 207, 244, 0.01), 29px 25px 11px 0px rgba(164, 207, 244, 0.00);
    transition: height 0.3s;

    a {
      li {
        color: #fff;
        list-style: none;

        &:hover {
          background-color: #0070FF
        }
      }
    }
  }

  &:hover {
    .safetyProduct-dropdown-content {
      height: 140px;
    }

    .solution-dropdown-content {
      height: 70px;
    }
  }

}
</style>
