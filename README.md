# Uni.js
Minimal boilerplate for creating universal javascript applications.

**Table of Contents**
* [Features](#features)
* [Getting Started](#getting-started)
* [Commands](#commands)

## Features
* **React** _- powerful, interactive user interfaces_
* **Universal Rendering** _- shared code that can render on the server and in the browser_
* **CSS Modules** _- locally scoped css prevents styles from clashing_
* **SEO friendly** _- By rendering initial requests server-side, search engines have a fully hydrated html page to parse_

**At last, we can create seo friendly applications with javascript**

**Universal Rendering**
* For the first request, the server handles the rendering of the application. If the current React component relies on data that it must fetch asynchronously, 
the server can handle this request for you. This let's us fully hydrate a React component before rendering it to the browser.
* Any sub-sequent requests to the server are handled by the browser, giving us that lovely _SPA_ feel.
* Finally, we can construct SEO-friendly javascript applications.

## Getting Started
* Clone or download and extract the repo
* Open the directory in your terminal and run ``npm install``
* That's it, you're ready to begin. Check out the commands section below for what to do next.

## Commands
| Command                  | Description                                    |
| ------------------------ | -----------------------------------------------|
| ``npm run dev``          | Start app in **development** mode              |
| ``npm start``            | Start app in **production** mode               |
| ``npm run watch-client`` | Watch **client-side** code for changes         |
| ``npm run watch-server`` | Watch **server-side** code for changes         |
| ``npm run clean``        | Clean app directory by removing compiled files |

## Contributors
* [Donny Burnside](http://donnyburnside.com)