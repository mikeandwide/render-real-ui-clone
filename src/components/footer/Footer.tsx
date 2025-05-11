
import React from 'react';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const infoLinks = [
    [
      { text: 'Follow your order', href: '/order-tracking' },
      { text: 'Shipping', href: '/shipping' },
      { text: 'Returns', href: '/returns' },
    ],
    [
      { text: 'Contact Us', href: '/contact' },
      { text: 'Product Information', href: '/product-info' },
    ],
  ];

  const companyLinks = [
    [
      { text: 'History', href: '/history' },
      { text: 'World of M& W', href: '/world' },
      { text: 'Careers', href: '/careers' },
    ],
    [
      { text: 'Legal Area', href: '/legal' },
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Site map', href: '/sitemap' },
    ],
  ];

  return (
    <footer className="flex flex-col gap-[43px]">
      <div className="flex justify-between max-md:flex-col max-md:gap-10">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5">
            <h3 className="text-sm text-black font-medium leading-[19px]">
              SHIPPING TO
            </h3>
            <p className="text-sm text-black font-medium leading-[19px] opacity-50">
              India
            </p>
          </div>
          <h3 className="text-sm text-black font-medium leading-[19px]">
            FOLLOW US
          </h3>
        </div>
        
        <FooterSection title="INFO" links={infoLinks} />
        <FooterSection title="COMPANY" links={companyLinks} />
      </div>
      
      <div className="w-full h-px bg-black opacity-50 mt-[42px]" />
      
      <Link to="/">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7023b2c9a6e1635a201356672af3d8e9c8e09f7?placeholderIfAbsent=true"
          alt="Mike & Wide Logo"
          className="w-[92px] h-[47px] object-contain"
        />
      </Link>
    </footer>
  );
};
