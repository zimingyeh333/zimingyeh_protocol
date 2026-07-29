import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://zimingyeh333.github.io',
  base: '/zimingyeh_protocol',
  integrations: [
    starlight({
      title: 'Zimingyeh Protocol',
      description: 'A web prototype for the Zimingyeh Protocol knowledge base.',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN'
        }
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/zimingyeh333/zimingyeh_protocol'
        }
      ],
      sidebar: [
        {
          label: '开始',
          items: [
            { label: '首页', slug: 'index' },
            { label: '使用说明', slug: 'guide/结构' }
          ]
        },
        {
          label: '实验 Protocol',
          items: [{ label: '实验 Protocol 入口', slug: 'protocols' }]
        },
        {
          label: '试剂耗材工具',
          items: [{ label: '试剂耗材工具入口', slug: 'materials' }]
        },
        {
          label: '实验室安全',
          items: [{ label: '实验室安全入口', slug: 'safety' }]
        },
        {
          label: '番外知识',
          items: [{ label: '番外知识入口', slug: 'extras' }]
        },
        {
          label: '全部索引',
          items: [{ label: '全部索引', slug: 'all-index' }]
        },
        {
          label: '建设计划',
          items: [{ label: '建设计划', slug: 'build-plan' }]
        }
      ],
      customCss: ['./src/styles/custom.css']
    })
  ]
});
