// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://yupzhou.github.io/JPRoots/',
	base: '/JPRoots',
	integrations: [
		starlight({
			title: 'JPRoots',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yupzhou/JPRoots' }],
			description: '日琉语综合知识站',
      		favicon: '/src/assets/logo.png',
			logo: {
					src: '/src/assets/logo.png', // 指向 src/assets
					replacesTitle: false,        // 图文共存
					alt: 'JPRoots LOGO',
				},
			customCss: ['./src/styles/custom.css'],
			head: [
				{
				tag: 'link',
				attrs: {
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
				},
				},
			],
			locales: {
				root: {
				label: '简体中文',
				lang: 'zh-CN',
				},
			},
			defaultLocale: 'zh',
			sidebar: [
				{
					label: '日琉语之道',
					// 默认折叠分组
                    collapsed: true,
					items: [{ autogenerate: { directory: 'road' } }],
				},
				{
					label: '声调系统',
					collapsed: true,
					items: [{ autogenerate: { directory: 'accent' } }],
				},
				{
					label: '固有训读',
					collapsed: true,
					items: [{ autogenerate: { directory: 'kunyomi' } }],
				},
				{
					label: '汉字音读',
					collapsed: true,
					items: [{ autogenerate: { directory: 'onyomi' } }],
				},
				{
					label: '档案空间',
					collapsed: true,
					items: [{ autogenerate: { directory: 'other' } }],
				},
			],
		}),
	],
});
