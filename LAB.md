Modern Vanilla: Ipsum Viewer
===

## Code Wars Challenge

Complete [today's Kata.](https://www.codewars.com/kata/fixme-replace-all-dots)

## Lab

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

## Component Details

* `App` 
    * owns the "selected" state (initially `null`)
    * passes `IpsumList` a callback function, `onSelect`
    * displays the two child components
* `IpsumList`
    * owns the "ipsum list" state (initially import of `js/data.js`)
    * calls the passed `onSelect` when an ipsum is selected, _passing the corresponding object_ to the `onSelect` function
    * show name and category (maybe find images?)
* `IpsumViewer`
    * gets passed the `selected` (only via `update`)
    * if `selected` is `null` displays message to make a selection

## Requirements

* No use of `document.` in components, use template literals to create html. `IpsumList` can create individual items without needing child components.

## Rubric

* Project Structure and Organization **2pts**
* Use of state and three components **3pts**
* Module import/export **1pt**
* Property packaging and destructuring **1pts**
* Feature/Functionality correct/works **3pts**