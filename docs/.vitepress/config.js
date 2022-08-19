export default {
    // Meta data
    lang: 'en-US',
    title: 'Just my personal portfolio',
    description: 'Hi I am John Doe, a Full-Stack web developer!',

    themeConfig: {
        // Tilte displayed on the navbar
        siteTitle: 'John Doe',

        // Add, remove or change objects on needs
        nav: [
            { text: 'Portfolio', link: '/portfolio' },
            { text: 'About', link: '/about' }
        ],

        // Add your socials here
        socialLinks: [
            { icon: 'github', link: 'https://github.com/' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/' },
            { icon: 'twitter', link: 'https://twitter.com/' }
        ],

        sidebar: [
            {
              text: 'Tech',
              collapsible: true,
              items: [
                { text: 'My Portfolio', link: '/portfolio' },
                { text: 'Skills', link: '/skills' },
              ]
            },
            {
                text: 'Personal details',
                collapsible: true,
                items: [
                  { text: 'About me', link: '/about' }
                ]
              }
          ],

        // You can delete the footer object if you don't need / want it
        footer: {
            message: 'Your message here',
          }
    }
}