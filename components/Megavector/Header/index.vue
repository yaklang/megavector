<script setup>
const updateHeaderPosition = () => {
  const header = document.querySelector('.header');
  if (header) {
    header.style.transform = `translateX(-${window.scrollX}px)`;
    header.style.width = `calc(100% + ${window.scrollX}px)`;
  }
};

onMounted(() => {
  nextTick(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', updateHeaderPosition);
    }
  });
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', updateHeaderPosition);
  }
});
</script>

<template>
  <div class="header fixed top-[0px] left-[0px] bg-[#fff] h-[86px]">
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
          <NuxtLink to="/safetyProduct">安全产品</NuxtLink>
          <ul
            class="dropdown-content safetyProduct-dropdown-content absolute left-[0px] w-[360px] h-[0px] overflow-hidden bg-[#fff] left-[0px] top-[55px] px-[0px] text-[14px] rounded-[3px]">
            <a href="https://www.yaklang.com/" target="_blank">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                国内外首创的全国产化网络安全开发环境：YAK
              </li>
            </a>
            <NuxtLink to="/safetyProduct/securityTestPlatform">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                国产自主可控的交互式应用安全测试平台：Yakit
              </li>
            </NuxtLink>
            <NuxtLink to="/safetyProduct/iRify">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                基于代码建模的大型项目代码审计平台：IRify
              </li>
            </NuxtLink>
            <NuxtLink to="/safetyProduct/qjLargeModel">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                新一代网络安全高级 AI 智能体：万径千机
              </li>
            </NuxtLink>
            <NuxtLink to="/safetyProduct/xiaozhi">
              <li class="cursor-pointer pl-[15px] h-[35px] leading-[35px]">
                新一代自动化渗透测试平台：小智
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
  width: 100%;
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
      height: 175px;
    }

    /* .solution-dropdown-content {
      height: 70px;
    } */
  }

}
</style>
