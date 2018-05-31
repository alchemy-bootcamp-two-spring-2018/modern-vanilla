Modern Vanilla: Ipsum Viewer
===

Create a ipsum viewer that displays a lists of ipsum's and when an ipsum is clicked, it shows a detail view with full information.

## Components

Your app components should be structured as follows:

```
App
  |
  + IpsumList
  |
  + IpsumViewer
```

## State

* `App` 
    * owns the "selected" state (initially `null`)
    * passes Ipsum List a callback function, `onSelect`
* `IpsumList`
    * owns the "ipsums" state (initially import of `js/data.js`)
    * calls the passed `onSelect` when an ipsum is selected, _passing the corresponding object_ to the `onSelect` function
* `IpsumViewer`
    * gets passed the `selected` (only via `update`)
    * if `selected` is `null` displays message to make a selection

## Requirements

* Use "props" (objects with properties) to pass data in `constructor` and `update`. Package and destructure as needed.
* No use of `document.` in components, use template literals to create html. `IpsumList` can create individual items without needing child components.

## Rubric

* Project Structure and Organization **2pts**
* Use of state and three components **3pts**
* Module import/export **1pt**
* Property packaging and destructuring **1pts**
* Feature/Functionality correct/works **3pts**