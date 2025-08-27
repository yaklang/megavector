// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // head
    head: {
      title: "万径安全",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          name: "keywords",
          content:
            "万径安全，四维创智，万径千机，网络安全领域语言，Yak，网络安全领域大模型，知识增强，SecMate，AI+知识图谱，动化渗透工具，攻防一体，自动化渗透，智能渗透，智能渗透测试机器人，自动化渗透测试机器人，人工智能知识图谱，自动化渗透测试，AI知识图谱",
        },
        {
          name: "description",
          content:
            "公司以“AI+YAK”为企业核心战略，专注于网络安全基础设施和智能化技术研究，打造了首款网络安全语言YAK和网络安全高级AI智能体万径千机两大核心。",
        },
      ],
    },
  },
  css: ["@/assets/scss/normalize.scss"],
  typescript: {
    strict: true,
    shim: false,
  },
  // build modules
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@element-plus/nuxt",
    "@nuxt/image",
  ],
  image: {
    quality: 80,
  },
  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/index.scss" as *;', // 将 @/assets/scss/index.scss 文件中定义的所有变量、混合（mixin）、函数等导入到每个 SCSS 文件中
        },
      },
    },
  },
  elementPlus: {
    importStyle: "scss",
  },
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: ["last 5 version", ">1%", "ie >=8"],
      },
    },
  },
});
