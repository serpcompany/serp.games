// src/navigation.js
import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Posts',
      links: [
        {
          text: 'Gaming Mouses',
          href: getPermalink('/category/gaming-mouse/'),
        },
        {
          text: 'Gaming Chairs',
          href: getPermalink('/category/gaming-chairs/'),
        },
        { 
          text: 'Mouse Pads',
          href: getPermalink('/category/mouse-pads/'),
        },
        {
          text: 'Gaming Glasses',
          href: getPermalink('/category/gaming-glasses/'),
        },
        {
          text: 'Gaming Desks',
          href: getPermalink('/category/gaming-desks/'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Links',
      links: [{ text: 'Website', href: 'https://serp.games' }],
    },
    
    {
      title: 'Boring Stuff',
      links: [
        { text: 'Privacy Policy', href: '/privacy/' },
        { text: 'Terms & Conditions', href: '/terms/' },
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
        { text: 'DMCA', href: '/dmca/' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@serpgames/twitter', target: '_blank' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://serp.ly/@serpgames/instagram',
      target: '_blank',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://serp.ly/@serpgames/facebook',
      target: '_blank',
    },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://serp.ly/@serpgames/youtube',
      target: '_blank',
    },
    {
      ariaLabel: 'Linkedin',
      icon: 'tabler:brand-linkedin',
      href: 'https://serp.ly/@serpgames/linkedin',
      target: '_blank',
    },
    {
      ariaLabel: 'TikTok',
      icon: 'tabler:brand-tiktok',
      href: 'https://serp.ly/@serpgames/tiktok',
      target: '_blank',
    },
  ],
};
