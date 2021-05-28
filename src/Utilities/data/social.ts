interface Isite {
    site: string,
    url: string,
}

interface IsocialSites {
    devSites: Isite[],
    email: Isite
}

export const socialSites:IsocialSites = {
  devSites: [
    {
      site: 'Github',
      url: 'https://github.com/Yggdrasil09/',
    },
    {
      site: 'LinkedIn',
      url: 'https://www.linkedin.com/in/karthikchowdaryp/',
    },
    {
      site: 'Twitter',
      url: 'https://twitter.com/PKarthikChowdry',
    },
  ],
  email: {
    site: 'Email',
    url: 'karthik99th.tnk@gmail.com',
  },
};
