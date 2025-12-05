//ToDo of App.jsx file

//? Each JSX expression must have one parent element ,
// which means if try to return multiple element then
// react will throw an error .

//? Every jsx tag need to be closed . you can say self-closimg
// tags for that elements that have no children , e.g . <img />. (These
// are called self-closing tags or empty tags. or elements are void elements)
// React is all about components . Component is basically a funtion which return JSX.
// but it is not a funtion ,it is component . in function name we use camelCase
// but in component must to use PascelCase
//<React.Fragment></React.Fragment> instead of this we can use <Fragment></Fragment>
// and also we can use <></> for this

{/\_ <div>
<img src="qot.jpg" alt="Go ahead" width="30%" height="30%" />

</div>
<h1>Queen of tears</h1>
<p>
Summary : Each JSX expression must have one parent element , which means
if try to return multiple element then react will throw an error{' '}
</p> _/}

        //  return React.createElement("h1" , null , "Hello World")

//return <h1>I'Ayesha Eman</h1> // this is jsx

// Dynamic values in JSX:
//\* Variables:
//? you can embed javascript variables in JSX by wrapping them in curly braces.
// The value of variable will be inserted into the DOM at the respective location.

//\* Expressions:
//? JSX also allows us to write javascript expressions inside curly braces.
// This includes operations , function calls , and other js expressions that produce values.

// Function calls:
//?Functions especially those that return JSX , can be invoked directly into JSX.

//<h1>Name : {name} </h1> //variable
//<h3>Rating : {4/2 + 3.4} </h3> //expressions
//<p>Genre : { genre()} </p> // Function call

//////////// Source.jsx//////////

React does not render 'false' , 'null' , 'undefined' or 'NAN' in DOM. These values when used in jsx will result in nothing being displayed.
However 0 and empty stings ("") are exceptions.

- **`0`** is rendered in the DOM because it is considered a valid React node. This means that if `0` is the result of an expression, it will appear in your UI.
- **Empty strings** (`""`) are also considered valid and are rendered as well.

**\*\*** Import / Export methods**\*\*\***

1. Default import and export
2. Named import and export
3. Mixed import and export

## ImportExport

\*\*\*Default Export: A file can have only one default export.
Default Import: When importing a default export, you can name the import whatever you like.

export default NetflixSeries;
import NetflixSeries from "./components/NetflixSeries";

\*\*\*Named Export:
A file can have multiple named exports.
Each named export must be explicitly exported.

... write export keyword beore component name
then import it like this:
import {NetflixSeries} from "./components/NetflixSeries";

Named Import:
When importing named exports, the import names must match the export names exactly.
Named imports must be enclosed in curly braces.

Combined/Mixed :
if in one file we do export in both methods ( default and named) then during import write the default export component without curly braces and named in curly braces and put comma between them. there can be only one default export in one file.

// const NetflixSeries = () => {
// const name = "Stranger Things";
// const rating = 4.5;
// const age = 13;
// // let canWatch = "NOt Available";
// // if(age>=18) canWatch = "Watch Now";

// const genre = () => {
// return "Horror";
// }

// const canWatch = () =>{
// if(age >= 18) return "Watch Now";
// return "Not Available";
// }

// // if(age>= 18){
// // return (
// // <div>
// // <div>
// // <img src="qot.jpg" alt="Go ahead" width="30%" height="30%" />
// // </div>
// // <h1>Name : {name} </h1>  
// // <h3>Rating : {4/2 + 3.4} </h3>  
// // <p>Genre : { genre()} </p>  
// // <p>
// // Summary : Each JSX expression must have one parent element , which means
// // if try to return multiple element then react will throw an error{' '}
// // </p>
// // <button>Watch Now</button>
// // </div>
// // );
// // }
// return (
// <div>
// <div>
// <img src="qot.jpg" alt="Go ahead" width="30%" height="30%" />
// </div>
// <h1>Name : {name} </h1>  
// <h3>Rating : {4/2 + 3.4} </h3>  
// <p>Genre : { genre()} </p>  
// <p>
// Summary : Each JSX expression must have one parent element , which means
// if try to return multiple element then react will throw an error{' '}
// </p>
// <button>{canWatch()}</button>
// {/_ <button>{canWatch}</button> _/}
// {/_ <button>{age>=18 ? "Watch Now" : "Not available"}</button> _/}
// {/_ <button>Not Available</button> _/}

// </div>
// );
// }

// export const Footer =()=>{
// return <p>Copyright@2025 by Ayesha Eman</p>
// }

// export const Header =()=>{
// return <h1>Cards logo</h1>
// }

// export default NetflixSeries;

---

**Looping in JSX**

- We don’t have for loops in JSX, so we have to use .map() method of arrays.

```jsx
return (
  <ul>
    {students.map((student) => (
      <li key={student}>{student}</li>
    ))}
  </ul>
);
```

- **React.js will complain if you don’t pass key prop to `<li>`**
- React.js uses keys to differentiate each elements, so that it can remove or update a particular element when a students gets added or removed.
- We can use arrays in JSX too. So, here students.map returns array of JSX which will be rendered on the page.

---

### 🔑 Why React requires the `key` prop

- When React renders a **list of elements** (like multiple `<li>` items), it needs a way to **track each item**.
- If something changes in the list (like a new student is added, or one is removed), React has to decide **which list items need to be updated, re-rendered, or removed**.

👉 Without a `key`, React might get confused and **re-render the whole list**, which is inefficient.
👉 With a **unique `key`**, React can **match old and new elements correctly**, making updates faster.

---

### ✅ Example with key

```jsx
<ul>
  {students.map((student) => (
    <li key={student}>{student}</li>
  ))}
</ul>
```

### ❌ Example without key

```jsx
<ul>
  {students.map((student) => (
    <li>{student}</li> // React will warn: "Each child in a list should have a unique key"
  ))}
</ul>
```

---

### ⚡ Best Practices for `key`:

1. Use a **unique ID** from your data if available.

   ```jsx
   <li key={student.id}>{student.name}</li>
   ```

2. Avoid using the **array index** (`key={index}`) unless the list is static and never changes.

---

### Props in JSX :

React props (properties) facilitate data transfer from parent to child components.

Data flows unidirectionally, ensuring a clear direction of information in React applications.

Props are immutable, meaning child components cannot modify the data received from parents.

Child components access props through their function parameters.

You can also pass JSX as props to another component.

### Passing JSX as Props in React

// Profile.jsx
function Profile() {
return (

<div>
<h1>Profile Card Challenge</h1>
<ProfileCard
name="Alice"
age={30}
greeting={
<div>
<strong>Hi Alice, have a wonderful day!</strong>
</div>
} >
<p>Hobbies: Reading, Hiking</p>
<button>Contact</button>
</ProfileCard>

      <ProfileCard
        name="Bob"
        age={25}
        greeting={
          <div>
            <strong>Hello Bob, keep up the great work!</strong>
          </div>
        }
      >
        <p>Hobbies: Gaming, Cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </div>

);
}

export default Profile;

// ProfileCard.jsx
function ProfileCard({ name, age, greeting, children }) {
return (
<>

<h2>Name: {name}</h2>
<p>Age: {age}</p>
<p>{greeting}</p>
<div>{children}</div>
</>
);
}

### CSS Modules

Every time you import a CSS file in your React component, they are regarded as global CSS.

CSS Modules help you keep styles specific to the component they're used in.

Each module encapsulates its styles, preventing unintended style conflicts with other modules.

The class names in CSS modules are often automatically generated, reducing the likelihood of naming clashes.

### CSS Modules – Rules to Keep in Mind

Name your CSS module files with the .module.css or .module.scss extension.

Import the CSS module file in your React component. Access class names as properties of the imported styles object.

Access class names as properties of the imported styles object.

Combine multiple class names using template literals or the classnames library.

Dynamically apply class names based on component state.

###

## CSS Modules – Important

When using CSS Modules, class names with hyphens can sometimes cause issues if not accessed correctly. In CSS Modules, you need to use bracket notation for class names with hyphens.

<div className={styles['card-content']}>

Explanation:

Using Bracket Notation: In JavaScript, when accessing object properties with special characters (like hyphens), you need to use bracket notation instead of dot notation.

Dot Notation: styles.card-content will not work because . expects a valid identifier, which cannot contain hyphens.

Bracket Notation: styles['card-content'] correctly accesses the class name from the imported styles object.

### Styled Components:

### 📘 Using Template literals

const Button = styled.button`  color: grey;`;

1: This is a styled component, which is a React component created using styled-components.
It is both a React component and a styled component.
As a React component, it can be used in JSX.
As a styled component, it has styles directly attached to it.

2: styled is an object provided by the library, and button is a method on that object.

### 📘 Using Style objects

const Button = styled.button({
color: grey;
});

(same explanation text below as above)

📘 Example with style object
const ButtonThapa = styled.button({
padding: "1.2rem 2.4rem",
border: "none",
fontSize: "1.6rem",
backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
color: "var(--btn-color)",
fontWeight: "bold",
cursor: "pointer",
});

Usage:

<ButtonThapa>Watch Now</ButtonThapa>

📘 Dynamic styles with template literals

In styled-components, you can pass a function within the template literal to dynamically set CSS properties based on props or state.

const ButtonThapa = styled.button`  padding: 1.2rem 2.4rem;
  border: none;
  font-size: 1.6rem;
  background-color: ${(props) =>
    props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
  color: var(--btn-color);
  font-weight: bold;
  cursor: pointer;`;

### In styled-components, you can define styles either with template literals or with style objects.

Template literals use a CSS-like syntax inside backticks (`). For example:

const Btn = styled.button`  color: grey;`;

This approach feels natural for developers familiar with CSS because you can directly write CSS rules. It is especially powerful when dealing with complex CSS like pseudo-classes (&:hover { ... }), media queries, and animations, since they look exactly as they would in a regular CSS file. Dynamic styles can be added using ${props => ...}, which makes it flexible while still keeping the CSS-like feel. However, because it’s just a string, TypeScript doesn’t provide much autocomplete or type checking for CSS properties.

On the other hand, style objects use plain JavaScript object syntax with curly braces. For example:

const Btn = styled.button({
color: "grey",
});

This approach is more familiar to developers used to writing inline styles in React. It works really well when you want to use theme-driven styles or computed JavaScript values. You can pass a function returning an object (props) => ({ ... }) for dynamic styling. Pseudo-classes and media queries are also possible here, but the syntax feels less natural (e.g., "&:hover": { color: "red" } or @media keys). The big advantage is that in TypeScript projects, you get better autocomplete and type safety because styles are just JavaScript objects.

In short, template literals are best suited for UI-heavy components where you need lots of CSS features, while style objects are best when your styles are programmatic, theme-driven, or TypeScript-based. Both are equally optimized by styled-components in terms of performance, so the choice mainly depends on developer preference and the project’s needs.

# Applying Padding in Tailwind

Here are both approaches:

Extended Spacing Scale:

If you've extended the spacing scale, you can use the custom classes:

<div class="py-32 px-12">Content</div>

Arbitrary Values:

You can use arbitrary values directly:

<div class="py-[3.2rem] px-[1.2rem]">Content</div>

✅ This shows two ways:

Using Tailwind’s extended spacing scale (py-32 px-12)

Using arbitrary values (py-[3.2rem] px-[1.2rem])

# Events Handling

Event handling in React.js is the process of capturing and responding to user interactions, such as clicks, keystrokes, or form submissions, within a React application.
Event handling in React follows a similar pattern to standard JavaScript event handling but with some key differences, such as using synthetic events for cross-browser compatibility and providing consistent event handling across different elements and browsers.

# What is SyntheticBaseEvent in React?

When you handle events in React, like clicking a button or typing in an input box, React wraps native browser events in something called a SyntheticEvent.
This SyntheticEvent is a wrapper around the browser’s native event, making sure that events behave consistently across browsers.

# Widely used React.js events:

onClick: Triggered when an element is clicked.

onChange: Triggered when the value of an input element changes.

onSubmit: Triggered when a form is submitted.

onMouseEnter: Triggered when the mouse pointer enters an element.

onMouseLeave: Triggered when the mouse pointer leaves an element.

onKeyDown: Triggered when a key is pressed down.

onKeyUp: Triggered when a key is released.

onFocus: Triggered when an element receives focus.

onBlur: Triggered when an element loses focus.

onInput: Triggered when the value of an input element is changed (similar to onChange).

# Event Naming Conventions

CamelCase: Event names in JSX should be written in camelCase.
Example: onClick, onChange, onSubmit.

Prefix with on: Event handlers should be prefixed with on.
Example: onClick, onMouseEnter.

Function Naming Conventions

Prefix with handle:
It is a common convention to prefix event handler functions with "handle" to clearly indicate their purpose.
Example: handleClick, handleChange, handleSubmit.

Descriptive Names:
Function names should be descriptive and reflect what the function does.
Example: handleFormSubmit instead of just handleSubmit if it’s specifically for form submission.

Example Code
return (
<>
{/_ Function Components with Named Functions _/}
{/_
Remember how we haven't called this function.
If you call this function here then it will run without even clicking.
You just need to pass reference and not call here.
_/}
<button onClick={handleButtonClick}>Click Me</button>
<br />

    {/*
      In React, event handlers receive the event object as an argument by default.
      However, when you use an arrow function directly in the onClick attribute
      without passing the event explicitly, React doesn’t pass the event object
      to your handler function.
      This is because the arrow function creates a new function and calls
      your handler without passing any arguments.
    */}
    <button onClick={() => handleButtonClick()}>Click Me 2</button>

</>
);

1. when you want to use any type of the event the you want to write
   "on" infront of that event with camel case

2. When you to to call it at that time only gave the reference of it in that event

3. The function should be start with the "handle" and according to the work

4. When u want to pass the arguments at that time u should use the flat arrow functions

5. React gaves you the syntheticeEvent

### Topic: Passing Event Handlers as Props (React)

Definition:
Passing event handlers as props in React is a common pattern that allows child components to communicate with parent components.
This helps in maintaining a clear data flow and managing actions between different components.

Key Use Cases:

Form Handling:

Event handlers like onChange or onSubmit are passed to form elements.

Enables child components (like input fields) to send data updates to parent components.

User Interaction:

Handlers such as onClick are passed to interactive elements (e.g., buttons, links).

Useful for triggering actions like opening modals or page navigation in the parent component.

State Management:

Parent components define functions to update their state.

These functions are passed to children as props, allowing state updates from child interactions.

Callback Functions:

Event handlers can serve as callbacks for asynchronous tasks.

Example: Updating state after a network request completes.

Summary:
➡️ Passing event handlers as props builds a communication bridge between child → parent, helping manage user input, app state, and UI interactions efficiently.

💡 Flashcards for Quick Revision

Q1: What is the purpose of passing event handlers as props in React?
A1: To allow child components to communicate with parent components and trigger actions in them.

Q2: Give an example of event handlers in form handling.
A2: onChange and onSubmit are used to update form data and notify the parent component of changes.

Q3: How are event handlers useful in user interaction?
A3: They handle events like button clicks or link presses to trigger actions in the parent component, such as opening modals or navigation.

Q4: How do event handlers help in state management?
A4: They allow child components to call parent functions that update the parent’s state, which is then passed back down as props.

Q5: What are callback functions used for in this context?
A5: To handle asynchronous operations or update state after an operation (like a successful API response).

### Event propagation:

is the process that tell how event propagate or tarvel through the DOM tree , two phases of it is capturing and bubbling.

### state:

React doesn't allow normal variables to use so when then situation is to use variables React provide us
useState funtion and the funtion that start with use keyword is called "hook" which have speciaal features that
react provide

const[count,setCount] = useState(0)

canst = variable(key)
count = state variable (current state value)
setCount = function that update the state variable
(0) = the initial value off the state

###### Todo app.............................................................................

React does not render `false`, `null`, `undefined`, or `NaN` in the DOM. These values, when used in JSX, will result in nothing being displayed.

However, `0` and empty strings (`""`) are exceptions:

- **`0`** is rendered in the DOM because it is considered a valid React node. This means that if `0` is the result of an expression, it will appear in your UI.
- **Empty strings** (`""`) are also considered valid outputs and are rendered as well.

//\* 1. Variables
//? You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

//\* 2: Expressions
//? JSX allows you to write JavaScript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.

//\* 3. Function Calls
//? Functions, especially those that return JSX, can be invoked directly within your JSX.

## ImportExport

Default Export: A file can have only one default export.
Default Import: When importing a default export, you can name the import whatever you like.

Named Export:
A file can have multiple named exports.
Each named export must be explicitly exported.

Named Import:
When importing named exports, the import names must match the export names exactly.
Named imports must be enclosed in curly braces.

## Inline Styles

Inline styles are applied directly to the HTML elements via the style attribute. This approach uses JavaScript objects to define the CSS properties and values.

# 1. JavaScript Object Syntax

Inline styles in React are specified using JavaScript objects. Property names are written in camelCase instead of the traditional CSS kebab-case.

const style = {
backgroundColor: 'blue',
fontSize: '16px',
};

# 2. Units

For most numeric values, you need to specify units as a string (e.g., '16px'). Some properties, like zIndex, can take numeric values directly.

const style = {
padding: '10px',
zIndex: 1,
};

# 3. Performance Considerations

Defining inline styles directly within the JSX can lead to performance issues because a new object is created on every render. To avoid this, define styles outside of the render method or as constants.

const buttonStyle = {
backgroundColor: 'blue',
color: 'white',
};

function MyButton() {
return <button style={buttonStyle}>Click Me</button>;
}

# CSS conditional stylings in React js

You can use ternary operators to add conditional stylings to your CSS.

# Applying Padding in Tailwind

Here are both approaches:

## Extended Spacing Scale:

If you've extended the spacing scale, you can use the custom classes:

<div class="py-32 px-12">Content</div>

## Arbitrary Values:

You can use arbitrary values directly:

## <div class="py-[3.2rem] px-[1.2rem]">Content</div>

# Why React?

- It's because those are normal variables and React.js doesn't know that it's going to be changed.
- And that react should respond or update DOM based on that.
- Those values are already rendered on DOM, there is no way they will be re-rendered.
- For that React.js provides a function called "useState"
- This type of function which starts with "use" is called hook.
- This is a special function which has some features provided by react.js
- we will learn about other hooks in future.

---

## Toggle Switch Component

A toggle switch component is a simple yet useful UI element that allows users to switch between two states, typically "on" and "off". It can be used for a variety of purposes such as enabling/disabling features, toggling visibility, and more.

**Features**

- A switch that toggles between on and off states.
- Change the appearance based on the current state (e.g., different colors for on and off).
- Display the current state (e.g., "On" or "Off").

**Key Concepts**

- Toggling state with useState: Use React's useState hook to manage the state of the toggle switch.
- Conditional styling based on state: Apply different styles depending on whether the switch is on or off.
- Event handling for the toggle action: Handle the click event to change the state of the switch.

**Detailed Explanation**

- State Management: We'll use the useState hook to manage whether the switch is on or off.
- Styling: We'll use conditional styling to change the appearance of the switch based on its state.
- Event Handling: We'll handle the click event to toggle the state of the switch.

---

## Part 1: Simple Todo List in React

**Title:** Creating a Simple Todo List in React with Best Practices

**Overview:**
In this video, we'll start with the basics of building a simple Todo List in React. We'll focus on setting up the project, creating components, and managing state effectively.

**What We Will Do Today:**

- Set up the React project.
- Create the main `Todo` component.
- Build the `TodoForm` component for adding tasks.
- Use the `useState` hook to manage the list of tasks.
- Implement basic form validation to ensure tasks are not empty.
- Discuss best practices for component structure and state management.

**Important Points to Keep in Mind:**

- Ensure your component structure is clean and maintainable.
- Use controlled components for form inputs to handle state correctly.
- Keep functions simple and focused on a single task.

---

## Part 2: Adding a Real-Time Clock to Display the Current Date and Time

**Title:** Enhancing Our Todo List with a Real-Time Clock

**Overview:**
In this part, we'll integrate a real-time clock into our Todo List application. This feature will display the current date and time, updating every second to help users manage tasks efficiently.

**What We Will Do Today:**

- Create the `TodoDate` component to show the current date and time.
- Use `useEffect` and `useState` hooks to manage the clock's functionality.
- Format the date and time for user-friendly display.
- Integrate the `TodoDate` component into our main `TodoApp`.
- Style the clock to fit seamlessly with our application's design.

**Steps:**

1. **Create the `TodoDate` Component:**

   - Define the `TodoDate` component using functional component syntax.
   - Initialize `useState` for `dateTime` to store the current date and time.

2. **Update the Date and Time:**

   - Use `useEffect` to set up an interval that updates `dateTime` every second.
   - Inside the interval, create a `Date` object to get current date and time.
   - Format using `toLocaleDateString` and `toLocaleTimeString`.
   - Update `dateTime` state with formatted date and time.

3. **Clean Up the Interval:**

   - Ensure interval cleanup in `useEffect` return function to prevent memory leaks.

4. **Integrate `TodoDate` into `TodoApp`:**

   - Import and include `TodoDate` component in the header of `TodoApp`.

5. **Style the Clock:**
   - Apply CSS to style the clock (`date-time` class) for clarity and readability.

**Important Points to Keep in Mind:**

- Use `useEffect` cleanup to clear intervals.
- Format date and time for user readability.
- Ensure clock styling matches application design.

### Why Use useEffect for Cleanup

- When using setInterval directly without cleanup, intervals continue running even after the component is unmounted, leading to memory leaks.
- React's useEffect hook with a cleanup function ensures that the interval is cleared when the component is unmounted, preventing memory leaks.

---

## Part 3: Adding Delete Task and Clear All Task Functionality

**Title:** Adding Date, Delete and Clear All Functionality to React Todo List

**Overview:**
In this video, we'll enhance our Todo List by adding functionality to delete individual tasks and clear all tasks at once.

**What We Will Do Today:**

- Implement a delete button for each task to remove it from the list.
- Create a clear all button to remove all tasks at once.
- Update the state and re-render the list after deletion.
- Discuss user experience and the importance of confirmation dialogs for destructive actions (optional).

**Important Points to Keep in Mind:**

- Ensure that each task has a unique key for efficient rendering.
- Handle state updates carefully to avoid unintended side effects.
- Consider edge cases, such as trying to delete a task from an empty list.

---

## Part 4: Enhancing React Todo List with Reusable Components and Separation of Concerns

**Title:** Implementing Reusable Components and Separation of Concerns for Efficient Todo List Management in React

**Overview:**
In this session, we'll optimize our Todo List application by refactoring it into reusable components and emphasizing separation of concerns. We'll integrate components for adding tasks (`TodoForm`), displaying tasks (`TodoLists`), and managing date/time display (`TodoDate`) to enhance code clarity and maintainability.

**What We Will Do Today:**

- Refactor existing code to create reusable components:
  - Implement `TodoForm` component for adding tasks.
  - Create `TodoLists` component for displaying tasks and managing their actions.
  - Integrate `TodoDate` component for real-time date and time display.
  - Utilize props to establish communication between components.
- Explore efficient state management techniques:
  - Utilize `useState` hook for managing task data within the `Todo` component.
  - Implement functions for adding, deleting, and clearing tasks.
- Emphasize separation of concerns:
  - Ensure each component handles specific functionalities independently.
  - Maintain clarity and reusability by separating UI logic from data management.

**Key Focus Areas:**

- Designing components to enhance reusability and simplify future modifications.
- Implementing clear boundaries between components to improve code maintainability.
- Demonstrating practical strategies for effective state management and component communication in React applications.

**Next Steps:**

By the end of this session, you'll have a robust Todo List application leveraging reusable components and separation of concerns, demonstrating best practices for scalable React application development.

---

## Part 5: Best Ways to Pass Keys and Mark Tasks as Complete/Incomplete

**Title:** Using Keys Efficiently and Toggling Task Completion in React

**Overview:**
In this video, we'll dive into the best practices for using keys in React and add functionality to mark tasks as complete or incomplete.

**What We Will Do Today:**

- Discuss the importance of unique keys in React and how to generate them.
- Show the best practices for passing keys, using objects for task data.
- Implement the functionality to mark tasks as complete or incomplete.
- Update the state to reflect task completion and re-render the list.

**Important Points to Keep in Mind:**

- Keys should be unique and stable. Avoid using indices as keys.
- Use objects to store task data, including properties like `id`, `content`, and `checked`.
- Ensure the UI reflects the completion state of each task (e.g., strikethrough for completed tasks).

---

## Part 6: Adding Local Storage Functionality to Persist Data

**Title:** Persisting Todo List Data with Local Storage in React

**Overview:**
In this video, we'll add local storage functionality to our Todo List, ensuring that tasks persist even after a page refresh.

**What We Will Do Today:**

- Implement local storage to save and retrieve task data.
- Update the state with data from local storage on component mount.
- Ensure tasks are saved to local storage whenever the state changes.
- Discuss the importance of stringifying data for local storage.

**Important Points to Keep in Mind:**

- Local storage stores data as strings. Use `JSON.stringify` to save data and `JSON.parse` to retrieve it.
- Handle cases where local storage is empty or data is corrupted.
- Use `useEffect` to synchronize state with local storage on mount and state changes.

---

## Part 7: Hosting the Todo List on Free and Paid Servers

**Title:** Hosting Your React Todo List on Free and Paid Servers

**Overview:**
In this final video, we'll explore how to host our React Todo List application on both free and paid servers.

**What We Will Do Today:**

- Discuss the differences between free and paid hosting options.
- Walk through the process of deploying the app on a free server (e.g., GitHub Pages, Netlify).
- Show how to deploy the app on a paid server (e.g., Heroku, AWS).
- Ensure the app is properly configured for deployment, including handling environment variables and build processes.

**Important Points to Keep in Mind:**

- Ensure all necessary build steps are completed before deployment.
- Check that the app is configured to handle routing correctly in a deployed environment.
- Consider security and performance aspects, such as HTTPS and caching, when deploying to production.

---

## Rule 1 - Only Call Hooks at the Top Level & Never insides Conditions or Loops

Incorrect:

```js
function MyComponent() {
  const [count, setCount] = useState(0);

  if (count > 0) {
    const [text, setText] = useState(''); // This is incorrect
  }

  // More component logic...
}
```

Correct

```js
function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(''); // Always call Hooks at the top level

  if (count > 0) {
    // Conditional logic here...
  }

  // More component logic...
}
```

## Rule 2 - Only Call Hooks from React Functions

incorrect

```js
function regularFunction() {
  const [count, setCount] = useState(0); // This is incorrect bcz it's a regular function
}

function MyComponent() {
  regularFunction();

  // More component logic...
}
```

correct

```js
function MyComponent() {
  const [count, setCount] = useState(0); // Call Hooks directly in React function components

  // More component logic...
}
```

Here's a summary of the steps used to implement a Dark/Light mode toggle in React:

### Create a Context:

const ThemeContext = createContext();
This context will store the current theme and the function to toggle it.

## Create a Provider Component:

Define a ThemeProvider component that wraps its children with the ThemeContext.Provider.
Inside ThemeProvider, use the useState hook to manage the theme state, initialized to "light".
Define a toggleTheme function that switches the theme between "light" and "dark".

## Provide Context Values:

Pass the theme state and toggleTheme function as the value of the ThemeContext.Provider.
This allows any child component to access and manipulate the theme.

## Consume the Context in a Component:

In the DarkLight component, use the use hook to consume the ThemeContext.
Destructure the theme and toggleTheme from the context.

## Apply Conditional Styling:

Use conditional class names to apply different styles based on the current theme value.
Adjust the background color, text color, and button label according to the current theme.

## Toggle the Theme:

Attach the toggleTheme function to a button's onClick event.
This allows the user to switch between light and dark modes by clicking the button.
