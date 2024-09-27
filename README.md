# ITF Widgets

This repository provides the logic for the ITF widgets. The setup has been kept to a minimum to ensure simplicity and streamlining.

## Why? / What's the Purpose

The purpose of these widgets is to offer a drop-in HTML DOM element, along with a single JS file that can render multiple custom ITF widgets.

Behind the scenes, it searches for these specific DOM elements and creates its own mini React applications wherever needed, fully scoped to that one element.

These widgets are intended for integration into third-party websites that we do not control.

The idea behind this 'SDK-like' approach is to allow the third party to have better control over how and where these widgets are rendered on a page.

## The Goal

To enable the third party user to include one small, minified JS file served by Stadion, which provides all the logic needed for the widgets.

This allows Stadion to maintain control of the JS file to push changes, fix bugs, etc.

## Technology Stack

TypeScript (providing type safety in the project)

React (providing the framework for components)

StyledComponents (providing CSS-in-JS styling capability)

Vite (serving as the build system)

### React

React is a requirement for these widgets to run.

We have decided not to include React and React DOM in the compiled bundle file for the following reasons:

This may cause issues with different versions of React running on the same page.

The third party may already be using React, and we do not want to load this library twice.

The bundle Stadion serves will be much smaller in size, allowing for quicker loading, reduced bandwidth usage, etc.

### Why StyledComponents?

StyledComponents has been chosen so that once the build is compiled, all the CSS will be embedded into the JS bundle. This means no additional CSS files need to be served or consumed.

Styles will also be scoped, minimising the chances of conflicting styles.

### Passing Props to Components

In all props that a component is set up to received MUST be marked as possibly undefined, ie `id?: string`, even if `id` is a required attribute.
This is because with this integration, we cannot guarantee the presence of the data that we require to render the component correctly.
Marking all props as undefined protects against a prop being missed from the final implementation of the widget, and causing errors that do not fail gracefully.

On that same point, we also cannot guarantee the type of the data passed through. To be investigated if this is something we can guard against, ie perhaps build a helper function which verifies the validity of each prop against the intended type before rendering the component, for example with an early return.

## How to Develop/Build/Run?

Start with `npm i` in the project directory.

Make any required changes.

Run `npm run serve` to compile/build your changes and automatically start the development server.

To work with the components as the third-party clients will be doing, modify the index.html file in the project root.

That's it!
