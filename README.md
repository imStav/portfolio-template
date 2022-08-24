# Portfolio template

## Get started

> Get packages

``` bash
npm install
```

> Run the dev server

``` bash
npm run docs:dev
```

*These commands can be found in the `package.json` file @ `"scripts"`*

## The project

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/docs/assets/portfolio-template_dark_preview.png">
  <img alt="Portfolio preview in light and dark color mode." src="/docs/assets/portfolio-template_light_preview.png">
</picture>

This portfolio template aims to deliver an easy to use, ready-to-go and minimal (but customizable) website for developers. Fully responsive (mobile first!).

It provides a `homepage` with a `navbar`. The homepage has a `hero section` with 2 `call-to-action buttons` (1 leads to the portfolio, the ohter to your Github).

The `navbar` handles 2 links as follow:

- **Portfolio**

It leads to the Portfolio page `/docs/portfolio.md` and contains a custom component `Card.vue` made with `Vue 3` and the `Github API`. This API is used to retrive all your **public repositories** directly from your Github profile. To do so, just adapt the username variable to put yours, in `/api/getGitRepos.js` at `let username = 'yourUsername'` (line 3).

``` js
export async function getRepos() {
    // Replace with your username to retrieve your repos
    let username = 'imStav'

    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      const repos = await response.json()
      return repos
    } 
    catch (e) { console.log(e) }
}
```

- **About**

A free section to let you describe yourself. Contains 2 sub-sections **Work experiences** and **Education & Certifications**.

At the right of those links, there is a **toggle button** for `dark / light mode`.

You can also expose / modify your socials links in the `navbar`. To customize this part, just go to `/docs/.vitepress/config.js` at `socialLinks` wich is an array of objects:

``` js
// Add / modify your socials here
socialLinks: [
    { icon: 'github', link: 'https://github.com/' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/' },
    { icon: 'twitter', link: 'https://twitter.com/' }
]
```

On this template, there is also a `sidebar` (not displayed on the `homepage`). To access and customize data, go to `/docs/.vitepress/config.js` at `sidebar`.

### Technologies

- ⚡ VitePress (alpha)
- 🔭 Vue 3
- 📝 Markdown
- :octocat: Github API


## Official docs

- [VitePress](https://vitepress.vuejs.org/)
- [Vue.js 3](https://vuejs.org/)
- [Github API](https://docs.github.com/en/developers)