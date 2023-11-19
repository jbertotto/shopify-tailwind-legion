Forked from  (https://github.com/TrellisCommerce/shopify-tailwind-starter-base)

Lastest merged code from [Dawn v11.0.0](https://github.com/Shopify/dawn/releases/tag/v11.0.0)

## Steps to Start Using this Theme

1. Fork this repository & enable actions in the repo's Actions tab.

| :bangbang: | When forking this repo, make sure to change the settings in the forked repo under Settings > Actions > General > Workflow permissions to be `Read and write permissions` and check `Allow GitHub Actions to create and approve pull requests` for the Theme Check & Lighthouse actions to run |
| :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

2. Clone the forked repo, navigate to the directory in your terminal, & run `npm install`.

3. In the theme section of your Shopify admin you can connect to a GitHub repository via “Add theme” button.

<img width="500" alt="Add a theme and connect it to your github repo" src="https://user-images.githubusercontent.com/75811975/162517993-31a22954-6600-45f9-ab6e-2b9735c9efba.png">

4. In your terminal, navigate to the cloned repo directory, and use the Shopify CLI to login to your store and launch the development server with `shopify theme serve --store=mystore.myshopify.com`.

| :bangbang: | If you are working on a development store and are signed in via your partner dashboard, you must add a separate user in that Shopify store with admin rights and sign in with this new user when logging in using the Shopify CLI |
| :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

You can add users in the store Settings:

<img width="500" alt="Where to add users in the store settings" src="https://user-images.githubusercontent.com/75811975/162517914-6fe20ef6-7b58-4337-b488-75966694ef92.png">

## Install [Shopify Liquid VSCode extension](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode)

- Includes [Shopify Theme Check](https://shopify.dev/themes/tools/theme-check) linting

## Common local development commands

1. Before beginning any work, it is good practice to pull down the latest changes from the Shopify Dawn theme:
   `git fetch upstream`
   `git pull upstream main`

2. Add upstream link if you get the error `fatal: 'upstream' does not appear to be a git repository` run:
   `git remote add upstream https://github.com/Shopify/dawn.git` or `git remote add upstream https://github.com/TrellisCommerce/shopify-tailwind-starter-base` depending on which repository you want to pull updates from

3. Pull down changes from the theme editor:
   `shopify theme pull -d`

4. Anytime you add a TailwindCSS class (remember to prefix it with twcss-), run the CLI tool to scan your template files for classes and build your CSS to assets/app.css:
   `npx tailwindcss -i ./assets/app-tailwind.css -o ./assets/app.css --watch`

- Run this command in a separate terminal so it will continue to run while you are developing.
- Note that using a TailwindCSS class without a space afterwards when followed by a liquid tag causes compiling issues:
`lg:!twcss-px-[32px]{% endif %}'>`
But this does work:
`lg:!twcss-px-[32px] {% endif %}'>`

5. Launch the local development server:
   `shopify theme serve`
