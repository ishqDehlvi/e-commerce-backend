import Logo from './extensions/bazaar-logo.svg';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: Logo,
    },
    // Replace the favicon
    // head: {
    //   favicon: favicon,
    // },
    // Add a new locale, other than 'en'
    locales: ['fr', 'de'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: Logo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        alternative100: '#f6ecfc',
        alternative200: '#e0c1f4',
        alternative500: '#ac73e6',
        alternative600: '#9736e8',
        alternative700: '#8312d1',
        danger700: '#b72b1a'
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};
