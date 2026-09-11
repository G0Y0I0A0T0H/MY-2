import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // صور المنتجات المرفوعة تُخزَّن محلياً في /public/uploads،
    // وهذا يسمح أيضاً بلصق روابط صور خارجية من لوحة صاحب المتجر.
    // في الإنتاج يُفضَّل حصر النطاقات المسموحة بدل "**".
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    // مطلوب لعرض صور الـ placeholder المولَّدة من /api/placeholder
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    serverActions: {
      // يسمح باستدعاء الـ Server Actions من نطاقات المتاجر الفرعية
      allowedOrigins: ['*'],
      bodySizeLimit: '4mb',
    },
  },
};

export default nextConfig;
