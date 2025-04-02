<script setup>
</script>

<template>
  <div class="mt-[86px]">
    <!-- Yakit 交互式应用安全测试平台 banner -->
    <div class="relative h-[452px] bg-[#1D83FF]">
      <div class="bottom-left-bg absolute left-[0] top-[0]">
        <NuxtImg src="/Images/light-bg-left.png" class="h-[452px]" />
      </div>
      <div class="bottom-right-bg absolute right-[0] top-[0]">
        <NuxtImg src="/Images/light-bg-right.png" class="h-[452px]" />
      </div>
      <div class="yakit-banner-cont relative wjaq-container mx-auto h-[100%] flex justify-center items-center">
        <div class="text-center">
          <div class="text-[52px] color-[#fff]"><span class="font-bold-600">Yakit</span>交互式应用安全测试平台</div>
          <div class="text-[18px] color-[#fff] mt-[20px]">为Yaklang编写了gRPC服务器，并基于gRPC服务器构建了客户端，通过GUI操控引擎能力，集成Yaklang的所有能力。
          </div>
          <a href="https://yaklang.oss-cn-beijing.aliyuncs.com/yakit-technical-white-paper.pdf"
            download target="_block">
            <span
              class="inline-block rounded-[43px] bg-[#000] color-[#fff] py-[10px] px-[30px] h-[48px] text-[18px] leading-[26px] text-center mt-[60px]">
              <svg class="w-[18px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" fill="none">
                <path d="M1 9.5V12.5C1 13.6046 1.89543 14.5 3 14.5H15C16.1046 14.5 17 13.6046 17 12.5V9.5" stroke="white"
                  stroke-width="1.5" stroke-linecap="round" />
                <path d="M5 5.80159L9 8.92857M9 8.92857L13 5.80159M9 8.92857V1" stroke="white" stroke-width="1.5"
                  stroke-linecap="round" />
              </svg>
              下载白皮书
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="wjaq-container mx-auto">
      <!-- CDSL-YAK 的最佳实践，让企业安全测试高效可控。 -->
      <div class="my-[300px]">
        <div class="relative py-[50px] px-[112px]  w-[100%]">
          <svg class="absolute left-[0] top-[0] w-[51px] h-[50px]" xmlns="http://www.w3.org/2000/svg" width="51"
            height="50" viewBox="0 0 51 50" fill="none">
            <path
              d="M0 29.1209C0 22.7717 1.38163 17.1551 4.14488 12.2711C7.02827 7.38706 11.8339 3.2967 18.5618 0L23.0671 8.42491C18.0212 10.8669 14.417 13.6752 12.2544 16.8498C10.0919 19.9023 9.0106 23.9927 9.0106 29.1209H20.5442V50H0V29.1209ZM27.7527 29.1209C27.7527 22.7717 29.1343 17.1551 31.8975 12.2711C34.7809 7.38706 39.5866 3.2967 46.3145 0L51 8.42491C45.9541 10.8669 42.3498 13.6752 40.1873 16.8498C38.0247 19.9023 36.9435 23.9927 36.9435 29.1209H48.477V50H27.7527V29.1209Z"
              fill="#DEEEFD" />
          </svg>
          <div class="text-[40px] text-center font-bold-500">
            <span class="font-bold-600 color-[#007AFF]">CDSL-YAK</span>的最佳实践，让企业安全测试高效可控。
          </div>
          <svg class="absolute right-[0] bottom-[0] w-[51px] h-[50px]" xmlns="http://www.w3.org/2000/svg" width="51"
            height="50" viewBox="0 0 51 50" fill="none">
            <path
              d="M51 20.8791C51 27.2283 49.6184 32.8449 46.8551 37.7289C43.9717 42.6129 39.1661 46.7033 32.4382 50L27.9329 41.5751C32.9788 39.1331 36.583 36.3248 38.7456 33.1502C40.9081 30.0977 41.9894 26.0073 41.9894 20.8791L30.4558 20.8791L30.4558 1.79603e-06L51 0L51 20.8791ZM23.2473 20.8791C23.2473 27.2283 21.8657 32.8449 19.1025 37.7289C16.2191 42.6129 11.4134 46.7033 4.6855 50L-7.36529e-07 41.5751C5.04593 39.1331 8.65017 36.3248 10.8127 33.1502C12.9753 30.0977 14.0565 26.0073 14.0565 20.8791L2.52296 20.8791L2.52296 4.238e-06L23.2473 2.42621e-06L23.2473 20.8791Z"
              fill="#DEEEFD" />
          </svg>
        </div>
      </div>
      <!-- 全方位的权限管控  -->
      <div class="mb-[300px]">
        <div class="relative py-[15px] px-[40px] mb-[80px] mx-auto w-[520px]">
          <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"
            fill="none">
            <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
          </svg>
          <div class="text-[40px] text-center font-bold-600">
            全方位的权限管控
          </div>
          <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
          </svg>
        </div>
        <div class="color-[#0070FF] text-[20px] leading-[35px]">
          Yakit企业版通过其高级权限管理功能确保只有授权用户才能访问敏感数据和重要功能，从而保护系统免遭未授权访问或潜在内部威胁。这对维护组织的数据安全性和符合相关法规标准至关重要。</div>
        <div class="text-[32px] font-bold-500 text-center mt-[150px] mb-[100px]">· 核心功能 ·</div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="Images/yhrz.png" class="w-[120px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">用户认证</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              Yakit企业版采用认证机制，确保所有访问请求的合法性和安全性。</div>
          </div>
        </div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="/Images/jsdyqxfp.png" class="w-[120px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">角色定义与权限分配</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              管理员可以根据组织的具体需求和安全策略，定义多种角色，并为每个角色分配一组特定的权限。</div>
          </div>
        </div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="/Images/fwkz.png" class="w-[120px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">访问控制</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              细致管理用户对系统资源的访问，确保Yakit能够根据用户的角色和权限来决定其是否可以访问特定的资源或执行特定的操作，同时支持条件访问控制。</div>
          </div>
        </div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="/Images/sjbg.png" class="w-[100px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">审计与报告</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              为了确保系统的安全性和合规性，Yakit提供全面的审计和报告功能。记录所有用户的访问和操作尝试，无论成功与否，为安全分析和合规性审计提供了详细的数据。</div>
          </div>
        </div>
      </div>
      <!-- 高效的团队协作体系 -->
      <div class="mb-[300px]">
        <div class="relative py-[15px] px-[40px] mb-[80px] mx-auto w-[567px]">
          <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"
            fill="none">
            <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
          </svg>
          <div class="text-[40px] text-center font-bold-600">
            高效的团队协作体系
          </div>
          <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
          </svg>
        </div>
        <div class="color-[#0070FF] text-[20px] leading-[35px]">
          在渗透测试领域，尤其是在隔离的内网环境中，多人协同成为提升测试效率和质量的关键因素。Yakit平台通过引入一系列先进的功能，极大地促进了团队之间的协作和信息共享，确保测试工作的连贯性和高效率。通过协作功能，Yakit不仅解决了隔离内网环境下的通信和协作问题，还显著提升了渗透测试的整体效率和测试效果。
        </div>
        <div class="text-[32px] font-bold-500 text-center mt-[150px] mb-[100px]">· 核心功能 ·</div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="/Images/sssjgxycxz.png" class="w-[120px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">实时数据共享与远程协助</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              Yakit通过统一的gRPC服务端允许用户实时共享测试数据和进程，远程协助功能还能使多个用户在隔离的内网中完成即时的屏幕共享和远程控制，无论团队成员身在何处，都可以即时掌握其他同事的测试进度和细节。</div>
          </div>
        </div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="/Images/wsjgxgjxz.png" class="w-[120px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">WebFuzzer数据共享与工具协同</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              在特定漏洞测试中，所有的测试工具、通信工具和数据管理工具在Yakit中都能在隔离的内网环境中正常工作并有效协同，包括测试工具的数据输入输出、通信工具的信息交换以及数据管理工具的资料共享和访问控制。</div>
          </div>
        </div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="/Images/wjgxwdgl.png" class="w-[120px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">文件共享、文档管理</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              Yakit的文件共享和协作注释功能使团队成员能够轻松共享文档，并在文件上进行实时讨论和标注，使得团队可以集中管理所有相关文档；与此同时，Yakit的权限控制模块又限制了每个团队成员只能接触到对其任务必要的资源，有效防止敏感信息泄露或误操作。
            </div>
          </div>
        </div>
      </div>
      <!-- 项目管理和数据管控 -->
      <div class="mb-[300px]">
        <div class="relative py-[15px] px-[40px] mb-[80px] mx-auto w-[567px]">
          <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"
            fill="none">
            <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
          </svg>
          <div class="text-[40px] text-center font-bold-600">
            项目管理和数据管控
          </div>
          <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
          </svg>
        </div>
        <div class="color-[#0070FF] text-[20px] leading-[35px]">
          每个项目中产生的所有业务流量都被详细记录，并存储到单独的数据库中。这一设计不仅使数据的追踪和管理变得更为高效，也为后续的质量分析和数据审计提供了坚实的数据支撑。
        </div>
        <div class="text-[32px] font-bold-500 text-center mt-[150px] mb-[100px]">· 核心功能 ·</div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="/Images/sjzzgl.png" class="w-[130px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">数据追踪和管理</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              每个项目的数据都被自动记录并隔离存储，使团队能够针对特定项目轻松地回溯和分析历史数据。</div>
          </div>
        </div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="/Images/sjsczlx.png" class="w-[100px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">数据上传至离线Server</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              Yakit支持将项目数据库自动上传至统一的离线Server。这不仅为数据提供了一个安全的备份，也使得团队可以在需要时随时访问和分析这些数据。</div>
          </div>
        </div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="/Images/kshzsbg.png" class="w-[130px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">可视化展示与报告</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              Yakit将分析结果通过直观的图表和报告形式呈现，使用户能够快速理解和评估当前的安全状况。提供可定制的仪表板和报告，满足不同用户的特定需求，提供关键信息和洞察。</div>
          </div>
        </div>
        <div class="flex items-center mb-[90px]">
          <div class="mr-[84px] w-[120px] text-right">
            <NuxtImg src="/Images/sjfyxt.png" class="w-[120px]" />
          </div>
          <div>
            <div class="text-[20px] font-bold-600 mb-[10px]">数据复用与协同</div>
            <div class="text-[15px] color-[#646363] leading-[28px]">
              Yakit支持分析得到的数据提供给其他安全设备和平台，实现跨系统的信息共享和协同。</div>
          </div>
        </div>
      </div>
      <!-- 高级功能和定制化选项 -->
      <div class="mb-[300px]">
        <div class="relative py-[15px] px-[40px] mb-[80px] mx-auto w-[643px]">
          <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"
            fill="none">
            <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
          </svg>
          <div class="text-[40px] text-center font-bold-600">
            高级功能和定制化选项
          </div>
          <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
          </svg>
        </div>
        <div class="color-[#0070FF] text-[20px] leading-[35px] text-center">
          支持用户界面和体验定制、 自定义插件和客户端、定制化数据分析和报告、API接口与集成等。
        </div>
        <div class="mt-[125px]">
          <div class="mb-[136px]">
            <div class="flex h-[55px] leading-[55px] color-[#fff]">
              <div class="w-[587px] text-[20px] text-center bg-[#000]">功能</div>
              <div class="w-[313px] text-[20px] text-center bg-[#0070FF] mx-[1px]">企业版</div>
              <div class="w-[298px] text-[20px] text-center bg-[#989B9F]">社区版</div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#fff] color-[#000]">插件权限管理</div>
              <div class="w-[313px] text-center bg-[#fff] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#fff]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#ECECEC] color-[#000]">生成报告并导出</div>
              <div class="w-[313px] text-center bg-[#DEEAFD] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#F5FAFE]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#fff] color-[#000]">团队协作</div>
              <div class="w-[313px] text-center bg-[#fff] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#fff]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#ECECEC] color-[#000]">数据SaaS保存</div>
              <div class="w-[313px] text-center bg-[#DEEAFD] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#F5FAFE]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#fff] color-[#000]">团队成员管理</div>
              <div class="w-[313px] text-center bg-[#fff] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#fff]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#ECECEC] color-[#000]">漏洞利用插件</div>
              <div class="w-[313px] text-center bg-[#DEEAFD] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#F5FAFE]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#fff] color-[#000]">离线部署-插件服务器</div>
              <div class="w-[313px] text-center bg-[#fff] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#fff]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#ECECEC] color-[#000]">POC按需定制</div>
              <div class="w-[313px] text-center bg-[#DEEAFD] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#F5FAFE]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#fff] color-[#000]">权限管理</div>
              <div class="w-[313px] text-center bg-[#fff] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#fff]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#ECECEC] color-[#000]">远程协助</div>
              <div class="w-[313px] text-center bg-[#DEEAFD] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#F5FAFE]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#fff] color-[#000]">基线检测</div>
              <div class="w-[313px] text-center bg-[#fff] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#fff]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#ECECEC] color-[#000]">按需定制</div>
              <div class="w-[313px] text-center bg-[#DEEAFD] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#F5FAFE]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#fff] color-[#000]">操作录屏文件上传</div>
              <div class="w-[313px] text-center bg-[#fff] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#fff]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>

            <div class="flex h-[55px] leading-[55px]">
              <div class="w-[587px] text-[16px] text-center bg-[#ECECEC] color-[#000]">BAS规则定制</div>
              <div class="w-[313px] text-center bg-[#DEEAFD] mx-[1px]"><svg class="mt-[15px]"
                  xmlns="http://www.w3.org/2000/svg" width="29" height="23" viewBox="0 0 29 23" fill="none">
                  <path d="M27.355 2.36377L12.439 20.3785L5.29616 11.7517L2.35498 14.8638" stroke="#5697F9"
                    stroke-width="3" stroke-linecap="round" />
                </svg></div>
              <div class="w-[298px] text-center bg-[#F5FAFE]"><svg class="mt-[15px]" xmlns="http://www.w3.org/2000/svg"
                  width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M20.3003 2.56066C20.8861 1.97487 20.8861 1.02513 20.3003 0.43934C19.7145 -0.146446 18.7648 -0.146447 18.179 0.43934L10.6495 7.96887L3.11994 0.43934C2.53415 -0.146447 1.5844 -0.146446 0.998616 0.43934C0.41283 1.02513 0.41283 1.97487 0.998617 2.56066L8.52814 10.0902L0.998422 17.6199C0.412636 18.2057 0.412636 19.1554 0.99842 19.7412C1.58421 20.327 2.53395 20.327 3.11974 19.7412L10.6495 12.2115L18.1792 19.7412C18.765 20.327 19.7147 20.327 20.3005 19.7412C20.8863 19.1554 20.8863 18.2057 20.3005 17.6199L12.7708 10.0902L20.3003 2.56066Z"
                    fill="#868686" />
                </svg></div>
            </div>
          </div>
          <div>
            <div class="flex h-[55px] leading-[55px] color-[#fff]">
              <div class="w-[100%] text-[20px] text-center bg-[#0070FF]">Yakit企业版可定制开发范围</div>
            </div>
            <div class="flex h-[55px] leading-[55px] color-[#000] text-[16px] text-center">
              <div class="w-[25%] bg-[#E8F2FF]">插件</div>
              <div class="w-[25%] bg-[#E8F2FF] mx-[1px]">Logo</div>
              <div class="w-[25%] bg-[#E8F2FF]">报告内容</div>
              <div class="w-[25%] bg-[#E8F2FF] mx-[1px]">菜单栏</div>
              <div class="w-[25%] bg-[#E8F2FF]">按需定制</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 客户案例 -->
      <div class="mb-[300px]">
        <div class="relative py-[15px] px-[40px] mb-[80px] mx-auto w-[420px]">
          <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"
            fill="none">
            <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
          </svg>
          <div class="text-[40px] text-center font-bold-600">
            客户案例
          </div>
          <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
          </svg>
        </div>
        <div class="text-[32px] font-bold-500 text-center mt-[110px] mb-[75px]">· 金融机构 ·</div>
        <div class="flex justify-between items-center mb-[90px]">
          <div class="mr-[84px] w-[120px]">
            <NuxtImg src="/Images/jrjg.png" class="w-[300px]" />
          </div>
          <div class="w-[750px]">
            <div class="text-[15px] color-[#000] leading-[28px]">
              随着数字化服务的不断扩展，面临着日益复杂的网络安全挑战。传统的渗透测试流程碎片化、效率低下，且渗透测试和漏洞挖掘依赖于公司自身安全团队和第三方安全服务机构，参与的专业的渗透测试人员数量少、整体水平参差不齐、使用的工具种类繁多，测试手法各式各样，最终的渗透测试结果越来越难以满足当下业务信息系统快速发展需求。
            </div>
          </div>
        </div>
        <div class="text-center mb-[35px]">
          <span
            class="inline-block rounded-[43px] bg-[#000] color-[#fff] py-[6px] px-[28px] h-[40px] text-[18px] leading-[26px] text-center mt-[45px]">
            Yakit解决方案
          </span>
        </div>
        <div class="color-[#868686] text-[18px] text-center mb-[80px]">
          提供全面的一体化渗透测试平台，集成了从任务规划、执行、数据管理到结果分析的全流程服务。</div>
        <div class="solution-wrap flex justify-between">
          <div class="solution-item relative w-[260px] h-[313px] py-[40px] px-[30px] rounded-[13px]">
            <div class="solution-item-text absolute w-[200px]">
              <div class="text-[16px] text-center font-bold-600 mb-[15px]">精细化任务管理</div>
              <div class="text-[15px] leading-[28px]">Yakit的项目管理功能能够将复杂的安全任务细分为可管理的单元，每个任务都有明确的目标和时间表，确保整个测试过程的有序和透明。
              </div>
            </div>
            <NuxtImg class="absolute right-[0px] bottom-[0px] w-[177px]" src="/Images/lightBulb.png" />
          </div>
          <div class="solution-item relative w-[260px] h-[313px] py-[40px] px-[30px] rounded-[13px]">
            <div class="solution-item-text absolute w-[200px]">
              <div class="text-[16px] text-center font-bold-600 mb-[15px]">实时数据共享与协作</div>
              <div class="text-[15px] leading-[28px]">通过Yakit平台，安全团队能够实时共享测试数据和进度，即时协作解决问题，显著提升了团队协作的效率。</div>
            </div>
            <NuxtImg class="absolute right-[0px] bottom-[0px] w-[177px]" src="/Images/lightBulb.png" />
          </div>
          <div class="solution-item relative w-[260px] h-[313px] py-[40px] px-[30px] rounded-[13px]">
            <div class="solution-item-text absolute w-[200px]">
              <div class="text-[16px] text-center font-bold-600 mb-[15px]">安全数据管理</div>
              <div class="text-[15px] leading-[28px]">
                所有测试生成的数据都安全地上传并存储在Yakit服务端，采用先进的加密技术保证数据安全，同时支持深度分析和可视化展示，帮助团队深入理解安全状况。</div>
            </div>
            <NuxtImg class="absolute right-[0px] bottom-[0px] w-[177px]" src="/Images/lightBulb.png" />
          </div>
          <div class="solution-item relative w-[260px] h-[313px] py-[40px] px-[30px] rounded-[13px]">
            <div class="solution-item-text absolute w-[200px]">
              <div class="text-[16px] text-center font-bold-600 mb-[15px]">高效率的工具集成</div>
              <div class="text-[15px] leading-[28px]">Yakit集成了多种渗透测试工具和协作工具，确保团队可以在一个平台上完成从数据收集、漏洞扫描到结果报告的所有工作，大幅提升了测试效率。
              </div>
            </div>
            <NuxtImg class="absolute right-[0px] bottom-[0px] w-[177px]" src="/Images/lightBulb.png" />
          </div>
        </div>
        <div class="text-center mb-[70px]">
          <span
            class="inline-block rounded-[43px] bg-[#0070FF] color-[#fff] py-[6px] px-[28px] h-[40px] text-[18px] leading-[26px] text-center mt-[125px]">
            成果
          </span>
        </div>
        <div class="achievement-wrap flex justify-between">
          <div class="achievement-item relative w-[250px] h-[232px] py-[40px] px-[30px] rounded-[13px]">
            <div
              class="achievement-item-text absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] color-[#0073F1] w-[180px]">
              <div class="text-[16px] text-center mb-[10px]">企业渗透测试流程得到了</div>
              <div class="text-[25px] text-center font-bold-600">显著优化
              </div>
            </div>
            <NuxtImg class="absolute right-[0px] bottom-[0px] w-[138px]" src="/Images/awardCertificate.png" />
          </div>
          <div class="achievement-item relative w-[250px] h-[232px] py-[40px] px-[30px] rounded-[13px]">
            <div
              class="achievement-item-text absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] color-[#0073F1] w-[155px]">
              <div class="text-[16px] text-center mb-[10px]">团队协作</div>
              <div class="text-[25px] text-center font-bold-600">更加紧密高效
              </div>
            </div>
            <NuxtImg class="absolute right-[0px] bottom-[0px] w-[138px]" src="/Images/awardCertificate.png" />
          </div>
          <div class="achievement-item relative w-[250px] h-[232px] py-[40px] px-[30px] rounded-[13px]">
            <div
              class="achievement-item-text absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] color-[#0073F1] w-[175px]">
              <div class="text-[16px] text-center mb-[10px]">数据管理</div>
              <div class="text-[25px] text-center font-bold-600">更加安全可靠
              </div>
            </div>
            <NuxtImg class="absolute right-[0px] bottom-[0px] w-[138px]" src="/Images/awardCertificate.png" />
          </div>
          <div class="achievement-item relative w-[250px] h-[232px] py-[40px] px-[30px] rounded-[13px]">
            <div
              class="achievement-item-text absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] color-[#0073F1] w-[161px]">
              <div class="text-[16px] text-center mb-[10px]">测试结果的准确性和 深度都有了</div>
              <div class="text-[25px] text-center font-bold-600">大幅度提升
              </div>
            </div>
            <NuxtImg class="absolute right-[0px] bottom-[0px] w-[138px]" src="/Images/awardCertificate.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.yakit-banner-cont {
  z-index: 999;
}

.solution-wrap {
  .solution-item {
    background: linear-gradient(327deg, #F2F2F2 39.44%, #FFF 101.57%);

    &-text {
      z-index: 1000;
    }
  }
}

.achievement-wrap {
  .achievement-item {
    background: linear-gradient(327deg, #E1EEFF 30.32%, #FFF 94.77%);

    &-text {
      z-index: 1000;
    }
  }
}
</style>
