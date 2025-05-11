
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <Link
      to={href}
      className="text-sm text-black font-medium leading-[19px] hover:opacity-70 transition-opacity"
    >
      {children}
    </Link>
  );
};
