<script setup>
</script>

<template>
  <div class="mt-[86px]">
    <!-- 渗透测试质量提升方案 banner -->
    <div class="relative h-[620px] bg-[#F4FAFF]">
      <div class="wjaq-container mx-auto h-[100%] flex items-center justify-between">
        <div class="w-[600px]">
          <div class="text-[52px] mb-[18px]">渗透测试质量提升方案</div>
          <div class="text-[18px] leading-[35px]">
            渗透测试，也被称为渗透性评估或者攻击模拟，是完全模拟黑客可能使用的攻击技术和漏洞发现技术，对目标系统的安全作深入的探测，发现系统最脆弱的环节。
          </div>
          <div class="text-[18px] leading-[35px] mb-[25px]">渗透测试能够直观地让管理人员知道自己网络所面临的问题，从而帮助组织提前采取防范措施，避免或者减轻可能发生的损失。
          </div>
          <div class="text-center">
            <a href="https://yaklang.oss-cn-beijing.aliyuncs.com/penetration-testing-solution.pdf" download target="_block">
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
          </div>
        </div>
        <NuxtImg src="/Images/qualityImproScheme-banner2.png" class="w-[500px]" />
      </div>
    </div>
    <div class="w-[1100px] mx-auto my[300px]">
      <!-- 渗透测试的作用与收益 -->
      <div class="border-[1px] border-solid border-color-[#0070FF] mb-[200px]">
        <div class="text-[28px] color-[#fff] text-center bg-[#0070FF] py-[30px] font-bold-500">渗透测试的作用与收益</div>
        <div class="text-center py-[45px]">
          <div class="text-[18px] mb-[10px] font-bold-600">提高系统安全性</div>
          <div class="text-[15px] color-[#5E5C5C]">渗透测试能够发现并修复系统中的安全漏洞，从而显著提高系统的安全性，防止潜在的攻击。</div>
        </div>
        <div class="text-center py-[45px] bg-[#EAF3FF]">
          <div class="text-[18px] mb-[10px] font-bold-600">满足合规要求</div>
          <div class="text-[15px] text-left pl-[100px] mb-[10px] color-[#5E5C5C]">
            <span class="font-bold-600 text-[24px]">·</span>《中华人民共和国网络安全法》要求企业采取必要的技术措施，保护个人信息和重要数据的安全。
          </div>
          <div class="text-[15px] text-left pl-[100px] color-[#5E5C5C]"><span class="font-bold-600 text-[24px]">·</span>
            GB/T
            22239-2019《信息安全技术
            企业级信息安全基本要求》规定了企业在组织架构、安全政策、人员管理、物理安全等方面的基本要求。
          </div>
        </div>
        <div class="text-center py-[45px]">
          <div class="text-[18px] mb-[10px] font-bold-600">防止经济损失</div>
          <div class="text-[15px] color-[#5E5C5C]">通过渗透测试发现和修复漏洞，可以避免因安全事故导致的巨大经济损失。</div>
        </div>
        <div class="text-center py-[45px] bg-[#EAF3FF]">
          <div class="text-[18px] mb-[10px] font-bold-600">保护企业声誉</div>
          <div class="text-[15px] color-[#5E5C5C]">安全事故往往会对企业的社会形象造成严重打击。通过定期的渗透测试，可以有效防止安全事故的发生，保护企业的声誉，维持客户的信任。
          </div>
        </div>
        <div class="text-center py-[45px]">
          <div class="text-[18px] mb-[10px] font-bold-600">提升安全意识</div>
          <div class="text-[15px] color-[#5E5C5C]">渗透测试不仅能发现技术漏洞，也能通过模拟攻击的过程，提升组织和员工的安全意识，帮助他们了解和防范潜在的威胁。
          </div>
        </div>
      </div>
      <!-- 渗透测试面临的挑战和问题 -->
      <div class="border-[1px] border-solid border-color-[#000]">
        <div class="color-[#fff] text-center bg-[#000] py-[30px]">
          <div class="text-[28px] mb-[15px] font-bold-500">渗透测试面临的挑战和问题</div>
          <div class="text-[16px]">尽管渗透测试在信息安全领域的重要性毋庸置疑，但在实际操作中，仍然面临着许多挑战和问题。</div>
        </div>
        <div class="text-center py-[45px]">
          <div class="text-[18px] mb-[10px] font-bold-600">测试工具自身安全的不可控</div>
          <div class="text-[15px] text-left px-[75px] leading-[28px] color-[#5E5C5C]">
            渗透测试工具通常来自开源社区或者第三方开发，这些工具的安全性往往无法得到保证。如果测试工具自身存在安全漏洞或者被植入恶意代码，那么在渗透测试过程中可能会给被测试系统带来额外的安全风险。</div>
        </div>
        <div class="text-center py-[45px] bg-[#F2F2F2]">
          <div class="text-[18px] mb-[10px] font-bold-600">测试工具版本的不统一</div>
          <div class="text-[15px] color-[#5E5C5C]">由于各种原因，不同的渗透测试人员可能会使用不同版本的测试工具，这可能会导致测试结果的不一致，或者出现因工具版本过旧而漏报某些新的安全漏洞。
          </div>
        </div>
        <div class="text-center py-[45px]">
          <div class="text-[18px] mb-[10px] font-bold-600">测试过程不可控</div>
          <div class="text-[15px] text-left px-[75px] leading-[28px] color-[#5E5C5C]">
            在传统的渗透测试中，测试过程往往不透明，无法确保测试人员真的按照预定的测试计划和标准进行全面的测试，这可能会导致一些潜在的安全漏洞被忽视。</div>
        </div>
        <div class="text-center py-[45px] bg-[#F2F2F2]">
          <div class="text-[18px] mb-[10px] font-bold-600">测试工具无法原生协同</div>
          <div class="text-[15px] color-[#5E5C5C]">大多数渗透测试工具是独立开发的，无法实现原生的协同，这给多人协同测试和工具间的数据共享带来了困难，降低了测试的效率。
          </div>
        </div>
        <div class="text-center py-[45px]">
          <div class="text-[18px] mb-[10px] font-bold-600">测试过程数据溯源问题</div>
          <div class="text-[15px] text-left px-[75px] leading-[28px] color-[#5E5C5C]">
            在渗透测试过程中，可能会产生大量的数据，包括测试结果、测试过程记录、漏洞报告等。如果没有有效的数据管理和溯源机制，那么在后期的分析和复查中，可能会遇到很大的困难。
          </div>
        </div>
      </div>
    </div>
    <div class="wjaq-container mx-auto">
      <div class="mb-[300px]">
        <!-- 万径安全渗透测质量提升解决方案 -->
        <div class="relative py-[15px] px-[40px] mb-[130px] mx-auto w-[835px]">
          <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
          </svg>
          <div class="text-[40px] text-center font-bold-600">
            万径安全渗透测质量提升解决方案
          </div>
          <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
          </svg>
        </div>
        <div class="quality-impro-scheme-wrap">
          <div class="relative quality-impro-scheme-item h-[256px] mb-[100px] rounded-[12px]">
            <div class="w-[900px] pl-[50px] absolute top-[50%] translate-y-[-50%]">
              <div class="text-[26px] font-bold-500 mb-[10px]">一体化的测试平台</div>
              <div class="text-[16px] mb-[5px]">以YAK语言为基础，对底层的网络安全能力进行封装，打造一体化的测试平台：Yakit。</div>
              <div class="text-[16px] mb-[5px]">使用者可以在一个视窗内，完成渗透测试全流程的动作执行，不需要安装其他第三方依赖，工具原生适配且可协同。</div>
              <div class="text-[16px] mb-[5px]">工具的渗透测试能力源于YAK引擎针对网络安全能力的函数级融合，通过Yakit可以实现一体化的测试机制。</div>
            </div>
            <NuxtImg src="/Images/yth.png" class="w-[218px] absolute right-[18px] bottom-[0px]" />
          </div>
          <div class="relative quality-impro-scheme-item h-[256px] pl-[49px] mb-[100px] rounded-[12px]">
            <div class="w-[900px] absolute top-[50%] translate-y-[-50%]">
              <div class="text-[26px] font-bold-500 mb-[10px]">提升企业人员的测试效率和效果</div>
              <div class="text-[16px] mb-[5px] leading-[28px]">
                一体化的渗透测试平台，可以大大简化测试过程，减少人工手动操作。自动化的测试过程可以降低人工错误的可能性，提升测试的速度，从而更好地保护网络安全。
              </div>
            </div>
            <NuxtImg src="/Images/ts.png" class="w-[180px] absolute right-[24px] bottom-[0px]" />
          </div>
          <div class="relative quality-impro-scheme-item h-[256px] pl-[49px] mb-[100px] rounded-[12px]">
            <div class="w-[900px] absolute top-[50%] translate-y-[-50%]">
              <div class="text-[26px] font-bold-500 mb-[10px]">实现隔离内网环境中的多人协同</div>
              <div class="text-[16px] mb-[5px] leading-[28px]">
                用户可以将不同的Yakit客户端连接到统一的grpc服务端，通过WebFuzzer数据共享实现在渗透测试过程中的多人协同，及时掌握同组同事的测试进度和测试细节；通过统一协作服务器的配置，还能进行成员之间的远程协助。
              </div>
            </div>
            <NuxtImg src="/Images/drxz.png" class="w-[160px] absolute right-[53px] bottom-[0px]" />
          </div>
          <div class="relative quality-impro-scheme-item h-[256px] pl-[49px] rounded-[12px]">
            <div class="w-[900px] absolute top-[50%] translate-y-[-50%]">
              <div class="text-[26px] font-bold-500 mb-[10px]">快速上手，建立贴合企业的安全体系</div>
              <div class="text-[16px] mb-[5px] leading-[28px]">
                YAK内置库函数封装了现有安全市场上的大多数产品功能，用户可以根据自己的需求去编写DSL脚本以实现特定的策略和检测规则，可以让各种各样的安全能力彼此之间“互补，融合，进化”，从而建立贴合企业自身场景的安全体系。
              </div>
            </div>
            <NuxtImg src="/Images/ksss.png" class="w-[230px] absolute right-[0px] bottom-[0px]" />
          </div>
        </div>
      </div>
      <div class="mb-[300px]">
        <!-- 解决方案的部署实施 -->
        <div class="relative py-[15px] px-[40px] mb-[114px] mx-auto w-[585px]">
          <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
          </svg>
          <div class="text-[40px] text-center font-bold-600">
            解决方案的部署实施
          </div>
          <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
          </svg>
        </div>
        <div class="relative text-[16px] leading-[28px] mb-[150px]">
          <NuxtImg src="/Images/dot-right.png" class="absolute left-[0px] top-[-80px] w-[226px]" />
          针对企业使用，Yakit提供了一套完整的解决方案，包括身份认证、管理协同等功能。让企业能更好地管控数据，管理人员，沉淀知识。同时为了数据的安全性，插件商店及反连平台(漏洞检测辅助)可以进行私有化部署，Yakit也可根据企业的需要提供EXP服务、菜单配置等用户配置服务，也可以为企业的实际使用场景提供定制服务。
          <NuxtImg src="/Images/dot-left.png" class="absolute right-[0px] bottom-[-155px] w-[290px]" />
        </div>
        <div class="h-[280px] w-[800px] mx-auto flex items-center justify-between">
          <span
            class="inline-block rounded-[6px] bg-[#000] color-[#fff] w-[120px] h-[45px] leading-[45px] text-[20px] text-center font-bold-500">
            EXP
          </span>
          <span
            class="inline-block rounded-[6px] bg-[#000] color-[#fff] w-[120px] h-[45px] leading-[45px] text-[20px] text-center font-bold-500">
            Online
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="270" viewBox="0 0 24 270" fill="none">
            <path
              d="M23 269V269C14.8757 263.557 10 254.421 10 244.642L10 150.744C10 144.617 6.50669 139.026 0.999994 136.34V136.34V136.34C6.50669 133.654 10 128.063 10 121.936L10 28.7115C9.99999 18.3386 14.4742 8.46986 22.2762 1.63419L23 0.999999"
              stroke="black" stroke-width="1.5" />
          </svg>
          <div class="flex flex-col">
            <span
              class="inline-block rounded-[6px] bg-[#0070FF] color-[#fff] w-[120px] h-[45px] leading-[45px] text-[20px] text-center font-bold-500">
              插件
            </span>
            <span
              class="inline-block rounded-[6px] bg-[#0070FF] color-[#fff] w-[120px] h-[45px] leading-[45px] text-[20px] text-center font-bold-500 my-[90px]">
              用户配置
            </span>
            <span
              class="inline-block rounded-[6px] bg-[#0070FF] color-[#fff] w-[120px] h-[45px] leading-[45px] text-[20px] text-center font-bold-500">
              协同
            </span>
          </div>
          <span
            class="inline-block rounded-[6px] bg-[#000] color-[#fff] w-[120px] h-[45px] leading-[45px] text-[20px] text-center font-bold-500 ml-[50px]">
            Profile
          </span>
          <div class="mt-[27px]">
            <span
              class="inline-block rounded-[6px] bg-[#000] color-[#fff] w-[120px] h-[45px] leading-[45px] text-[20px] text-center font-bold-500">
              Reverse
            </span>
            <div class="text-center mt-[7px]">漏洞辅助检测</div>
          </div>
        </div>
        <div class="text-[16px] mt-[155px] mb-[65px] text-center">
          万径安全通过行业观察，针对行业渗透测试现有问题，结合公司现有安全产品和能力，为企业针对性地提出了渗透测试质量提升方案。</div>
        <div class="flex justify-around items-center">
          <div class="text-center">
            <NuxtImg src="/Images/yth-tool.png" class="w-[124px]" />
            <div class="mt-[45px] text-[18px] font-bold-500 color-[#007AFF]">一体化的渗透测试工具</div>
          </div>
          <div class="text-center">
            <NuxtImg src="/Images/gxxz.png" class="w-[131px]" />
            <div class="mt-[45px] text-[18px] font-bold-500 color-[#007AFF]">高效的协同作战平台</div>
          </div>
          <div class="text-center">
            <NuxtImg src="/Images/tdqyaqjs.png" class="w-[135px]" />
            <div class="mt-[45px] text-[18px] font-bold-500 color-[#007AFF]">推动企业安全建设</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.constructionScheme-banner-cont {
  z-index: 999;
}

.quality-impro-scheme-item {
  background: linear-gradient(271deg, rgba(233, 242, 254, 0.55) 50.33%, rgba(233, 242, 254, 0.55) 71.37%, rgba(244, 250, 255, 0.00) 131.23%);
}
</style>
