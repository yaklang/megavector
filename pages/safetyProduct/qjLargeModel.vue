<script setup>
const { data: version, refresh } = useFetch('https://chatcs.oss-rg-china-mainland.aliyuncs.com/chatcs/latest/version.txt', {
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
  },
  key: "latest-version", // 让 Nuxt 识别数据，不会重复缓存
  retry: 3, // 失败自动重试 3 次
})
// 组件挂载后主动刷新数据（确保客户端拿到最新数据）
onMounted(() => {
  refresh()
})
</script>

<template>
  <div class="mt-[86px]">
    <!-- 万径千机 banner -->
    <div class="relative h-[452px] bg-[#1D83FF]">
      <div class="bottom-left-bg absolute left-[0] top-[0]">
        <NuxtImg src="/Images/light-bg-left.png" class="h-[452px]" />
      </div>
      <div class="bottom-right-bg absolute right-[0] top-[0]">
        <NuxtImg src="/Images/light-bg-right.png" class="h-[452px]" />
      </div>
      <div class="wjaq-container mx-auto h-[100%] flex flex-col justify-center items-center">
        <div class="text-[52px] color-[#fff]"><span class="font-bold-600">万径千机（SecMate）</span>新一代网络安全高级AI智能体</div>
        <div class="text-[18px] mt-[20px] color-[#fff]">
          具备自主规划、动态决策、工具调度、全程自主四大优势，能够7X24小时自主完成复杂网络安全任务，大幅提升人工效率</div>
        <div class="mt-[60px] flex justify-between gap-[150px]">
          <a :href="`https://chatcs.oss-rg-china-mainland.aliyuncs.com/chatcs/${version?.trim()}/secmate-darwin-arm64-${version?.trim()}.zip`"
            download>
            <div class="rounded-[43px] bg-[#000] color-[#fff] py-[10px] px-[30px]">
              <div class="flex items-center gap-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px"
                  height="32px" viewBox="0 0 32 32" version="1.1">
                  <defs>
                    <polygon id="path-1" points="0 0 32 0 32 32 0 32"></polygon>
                  </defs>
                  <g id="Yak-官网" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="官网首页配图" transform="translate(-174.000000, -68.000000)">
                      <g id="编组-77" transform="translate(158.000000, 52.000000)">
                        <g id="icon/面性/常用logo" transform="translate(16.000000, 16.000000)">
                          <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                          </mask>
                          <g id="Clip-2"></g>
                          <path
                            d="M20.7626978,4.13636364 C19.5562887,4.18436364 18.083425,4.93 17.2124705,5.95013636 C16.4401068,6.83704545 15.7582887,8.26463636 15.9500159,9.64422727 C17.2870614,9.72413636 18.6666523,8.94904545 19.5082887,7.96095455 C20.3525159,6.93822727 20.9091523,5.53204545 20.7626978,4.13636364 Z M24.099925,25.0250909 C23.0958796,26.4739545 22.0570614,27.9334545 20.4164705,27.9600455 C18.8024705,27.9893636 18.2885159,27.0065909 16.445425,27.0065909 C14.6076523,27.0065909 14.0297432,27.9360455 12.5062887,27.9893636 C10.9296523,28.0533182 9.71778867,26.4072727 8.71101594,24.9638636 C6.64960685,22.0100909 5.06492503,16.5929091 7.19028867,12.9653636 C8.23701594,11.149 10.119925,9.99577273 12.1653796,9.96113636 C13.7101068,9.93181818 15.1776523,10.9998182 16.1151523,10.9998182 C17.0793796,10.9998182 18.8557887,9.71077273 20.7280614,9.9025 C21.5111978,9.93454545 23.708425,10.2274545 25.1226523,12.2595455 C25.013425,12.3341364 22.4965614,13.807 22.5258796,16.8033182 C22.5658341,20.4228182 25.7271523,21.6079545 25.7617887,21.6213182 C25.7326068,21.7118636 25.2584705,23.3445455 24.099925,25.0250909 Z"
                            id="Fill-1" fill="#fff" mask="url(#mask-2)"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <div>
                  <span class="text-[18px]">macOS</span>
                  <br>
                  <span class="text-[12px]">版本：{{ version }}</span>
                </div>
              </div>
            </div>
          </a>
          <a :href="`https://chatcs.oss-rg-china-mainland.aliyuncs.com/chatcs/${version?.trim()}/secmate-windows-amd64-${version?.trim()}.zip`"
            download>
            <div class="rounded-[43px] bg-[#000] color-[#fff] py-[10px] px-[30px]">
              <span class="flex items-center gap-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px"
                  height="32px" viewBox="0 0 32 32" version="1.1">
                  <defs>
                    <polygon id="path-1" points="0 0 32 0 32 32 0 32" />
                  </defs>
                  <g id="Yak-官网" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="官网首页配图" transform="translate(-1056.000000, -68.000000)">
                      <g id="编组-77" transform="translate(158.000000, 52.000000)">
                        <g id="组件/桌面端备份-3" transform="translate(882.000000, 0.000000)">
                          <g id="icon/面性/常用logo" transform="translate(16.000000, 16.000000)">
                            <mask id="mask-2" fill="white">
                              <use xlinkHref="#path-1" />
                            </mask>
                            <g id="Clip-2" />
                            <polygon id="路径" fill="#fff" mask="url(#mask-2)"
                              points="26 6 16.2765446 7.56653675 16.2765446 14.7165336 26 14.7165336" />
                            <polygon id="路径" fill="#fff" mask="url(#mask-2)"
                              points="6 9.15049707 6 14.7141577 14.2197695 14.7141577 14.2197695 7.82630625" />
                            <polygon id="路径" fill="#fff" mask="url(#mask-2)"
                              points="16.2765446 16.2882183 16.2765446 23.4607866 26 25 26 16.2882183" />
                            <polygon id="路径" fill="#fff" mask="url(#mask-2)"
                              points="6 16.2882183 6 21.9013776 14.2197695 23.202997 14.2197695 16.2882183" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
                <div>
                  <span class="text-[18px]">Windows</span>
                  <br>
                  <span class="text-[12px]">版本：{{ version }}</span>
                </div>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="wjaq-container mx-auto overflow-hidden">
      <!-- 关键特性 -->
      <div class="mt-[300px]">
        <div class="relative py-[15px] px-[40px] mb-[120px] mx-auto w-[250px]">
          <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
          </svg>
          <div class="text-[40px] text-center font-bold-600">
            关键特性
          </div>
          <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21" fill="none">
            <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
          </svg>
        </div>
        <div class="flex justify-between mb-[100px]">
          <div class="w-[28%]">
            <div class="font-bold-600 mb-[25px] text-center text-[25px]">动态强化学习</div>
            <div class="color-[#868686] mb-[100px] leading-[30px]">
              千机助手通过对接入模型进行动态强化学习及本地任务执行经验积累，增强了模型在复杂任务场景中的决策稳定性和准确率。</div>
            <div class="text-center">
              <NuxtImg src="/Images/qj_dtqhxx.png" class="w-[260px]" />
            </div>
          </div>
          <div class="w-[28%]">
            <div class="font-bold-600 mb-[25px] text-center text-[25px]">指令优化与丰富</div>
            <div class="color-[#868686] mb-[122px] leading-[30px]">通过图谱背景知识，千机能对用户原始指令进行精准整理和优化，使指令描述更准确、更丰富。</div>
            <div class="text-center">
              <NuxtImg src="/Images/qj_zlyhyff.png" class="w-[250px]" />
            </div>
          </div>
          <div class="w-[28%]">
            <div class="font-bold-600 mb-[25px] text-center text-[25px]">多接口自主交互决策</div>
            <div class="color-[#868686] mb-[70px] leading-[30px]">干机支持标准MCP服务、WEB
              API/命令行执行等多种第三方工具接入方式，极大扩展了模型的任务场景，使其具备了任务决策到执行的完整闭环。
            </div>
            <div class="text-center">
              <NuxtImg src="/Images/qj_djkzzjhjc.png" class="w-[300px]" />
            </div>
          </div>
        </div>
      </div>
      <div class="qj_cont bg-center bg-contain bg-no-repeat">
        <!-- 运行原理 -->
        <div class="mt-[300px] text-center">
          <div class="relative py-[15px] px-[40px] mb-[120px] mx-auto w-[250px]">
            <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
            </svg>
            <div class="text-[40px] text-center font-bold-600">
              运行原理
            </div>
            <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
            </svg>
          </div>
          <NuxtImg src="/Images/yunxingyuanli.png" class="w-[1000px]" />
        </div>
        <!-- 数据流程 -->
        <div class="mt-[200px] text-center">
          <div class="relative py-[15px] px-[40px] mb-[120px] mx-auto w-[250px]">
            <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
            </svg>
            <div class="text-[40px] text-center font-bold-600">
              数据流程
            </div>
            <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
            </svg>
          </div>
          <NuxtImg src="/Images/sjlc.png" class="w-[1000px]" />
        </div>
        <!-- 功能亮点 -->
        <div class="mt-[200px]">
          <div class="relative py-[15px] px-[40px] mb-[120px] mx-auto w-[250px]">
            <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
            </svg>
            <div class="text-[40px] text-center font-bold-600">
              功能亮点
            </div>
            <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
            </svg>
          </div>
          <div class="flex justify-between items-center px-[10px] mb-[100px]">
            <div data-aos="fade-right">
              <NuxtImg src="/Images/qj_ldqb.png" class="h-[421px]" />
            </div>
            <div data-aos="fade-left" class="w-[520px]">
              <div class="text-[32px] font-bold-600 mb-[20px]">智能任务规划引擎</div>
              <div class="text-[16px] color-[#646363] mb-[37px] leading-[30px] inline-block text-justify">
                系统内置智能解析引擎，可对复杂任务进行多层级目标拆解与路径建模。基于任务拓扑关系自动生成最优执行序列，支持Gantt式进度管理及里程碑预警机制，确保全流程执行可控性。通过动态工作分解结构（WBS）技术，实现任务颗粒度与执行资源的精准匹配。
              </div>
              <div class="text-[32px] font-bold-600 mb-[20px]">全栈式工具链协同</div>
              <div class="text-[16px] color-[#646363] mb-[20px] leading-[30px] inline-block text-justify">
                提供开放式工具集成框架，支持API/MCP无缝接入搜索引擎、数据分析平台及自动化开发环境。特别针对网络安全领域预置行业知识库，包含Nmap、Metasploit等200+安全工具智能调度策略，支持参数自优化与工具链组合编排。开发者可通过插件架构快速扩展自定义工具模块。
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center px-[10px]">
            <div data-aos="fade-right" class="w-[520px]">
              <div class="text-[32px] font-bold-600 mb-[20px]">自适应执行中枢</div>
              <div class="text-[16px] color-[#646363] mb-[37px] leading-[30px] inline-block text-justify">
                采用实时监控-评估-决策（OODA）闭环架构，具备异常检测与智能纠偏能力。执行过程内置验证节点，当出现依赖缺失（如Python库）、逻辑错误或环境异常时，系统可自主完成环境修复、方案迭代等自适应操作，确保任务持续演进。
              </div>
              <div class="text-[32px] font-bold-600 mb-[20px]">双工协作控制台</div>
              <div class="text-[16px] color-[#646363] mb-[20px] leading-[30px] inline-block text-justify">
                创新性人机协同架构支持全流程透明可控，专家用户可通过指令注入、策略覆写、沙盒调试等多种介入模式实时引导任务进程。系统配备意图理解引擎，可精准解析自然语言指令，实现策略层与执行层的双向交互验证。
              </div>
            </div>
            <div data-aos="fade-left">
              <NuxtImg src="/Images/qj_fzjc.png" class="w-[400px]" />
            </div>
          </div>
        </div>
        <!-- 场景应用演示 -->
        <div class="mt-[200px]">
          <div class="relative py-[15px] px-[40px] mb-[120px] mx-auto w-[340px]">
            <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
            </svg>
            <div class="text-[40px] text-center font-bold-600">
              场景应用演示
            </div>
            <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
            </svg>
          </div>
          <div class="text-[20px] text-center font-bold-600">实战推演面对攻击IP时，「万径千机」从攻击溯源到自动封禁的全过程</div>
          <div class="mt-[40px] text-center">
            <video controls width="1040px">
              <source src="/Videos/qj_video.mp4" type="video/mp4" />
              您的浏览器不支持 video 标签。
            </video>
          </div>
        </div>
        <!-- POC代码生成 -->
        <div class="mt-[200px]">
          <div class="relative py-[15px] px-[40px] mb-[80px] mx-auto w-[350px]">
            <div class="text-[32px] text-center font-bold-600">
              POC代码生成
            </div>
          </div>
          <NuxtImg src="/Images/qj_rectangle.png" class="w-[1150px] ml-[60px]" />
        </div>
        <!-- 大模型赋能产业发展 -->
        <div class="mb-[300px] mt-[200px] mb-[160px]">
          <div class="relative py-[15px] px-[40px] mb-[120px] mx-auto w-[450px]">
            <svg class="absolute left-[0] top-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M21 3H3V21" stroke="#0070FF" stroke-width="6" />
            </svg>
            <div class="text-[40px] text-center font-bold-600">
              大模型赋能产业发展
            </div>
            <svg class="absolute right-[0] bottom-[0] w-[21px] h-[21px]" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21" fill="none">
              <path d="M4.47035e-07 18L18 18L18 4.47035e-07" stroke="#0070FF" stroke-width="6" />
            </svg>
          </div>
          <div class="relative">
            <div data-aos="fade-down" class="w-[260px] mx-auto">
              <div class="text-[18px] mb-[10px] font-bold-600">增强安全保障系数</div>
              <div class="text-[16px] color-[#646363] leading-[30px]">千机具备原子级代码分析能力，对各类未知数据样本都具备一定的研判效果。</div>
            </div>
            <div class="flex justify-between items-center mt-[25px] mb-[50px]">
              <div data-aos="fade-left">
                <div class="w-[260px] mb-[75px]">
                  <div class="text-[18px] mb-[10px] font-bold-600">提高数据运营效率</div>
                  <div class="text-[16px] color-[#646363] leading-[30px]">通过大模型对多源异构的安全运营数据进行语义归一化处理，实现数据的上下文标准统一流转。
                  </div>
                </div>
                <div class="w-[260px]">
                  <div class="text-[18px] mb-[10px] font-bold-600">降低人力资源成本</div>
                  <div class="text-[16px] color-[#646363] leading-[30px]">利用领域大模型的专业知识处理能力充当AI教练，降低从业人员的培训成本和运营成本。</div>
                </div>
              </div>
              <div>
                <NuxtImg src="/Images/qj_cyfn.png" class="w-[400px]" />
              </div>
              <div data-aos="fade-right">
                <div class="w-[260px] mb-[75px]">
                  <div class="text-[18px] mb-[10px] font-bold-600">融合安全防护设备</div>
                  <div class="text-[16px] color-[#646363] leading-[30px]">
                    结合思维链技术，千机能够以极低成本将企业各类安全防护设备资源进行融合，使其成为一个完整的安全运营系统。</div>
                </div>
                <div class="w-[260px]">
                  <div class="text-[18px] mb-[10px] font-bold-600">沉淀模型优化场景</div>
                  <div class="text-[16px] color-[#646363] leading-[30px]">
                    经过大量真实业务场景的实践，千机能够根据场景实际需求通过微调与专业知识补充，不断完善自身功能。</div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" class="w-[260px] mx-auto">
              <div class="text-[18px] mb-[10px] font-bold-600">提高应急响应效率</div>
              <div class="text-[16px] color-[#646363] leading-[30px]">利用大模型构建应急响应标准流程，并在具体事件处置过程中，使用大模型进行辅助决策。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <MegavectorOnlineConsultation></MegavectorOnlineConsultation>
</template>

<style lang="scss" scoped>
.qj_cont {
  background-image: url("/Images/qj_bg.png");
}
</style>
