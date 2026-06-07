# 801Labs.org

801Labs.org Website: 2026 / WE EXIST TO HACK

In addition to being designed to look as slick as your best memories of the early internet, the 2026 version of the 801Labs.org site has been carefully crafted to significantly shrink the dependency footprint[^1] of the project, and has a very carefully chosen 8 build dependencies and 6 dev dependencies for 14 total dependencies[^2].

## Contributing

There are two ways to build the 2026 version of the site. You can use Docker, or install Node.js (>= 22.18) with its bundled version of NPM.

Once you've made your changes and tested that the build succeeds and that your work looks good locally, you can make a pull request, and when it's approved and merged, the deploy workflow will automatically `npm run build` and deploy the resulting `dist` folder.

### Docker Flavor

(the docker process needs some TLC because deprecated)

Make sure you have the required docker services installed.

#### Preparing Your Repo

1. Make sure you have docker installed on your computer.

2. Fork the repo on github then check it out to your computer.
   
   `git clone git@github.com:801labs/801labs.org.git`

3. Check out your working branch.
   
   If you're fixing an issue/bug name your branch `fix/<issues number>-some-description`
   
   If you're creating a new feature or writing a research post name your branch `feature/some-description`
   
   `git checkout -b fix/00-some-description`
   
   `git checkout -b feature/some-description`

4. Start the local development docker container
   
   `docker compose -f docker-compose.local.yml up -d`
   
   This will allow you to run a local docker container without any of the node tools installed locally.
   
5. Make your changes and review them at `http://localhost:8080`

6. Commit your changes to your working branch, and submit a pull request. If you are resolving an issue make sure to reference the issue with `#` then the issue number.

7. Stop your docker container.

   `docker stop 801labs`

### Building + running from dockerfile

Make sure you have the required docker services installed on your host.

run `git clone https://github.com/801labs/801labs.org`

`cd 801labs.org/`

Build the docker image `docker build . --tag website:latest`

Run it `docker run -p <host port>:8080 --name 801site website:latest`

## Using the source code

Clone the repository `git clone https://github.com/801labs/801labs.org`

`cd 801labs.org/`

Install Node version 22.18 or later, and run `npm install` to get dependencies installed.

There is currently no workflow for hot reloading. You make your changes, then make a new build, and manually refresh.

Run `npm run build` to make a build. The generated files can be found in the `/dist` folder.

You can test this build output locally with the following python webserver commands:

- Windows: `python -m http.server -d dist`
- Everyone else: `python3 -m http.server -d dist`

Then visit `http://localhost:8000`.

Once you’re done making changes, stop the python http server process (`ctrl + c`), commit your changes, push, and make a pull request from your fork/branch.

## Directory structure

* `templates/` - Page templates that rendered markdown gets injected into.
* `content/` - Markdown files and images for the website.
  * `*/index.md` - Want a new page on the site? Make a folder for it and put an `index.md` into it, and if you want that page to render a different way, put a different template name in the frontmatter. Images for that page should be put in the same folder as the `index.md`.
  * `blog/post/YOUR-BLOG-POST-SLUG/`
    * `index.md` - Required, this is the blog post content itself. You'll put your images and other media files in the same folder as the `index.md` for your blog post, and they should be referenced from a relative path, so just their filename. Duplicate one of the other `index.md` files from a recent blog post to get the headers/frontmatter to provide the required fields to the build scripts.

## References
1. [^1][Previous site's dependency footprint](https://npmgraph.js.org/?q=https://raw.githubusercontent.com/801labs/801labs.org/e875c2a580c4c7abcb4391304d6649bf6697466b/package.json#deps=devDependencies "lol @ react/next with 1289 dependencies and 139 critical vulnerabilities")
2. [^2][Current site's dependency footprint](https://npmgraph.js.org/?q=801labs_org_minimal_build_toolchain%401.0.0#packages=%5B%7B%22author%22%3A%22%22%2C%22dependencies%22%3A%7B%22%40napi-rs%2Fcanvas%22%3A%22%5E0.1.69%22%2C%22markdown-it%22%3A%22%5E14.1.0%22%7D%2C%22devDependencies%22%3A%7B%22%40types%2Fmarkdown-it%22%3A%22%5E14.1.2%22%2C%22%40types%2Fnode%22%3A%22%5E25.6.0%22%2C%22typescript%22%3A%22%5E6.0.3%22%7D%2C%22license%22%3A%22ISC%22%2C%22name%22%3A%22801labs_org_minimal_build_toolchain%22%2C%22version%22%3A%221.0.0%22%7D%5D&zoom=w&deps=devDependencies)