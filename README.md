# React.createElement vs JSX

## JSX:

- JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.
- JSX enhances the readability of code, especially when building user interfaces. It looks similar to HTML and is more intuitive for describing the structure of components.
- Ex: const element = <h1>Hello, JSX!</h1>;

## React.createElement:

- React.createElement is a function provided by React to create React elements. It takes at least three arguments: the type of the element (such as a string for HTML tags or a React component), props (properties passed to the element), and children (nested elements).
- Ex: const element = React.createElement('h1', null, 'Hello, JSX!');

# Behind the Scenes of JSX

- JSX is transformed into JavaScript code before it is executed by web browsers.
- This transformation is typically done by a tool called a transpiler. Each JSX element is transformed into a React.createElement function call.
- This function call creates a virtual representation of the element in the form of a JavaScript object.
- Virtual DOM elements are then used by React to efficiently update the actual DOM.
- These JavaScript objects represent the structure of the user interface in a virtual DOM.
- React DOM is responsible for taking the virtual DOM elements and efficiently updating the actual DOM in the browser.

# Composing Components

- Component composition is the name for passing components as props to other components, thus creating new components with other components.

# HomeWork Questions

## Q1: What is JSX?

- JSX took its name from js-xml-literal, which Jordan modified to just be syntactic sugar for deeply nested function calls.[Read More](https://legacy.reactjs.org/blog/2016/09/28/our-first-50000-stars.html#adding-jsx)
- Is a Syntax Extension to JS.
- Stands for JavaScript Syntax Extension( not JavaScript XML!!).
- React developers came up with this syntax as the React.createElement() was very complicated in case of generating nested DOM structure.
- It is just an HTML-like/ XML-like syntax but not the same as them.
- It exists independent of React, but can be used in React to write readable and managable code.
- It is eventually converted to React.createElement() syntax by Babel, a package that comes as a dependency of Parcel.
- JSX is not HTML written in JS!!

## Q2: Super Powers of JSX?

- Enables us to write easy, readable and manageable code
- Behind the scenes, it gets TRANSPILED into React.createElement() by Babel and then it generates React Element
  - Thus JSX is actually another way of creating React elements rather than using the core React way to create elements.
- We can write any JS expression/logic in the JSX by using {}. So simply wrap the JS code in {} to execute it and render it dynamically.
- JSX protects against **DOM XSS(Cross-Site Scripting)** attacks by doing AUTO-ESCAPING and sanitizing the data coming in {}.
- [More about XSS] - https://owasp.org/www-community/attacks/xss/

## Q3: Role of 'type' attribute in <script> tags? What options can I use there?

- It is used to tell the browser what type of script is it.
- Types of scripts are:
  - Normal/ Classic script
  - Module Script
- We can assign 3 values to 'type' attribute:
  - `type = ""` ie empty string / don't set the attribute only : In case of normal classic JS script
  - `type = "module" ` : In case of Module Script, This value causes the code to be treated as a JavaScript module.

## Q4: {TitleComponent()} vs `<TitleComponent/>` vs `<TitleComponent></TitleComponent>`?

All three are methods to render the TitleComponent functional component in some other component or React element.

- `{TitleComponent()}` : call the TitleComponent function since Fucntional components are at the end of the day JS functions
- `<TitleComponent/>` : Using self-closing tags
- `<TitleComponent></TitleComponent>` : Using opening and closing tags
