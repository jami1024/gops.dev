export const seo = {
  title: 'Gops | 开发者、游戏运维',
  description: '我叫 Jami，一名游戏运维工程师，专注运维自动化，终身学习者。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://gops.dev'
      : 'http://localhost:3000'
  ),
} as const
