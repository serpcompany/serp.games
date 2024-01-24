import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Videos',
      links: [
        {
          text: 'YouTube',
          href: 'https://serp.ly/@serpgames/youtube',
          target: '_blank',
        },
      ],
    },
    {
      text: 'Content',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Gaming Chairs',
          href: '/category/gaming-chairs/',
        },
        {
          text: 'Gaming Mice',
          href: '/category/gaming-mouse/',
        },
        {
          text: 'Gaming Mouse Pads',
          href: '/category/mouse-pads/',
        },
        {
          text: 'Gaming Glasses',
          href: '/category/gaming-glasses/',
        },
        {
          text: 'Gaming Desks',
          href: '/category/gaming-desks/',
        },
      ],
    },
   
  ],
  actions: [{ text: 'Subscribe', href: '/subscribe/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Website', href: 'https://serp.games' },
        { text: 'About', href: '/about/' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Newsletter', href: '/subscribe/.' },
        { text: 'Forum', href: '/#' },
        { text: 'Community', href: '/#' },
      ],
    },
    {
      title: 'Links',
      links: [
        { text: 'Medium', href: 'https://medium.com/serpdotgames', target: '_blank' },
        { text: 'Pages', href: 'https://serpgames.pages.dev', target: '_blank' },
        { text: 'Github', href: 'https://serpgames.github.io', target: '_blank' },
        // { text: 'Substack', href: 'https://serpgames.substack.com/', target: '_blank' },
        // { text: 'Hashnode', href: 'https://serpgames.hashnode.dev/', target: '_blank' },
        { text: 'Website', href: 'https://serp.games', target: '_blank' },
      ],
    },
    {
      title: 'Boring Stuff',
      links: [
        { text: 'Privacy Policy', href: '/privacy/' },
        { text: 'Terms & Conditions', href: '/terms/' },
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure/' },
        { text: 'DMCA', href: '/dmca/' },
        { text: 'Archive', href: '/archive/' },
        { text: 'Tags', href: '/tags/' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Free Stuff', href: 'https://stuff.serp.games' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@serpgames/twitter', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://serp.ly/@serpgames/instagram', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://serp.ly/@serpgames/facebook', target: '_blank' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://serp.ly/@serpgames/youtube', target: '_blank' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://serp.ly/@serpgames/linkedin', target: '_blank' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://serp.ly/@serpgames/tiktok', target: '_blank' },
    { ariaLabel: 'Medium', icon: 'tabler:brand-medium', href: 'https://serp.ly/@serpgames/medium', target: '_blank' },
  ],
};
