# 801labs-web

801Labs site relaunch

* components/ - Repeated logic abstracted into reusable react components.
* content/ - Markdown files for the blogs (news, research).
* images/ - Images in this folder can be used with the react Image component. It automatically optimizes and generates multiple sizes for these images.
* layouts/ - Layout for the site - contains the header and footer. Only one right now, but the folder exists if there were ever going to be alternative layouts.
* lib/
  * blogs.js - A JavaScript class to easily set up and create the data for new blogs. Instantiates and exports instances of the Blog class for both research and news sections of the site.
  * events.js - Helper function to fetch and return the json from meetup’s api.
  * menu.js - A JavaScript object that makes up the menu used in the header, mobile menu, and footer.
  * utilities.js - Right now only contains a function that turns markdown into html.
* pages/ - A folder used by Next.js. Each file will generate at least one html file for the site. Each JavaScript file must export a React component. Files whose names are in brackets are dynamic routes that will generate multiple html files. Read next.js documentation for more details on how this folder and these files work.
* plugins/
* remark/ - A folder with custom plugins for Remark - the tool used to transform markdown to html. Currently there’s only a plugin to optimize and generate multiple image sizes for images included in the markdown files.
* tailwind/ - a folder with custom plugins for TailwindCSS - the CSS tool we’re using on the site.
* public/ - A Next.js recognized folder. Files and folders in here are moved to the root of the generated site.
* images/ - Images in this folder do not get optimized or resized. These are images used in the css as background images.
* styles/ - The styles for the site. Main file is styles.css. It pulls in everything else that’s used.
  * next.config.js - A config file for Next.js that includes some plugins for mdxfiles (markdown that allows React components inside of it), and the image plugin that will optimize and generate the different image sizes.
  * package.json - A file containing all dependencies, and a list of extra scripts (detailed later on)
  * postcss.config.js - A config file for PostCSS - a tool that transforms the CSS. PostCSS does nothing by itself, so the config file is where you add in the plugins that do stuff. One thing to note is that one of the plugins being used is PurgeCSS that will remove all unused CSS from the generated styles.css in a production build of the site. There are a few comments in styles.css telling PurgeCSS to not strip anything from certain parts of the styles.
  * sitemap-generator.js - A config file for a nextjs sitemap generator tool.
  * tailwind.config.js - A config file for TailwindCSS. Check TailwindCSS documentation for details.

# Using the source code

Install some required libraries `sudo apt-get install libtool automake autoconf nasm`

Install Node version 14, and run npm i to get dependencies installed.

Run `npm run build` to get an initial build of the site created.

Run `npm start` to spin up a local development site with hot reloading.

Once you’re done making changes or creating a new article, stop the local server process (`ctrl + c`), commit your changes (if using git), and run npm run production. The generated files can be found in the `/out` folder.

# Recommendations

Netlify or Vercel can be used to host the site. They can be set up to watch the repository master branch for changes and then run a production build and deploy it automatically when a change is detected. Editors/developers won’t need to run the production build or upload changed assets.

