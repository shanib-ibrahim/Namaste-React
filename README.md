# Two types of Export/Import

- Default Export/Import
  -- export default Component
  -- import Component from 'path'

- Named Export/Import
  -- export const name
  -- import {name} from path

  ***

## HomeWork Questions

### Q1. Difference between Named Export , Default Export, \* as Export? [Read More](https://react.dev/learn/importing-and-exporting-components)

- Named Export means we need to import the thing with the same name as it has in the exporting file.
- Syntax:
  ```
   export const LOGO_URL = "https://...........";
   import {LOGO_URL} from "path";
  ```
- Default export means the thing that is getting exported by-default from the file. No need to use the same name in the importing file.
- Syntax:
  ```
   export default LOGO_URL = "https://...........";
   import LOGO_URL from "path";
  ```
- **A file can have no more than one default export, but it can have as many named exports as you like.**
- `import * from "path"` means we want to import everything that is being exported from the exporting file!

### Q2. Importance of config.js file?

- In a React application, the config.js file is not a standard or predefined file. However, developers often create configuration files to centralize and manage various settings or environment variables in their React projects. The name "config.js" is just an example, and developers might choose different names like "config.json" or "settings.js" based on their preferences.
- Configuration settings are often found in different places, such as within the code, environment variables, or specific configuration files related to tooling like Webpack or Babel.
- Developers often create a config.js file themselves to centralize these configurations, keeping the project organized and making it easier to manage different settings from a single location. It's like having a master switchboard where you can control various aspects of your application.

### Q3. What are React Hooks? [Read More](https://legacy.reactjs.org/docs/hooks-overview.html)

- React Hooks are nothing but JS functions that are utility functions given by React developers.
- They give use some superpowers in our functional components.
- They are written in react that we import from npm
- Without them, we would have to write long JS code to achieve those superpowers
- Most used Hooks: useState(), useEffect()

### Q4. Why do we need a useState() hook?

- useState() hook gives us a powerful state variable
- State variable means a variable which maintains the state of the component
- SUPERPOWER: If the state gets changed/updated, it triggers the Reconciliation and leads to the re-render of the entire component.
