// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'X',
    url: 'https://x.com/AmrilNadapdap',
  },
  {
    label: 'Telegram',
    url: 'https://t.me/+6285186675341',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/RifaAmrilSahputra',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rifaamrilsahputra/',
  },
];

const resourceLinks = [
  {
    label: 'Pillarstack',
    url: 'https://www.pillarstack.com',
  },
  {
    label: 'Figma Template',
    url: 'https://www.figma.com/community/file/1328038510191576951/project-starter-template',
  },
  {
    label: 'Ebraheem Alhetari',
    url: 'https://github.com/Hetari/portfolio',
  },
  {
    label:'Amril Nadapdap',
    url:'https://github.com/RifaAmrilSahputra/Portfolio-ndp',
  },
];

const heroText =
  'Fresh Graduate Informatics Engineering passionate about AI, Mobile Development, and Full Stack Development.';

const locationPlace = `2°58' N 99°37' E`;
const locationCountry = 'Asahan, Indonesia';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'brhoom/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
