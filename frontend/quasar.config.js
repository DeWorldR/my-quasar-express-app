// Quasar config: https://quasar.dev/quasar-cli-vite/quasar-config-file
import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => {
  return {
    boot: [],
    css: [],
    extras: ['roboto-font', 'material-icons'],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node22',
      },
      // ใช้ hash mode เพื่อให้ Nginx เสิร์ฟด้วยการตั้งค่าเริ่มต้นได้
      vueRouterMode: 'hash',
    },

    devServer: {
      open: true,
    },

    framework: {
      config: {},
      plugins: [],
    },
  }
})
