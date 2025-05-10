
import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-sm text-black font-medium leading-[19px] hover:opacity-70 transition-opacity"
    >
      {children}
    </a>
  );
};
