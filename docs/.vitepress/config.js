export default {
    // Meta data
    title: 'Just my personal portfolio',
    description: 'Hi I am John Doe, a Full-Stack web developer!',

    themeConfig: {
        siteTitle: 'John Doe',

        // Add, remove or change objects on needs
        nav: [
            { text: 'Portfolio', link: '/portfolio' },
            { text: 'About', link: '/about' }
        ],

        // 
        socialLinks: [
            { icon: 'github', link: 'https://github.com/' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/' },
            { icon: 'twitter', link: 'https://twitter.com/' }
        ],

        // You can delete the footer object if you don't need / want it
        footer: {
            message: 'Your message here',
          }
    }
}