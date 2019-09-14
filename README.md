
# React Basic Popup

A simple react component that renders a popup.

## Usage

**Step 1: Install the module**

Run:

`npm install react-basic-popup --save`

**Step 2: Import the module**

Add following line to import the module:

`import Popup from 'react-basic-popup';`

**Step 3: Use the module**

To render the Popup, pass the required props to the component.

#### Example

```
import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'react-basic-popup';

let buttons = [
  {
    name: 'ok',
    onClick: () => {
      console.log("ok button clicked");
    }
  }
];

ReactDOM.render(
  <Popup
    showPopup={true}
    header="Sample Popup Header"
    body="Sample popup body"
    buttons={buttons}
  />, document.getElementById('root'));
  ```

## Properties

 - showPopup
	 - ***mandatory parameter***
	 - accepts a boolean value which shows or hides the popup.
	 - default value is false, which hides the popup
	 - must be set to true in order to show the popup
 - buttons
	 - an array of objects that define each button in the popup
	 - each object represent a button
	 - each object can have 3 properties
		 - name
			 - ***mandatory parameter***
			 - defines the label shown in the button
			 - should be a string
		- onClick
			- defines a function that executes on clicking the button
		- className
			- user can specify a string of user defined CSS class names seperated by space
			- these styles gets applied to the curresponding button
 - default
	 - user can pass a function that will get executed for any button that does not have an onClick defined
 - finally
	 - user can pass a function that wil get executed on clicking any of the buttons
	 - this can be used to close the popup by setting showPopup to false


#### Parts of the popup
These are the different parts of the popup. They can ***accept a string or html elements*** like div.
- header
	- content that goes to the header of the Popup
- body
	- content that goes to the body of the Popup
- footer
	- content that goes to the footer of the Popup

You can pass html elements like div as follows:
```
  body = {
    <div>
      Sample popup body.
      <br/>
      You can build and style the popup body using html components like this.
    </div>
  }
```

#### Classes to style each part
User can define CSS classes to style each part of the Popup. Class names can be passed through props. Class names should be passed as string.

- headerClass
- bodyClass
- footerClass
- popupClass
	- class that applies to the popup container ie; the white box
- overlayClass
	- class that applies to the gray overlay covering the screen
	- you can use custom classes to change properties of overlay like it's color, z-index etc...
- buttonsClass
	- calss that applies to the container that holds buttons
	- can apply styles to modify properties like space between buttons
	- For example, you can apply ``display: flex; justify-content: space-evenly;`` to make the buttons use the available space equally

If you want to apply ***multiple classes*** to same element, ***seperate each class name with a space***.
##### Example:
Consider you have two classes - classA, classB
If you want to apply bothe classA and classB to the header of the popup,  then you must pass it as follows:

    headerClass = "classA classB"

Note that each class name is seperated by a space.
You can pass as many classes as you want by seperating them with spaces.

> NOTE:
> Each part of the popup has some default styles applied to them. If you want to override these styles, you can do so by setting the ***!important*** flag in your custom CSS classes.
