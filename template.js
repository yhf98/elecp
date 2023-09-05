module.exports = {
    pkgJSON: (name) => `{
    "name": "${name}",
    "author": "Yao Hengfeng <1921934563@qq.com>",
    "description": "Electron 基于Vue + TS 项目模板",
    "version": "0.0.1",
    "homepage": "blog.aikezc.com",
    "main": "index.js",
    "license": "ISC",
    "scripts": {
        "dev": "vite",
        "build": "vue-tsc --noEmit && vite build",
        "package": "vue-tsc --noEmit && vite build",
        "preview": "vite preview",
        "electron:generate-icons": "electron-icon-builder --input=./release/icons/favicon.png --output=release --flatten",
        "copy:lang": "node ./lang.js"
    },
    "devDependencies": {
        "@electron/rebuild": "^3.2.13",
        "@vitejs/plugin-vue": "^4.3.1",
        "electron": "^25.3.0",
        "electron-builder": "^23.1.0",
        "electron-icon-builder": "^2.0.1",
        "electron-updater": "^5.0.5",
        "pinia": "^2.0.17",
        "sass": "^1.54.0",
        "typescript": "^5.1.6",
        "unplugin-auto-import": "^0.16.6",
        "unplugin-vue-components": "^0.25.1",
        "vite": "^4.3.1",
        "vite-plugin-optimizer": "^1.4.0",
        "vue": "^3.3.4",
        "vue-router": "^4.1.3",
        "vue-tsc": "^1.8.8"
    },
    "dependencies": {
        "@element-plus/icons-vue": "^2.1.0",
        "dp-image-editor": "^1.0.1",
        "electron-store": "^8.1.0",
        "element-plus": "^2.3.9",
        "fs-extra": "^11.1.0",
        "i18next": "^23.4.4",
        "jimp": "^0.22.10",
        "localforage": "^1.10.0",
        "vue-i18n": "^9.2.2"
    }
}
    `
} 