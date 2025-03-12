import clsx from 'clsx';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], display: 'swap' });

/**
 * Shared layout configurations
 *
 * you can customize layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <span className={clsx(oswald.className, 'text-2xl')}>CRAIG SCOTT</span>
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
