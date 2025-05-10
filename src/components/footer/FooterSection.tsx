
import React from 'react';
import { FooterLink } from './FooterLink';

interface FooterSectionProps {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-[35px]">
      <h3 className="text-sm text-black font-medium leading-[19px]">{title}</h3>
      <div className="flex gap-24 max-sm:flex-col max-sm:gap-7">
        {links.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-7">
            {column.map((link, linkIndex) => (
              <FooterLink key={linkIndex} href={link.href}>
                {link.text}
              </FooterLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
