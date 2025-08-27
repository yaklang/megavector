<script setup>
</script>

<template>
  <div class="mt-[86px]">
    <!-- 安全服务 banner -->
    <div class="relative h-[620px] bg-[#F4FAFF]">
      <div class="wjaq-container mx-auto h-[100%] flex items-center justify-between">
        <div class="w-[600px]">
          <div class="text-[52px] mb-[18px]">专业化安全服务与运营</div>
          <div class="text-[18px] leading-[35px]">
            以保障用户业务安全为核心目标，通过专业化安全能力和系统化技术方案，实现安全风险“发现-验证-分析-处置”闭环，提供7 X 24小时常态化安全托管服务，构建全方位安全运营体系，将风险持续降低，提升安全运营质量。
          </div>
        </div>
        <div class="securityService-banner-img">
          <NuxtImg src="/Images/security-service.png" class="h-[520px]" />
        </div>
      </div>
    </div>

    <div class="securityService-cont wjaq-container min-h-[2157px] mx-auto overflow-hidden">
      <!-- 渗透测试 -->
      <div class="flex justify-between items-center px-[10px] mt-[300px]">
        <div data-aos="fade-right">
          <NuxtImg src="/Images/securityService-stcs.png" class="h-[320px]" />
        </div>
        <div data-aos="fade-left" class="w-[650px]">
          <div class="text-[32px] font-bold-600 mb-[16px]">渗透测试</div>
          <div class="text-[18px] mb-[38px] leading-[35px]">
            从攻击者视角模拟最真实的攻击，帮助企业发现系统安全漏洞并协助修复。万径安全技术团队拥有丰富的安全测试经验，了解不同场景下的攻防思路，帮助企业快速定位问题所在，可根据业务实际应用场景定制不同测试目标和内容，严格遵守授权许可范围，不影响业务的正常运行。
          </div>
          <div class="color-[#0070FF] text-[24px] mt-[30px] mb-[20px] font-bold-600">检测内容</div>
          <div class="px-[100px]">
            <div class="flex justify-between text-[16px] mb-[22px]">
              <div class="py-[10px] px-[22px] bg-[#DEEEFD] color-[#0070FF] rounded-[35px] min-w-[140px] text-center">
                Web服务
              </div>
              <div class="py-[10px] px-[22px] bg-[#DEEEFD] color-[#0070FF] rounded-[35px] min-w-[140px] text-center">
                Web应用
              </div>
              <div class="py-[10px] px-[22px] bg-[#DEEEFD] color-[#0070FF] rounded-[35px] min-w-[140px] text-center">
                外网检测
              </div>
            </div>
            <div class="flex justify-between text-[16px]">
              <div class="py-[10px] px-[22px] bg-[#DEEEFD] color-[#0070FF] rounded-[35px] min-w-[140px] text-center">
                内网检测
              </div>
              <div class="py-[10px] px-[22px] bg-[#DEEEFD] color-[#0070FF] rounded-[35px] min-w-[140px] text-center">移动端
              </div>
              <div class="py-[10px] px-[22px] bg-[#DEEEFD] color-[#0070FF] rounded-[35px] min-w-[140px] text-center">
                IOT设备
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 应急响应 -->
      <div class="flex justify-between items-center px-[10px] mt-[195px]">
        <div data-aos="fade-right" class="w-[650px]">
          <div class="text-[32px] font-bold-600 mb-[16px]">应急响应</div>
          <div class="text-[18px] mb-[38px] leading-[35px]">
            7x24小时在线服务，快速响应。第一时间为企业级用户解决安全突发事件，追踪溯源，最大程度的降低安全事件对企业造成的损失，提高企业的风险应对能力。
            为企业提供常规应急响应支持服务的同时，还会对企业进行全面的内网渗透测试，并提出安全修复建议，降低安全事件发生的概率。</div>
        </div>
        <div data-aos="fade-left">
          <NuxtImg src="/Images/securityService-xy.png" class="h-[250px]" />
        </div>
      </div>
      <!-- 代码审计 -->
      <div class="flex justify-between items-center px-[10px] mt-[195px]">
        <div data-aos="fade-right">
          <NuxtImg src="/Images/securityService-codesj.png" class="h-[250px]" />
        </div>
        <div data-aos="fade-left" class="w-[600px]">
          <div class="text-[32px] font-bold-600 mb-[16px]">代码审计</div>
          <div class="text-[16px] mb-[38px] leading-[35px] font-bold-600">
            分析系统的完整源代码，挖掘代码在架构和编码上的安全缺陷，解决系统安全隐患。</div>
          <div class="mb-[25px]">
            <div class="text-[16px] color-[#0070FF]">
              <div class="flex items-center font-bold-600">
                <svg class="w-[22px] h-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23" fill="none">
                  <path
                    d="M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C14.6653 1.5 17.87 3.47192 19.6111 6.41274L11 15.0239L6.36504 10.3889"
                    stroke="#0070FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="ml-[10px] text-[18px]">100%覆盖率</span>
              </div>
            </div>
            <div class="text-[15px] color-[#5E5C5C] mt-[10px] leading-[35px]">
              对整个信息系统的所有源代码进行检查，发现威胁点并加以验证，以此明确整体系统中的安全隐患点。
            </div>
          </div>
          <div class="mb-[25px]">
            <div class="text-[16px] color-[#0070FF]">
              <div class="flex items-center font-bold-600">
                <svg class="w-[22px] h-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23" fill="none">
                  <path
                    d="M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C14.6653 1.5 17.87 3.47192 19.6111 6.41274L11 15.0239L6.36504 10.3889"
                    stroke="#0070FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="ml-[10px] text-[18px]">提高开发人员安全技能</span>
              </div>
            </div>
            <div class="text-[15px] color-[#5E5C5C] mt-[10px] leading-[35px]">通过专业的代码审计报告，为用户开发人员提供安全问题的解决方案，完善代码安全开发规范。
            </div>
          </div>
          <div>
            <div class="text-[16px] color-[#0070FF]">
              <div class="flex items-center font-bold-600">
                <svg class="w-[22px] h-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 23" fill="none">
                  <path
                    d="M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C14.6653 1.5 17.87 3.47192 19.6111 6.41274L11 15.0239L6.36504 10.3889"
                    stroke="#0070FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="ml-[10px] text-[18px]">提高安全意识</span>
              </div>
            </div>
            <div class="text-[15px] color-[#5E5C5C] mt-[10px] leading-[35px]">
              代码审计服务可有效帮助开发人员避免任何一处小的缺陷，从而降低整体风险，弥补开发人员安全知识不足问题，了解各种软件安全漏洞的成因和修复方法。</div>
          </div>
        </div>
      </div>
      <!-- 安全培训服务 -->
      <div class="flex justify-between items-center px-[10px] mt-[195px]">
        <div data-aos="fade-right" class="w-[650px]">
          <div class="text-[32px] font-bold-600 mb-[16px]">安全培训服务</div>
          <div class="text-[16px] mb-[38px] leading-[35px]">
            行业定制化培训、产品培训、管理培训、技术培训。根据企业用户所在行业，有针对性的对安全从业人员提供渗透测试攻防思路、安全运维规则配置、安全风险评估、安全合规等方面的专业培训。万径安全团队讲师从攻到防、从理论到实践，都拥有丰富的安全从业经验以及多个国际、国内权威信息安全资质认证，包含：国际CISSP、OSCP、CEH资格认证、CISP、CISAW国内资质认证以及CCIE-R&S、CCIE-security、PMP等专业认证。
          </div>
        </div>
        <div data-aos="fade-left">
          <NuxtImg src="/Images/securityService-fwpx.png" class="h-[224px]" />
        </div>
      </div>
      <!-- 安全评估服务 -->
      <div class="flex justify-between items-center px-[10px] mt-[195px]">
        <div data-aos="fade-right">
          <NuxtImg src="/Images/securityService-aqpgfw.png" class="h-[230px]" />
        </div>
        <div data-aos="fade-left" class="w-[650px]">
          <div class="text-[32px] font-bold-600 mb-[16px]">安全评估服务</div>
          <div class="text-[16px] mb-[38px] leading-[35px]">
            通过漏洞扫描，发现网络设备、主机等的安全弱点。上线安全评估则是对应用系统在生产运行前的全面安全评价，确保物理环境到系统数据的全面安全。弱口令安全检查则是利用工具对客户系统的各项组件进行密码强度检测，预防潜在风险；风险评估则是全面考量信息资产面临的威胁、弱点及可能的影响，从而准确评估风险，为安全防护提供有力支撑。
          </div>
        </div>
      </div>
      <!-- 重大活动保障服务 -->
      <div class="flex justify-between items-center px-[10px] mt-[195px] mb-[300px]">
        <div data-aos="fade-right" class="w-[650px]">
          <div class="text-[32px] font-bold-600 mb-[16px]">重大活动保障服务</div>
          <div class="text-[16px] leading-[35px]">
            通过现场值守与专家远程协同，对活动系统展开全面风险评估与排除。在奥运会、国庆等重大活动期间，我们多次受邀提供安全保障服务，并获得客户一致好评，保障内容涵盖特殊敏感时期防护、企业业务活动监控、网络安全攻防演练等多个场景，确保企业资产安全。在重大活动保障中，提供从网站安全监控到整改复检的全方位服务，并通过现场值守、应急响应等措施，确保活动安全顺利进行。
          </div>
          <div class="text-[14px] leading-[35px] color-[#5E5C5C]">
            包含：特殊敏感时期防护、企业业务活动监控、网络安全攻防演练、重大节假日安全防护
          </div>
        </div>
        <div data-aos="fade-left">
          <NuxtImg src="/Images/securityService-zdhdbz.png" class="h-[250px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 1366px) {
  .securityService-banner-img {
    margin-right: 0;
  }
}
</style>
