import React, { PropsWithChildren, ReactNode } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

type SiteLayoutProps = PropsWithChildren<{
  hero?: ReactNode;
  showTopicNav?: boolean;
}>;

export const SiteLayout: React.FC<SiteLayoutProps> = ({
  children,
  hero,
  showTopicNav,
}) => {
  return (
    <>
      <SiteHeader showTopicNav={showTopicNav} />
      <div className="min-h-[60vh]">
        {hero}
        <main className="container mx-auto flex flex-col flex-wrap py-6">
          {children}
        </main>
      </div>
      <SiteFooter />
    </>
  );
};
