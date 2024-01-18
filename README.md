# Important Notes

# Bundlers (e.g., Parcel, Webpack, Vite):

#### Definition:

- Bundlers are tools that take your source code, which may be written in multiple files with various dependencies, and bundle them together into a smaller number of files (typically JavaScript, CSS, and HTML) optimized for production.

#### Purpose:

- Bundlers are used to improve the efficiency and performance of web applications by reducing the number of network requests and optimizing the code for deployment.

#### Minification:

- This process involves removing unnecessary characters (like whitespace and comments) from the code to reduce its size.

#### Compression:

- Code compression further reduces file sizes by applying algorithms to represent the code in a more compact form.

#### Bundling

- Combining multiple files into a single or a few files simplifies the delivery process and improves loading times.

# Parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image optmization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support of older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Dev and Prod bundles

# ^ - caret and ~ - tilda

- ~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

- ^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to <2.0.0.

# Transitive dependencies

- A transitive dependency refers to a dependency that is indirectly required by a project. When your project depends on a library (direct dependency), and that library, in turn, depends on other libraries, those additional libraries become transitive dependencies of your project.

# Homework Questions

#### 1. What is npm?

- npm is a package manager that manages all the packages. It can be thought of as a **huge registry or repository of packages.**
- It **does NOT stand** for Node Package Manager.

#### 2. What is Parcel/Webpack? Why do we need it?

- Parcel, Webpack, Vite are some of the Bundlers used to bundle the code before building dev and prod build.
- A bundler minifies, compresses, bundles up the code before shipping the code to production.
- Parcel is a Beast that has many more superpowers as well!! It is really easy-to-configure.
- We need a bundler because if we send the entire code as it is, in the form of those multiple js, html, css files, this is really not optimum because the browser needs to make lots of network calls to fetch all these numerous files. So instead, bundling up the code generates a limited no. of files to be fetched. This makes our app faster and more lightweight.

#### 3. What is '.parcel-cache'?

- One of the superpowers of Parcel is to do caching. So it Caches the code and places it in the '.parcel-cache' folder.
- This provides faster builds to us. Everytime we re-build the app, it takes lesser time than previous build since the code is already cached and only the changes need to be reflected in that code. There is no need to re-build the entire app from scratch

#### 4. What is 'npx'?

- npx is a package executer. It is used to execute packages. If the package is not present locally, then it installs prior to the execution.

#### 5. Difference between dependencies and devDependencies?

- There are 2 types of dependencies: normal dependencies and dev dependencies
- Normal Dependencies : The ones which our project require in all the phases of the project ie. (used in development and production also). Such dependencies are put into the "dependencies" key of the package.json.
- Dev Dependencies: They are the ones which our project requires just in the development phase. Such dependencies are put into the "devDependencies" key of the package.json.
- In our React project, we install parcel as a devDependency since npm knows parcel is required at development phase to bundle the code, not at production, because bundling should be done before production.

#### 6. What is Tree Shaking? [Read More on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)

- In production builds, Parcel tries to analyze all the imports and exports of each module. It sees which module is not reachable and no more required. Then it removes everything that is unused. This is Tree Shaking or Dead-code Elimination.
- Tree Shaking is done for both static imports(ie. import <module> from "path") and dynamic imports(ie. import()).

#### 7. Hot Module Replacement(HMR)

- **Parcel performs HMR**. It **automatically reloads/refreshes the webpage** whenever we make any changes to our code.
- It **rebuilds the app** whenever we make any changes in any file.
- It **automatically updates the modules** in the browser at runtime without needing a whole page refresh.

#### 8. Five Superpowers of Parcel:

- Hot Module Replacement
- Creating the local server to host the app
- Caching the App code
- Tree Shaking
- Minification: **Reducing the file size by removal of extra whitespaces in the code, renaming variables to shorter variable names**.
- Compression: **Applying Compression algorithms like Gzip or Brotli on the minified code**
- Differential Bundling: Provides support for older browsers
- Better Diagnostics: Provides a **better presentation of errors and warnings in the dev environment** leading to easy diagnostics.

#### 9.gitignore

- The .gitignore file is used in Git to specify files and directories that should be ignored by the version control system. When you add files and directories to the .gitignore file, Git will exclude them from being tracked, preventing them from being included in commits. This is particularly useful for files that are generated during the build process, temporary files, or any other files that should not be part of the versioned codebase.

#### 10.package.json and package-lock.json

- package.json defines the project metadata and lists dependencies with version ranges, package-lock.json provides a detailed, version-locked snapshot of the actual dependency tree with specific versions and integrity information. The combination of both files helps ensure consistent and reproducible builds across different environments.

#### 11. Not modify `package-lock.json`?

- The primary purpose of package-lock.json is to provide a consistent and reproducible environment for your project by locking down the specific versions of dependencies and their transitive dependencies. Modifying this file manually can lead to inconsistencies across different development environments.

#### 12. Dist folder

- dist folder, short for "distribution," is a common convention used in software development to store files that are generated or compiled for distribution or deployment. This folder typically contains the final version of your project, which is ready to be deployed to a production environment. The contents of the dist folder are often the result of a build process that includes tasks like code transpilation, bundling, minification, and other optimizations.

#### 13. Browserslist

- Browserslist is a configuration file used by various front-end tools to specify which browsers and their versions your project should support. It helps tools like Autoprefixer, Babel, ESLint, and others to tailor their output based on the targeted browsers.
