interface Links {
    name: string
    url: string
}

interface configInterface {
    email: string
    socialMedia: Links[]
    navLinks: Links[]
}

export const config: configInterface = {
  email: 'karthik99th.tnk@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Yggdrasil09',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/bchiang7',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bchiang7',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Blog',
      url: '/blog',
    },
    {
      name: 'Experience',
      url: '/experience',
    },
    {
      name: 'Work',
      url: '/work',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
    {
      name: 'Resume',
      url: '/resume',
    },
  ],
};

// export default config;
