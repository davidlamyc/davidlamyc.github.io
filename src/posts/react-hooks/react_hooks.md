---
title: "React Hooks"
description: "useEffect and useState, practically speaking"
date: "2021-01-31"
---

![react-hooks](./react_hooks.png)

I won't rehash the [documentation's](https://reactjs.org/docs/hooks-intro.html) contents on hooks, but simply give a couple of snippets that would be useful to someone who has to revisit React after some time away. (Ah, the plight of full-stack developers, too much context switching!)

## useState

`useState` lets you add state to function components. 

`useState` returns an array with two elements, where the first element is the current state, and the second element is a function that updates this piece of state. `useState` takes in the desired initial state as an argument.

The use of `useState` demonstrated, in the form of a trivial counter application:

```
import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(10)

    return (
        <div className="App">
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <p>{count}</p>
        </div>
    );
}

export default App;
```

In the above example, a variable is passed into the setter function. However, you can also pass in a function. This would work similarly, additionally preventing race conditions:

```
import React, { useState } from "react";

const App = () => {
    const [count, setCount] = useState(10)

    return (
        <div className="App">
            // Prevents race conditions
            <button onClick={() => setCount(currentCount => currentCount - 1)}>
                -
            </button>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>
                +
            </button>
            <p>{count}</p>
        </div>
    );
}

export default App;
```

A more practical example of `useState` would be to maintain the state of a form within an application, as shown below.

```
import React, { useState } from "react";

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
        <input
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        </div> 
    );
}

export default App;
```

If you have many fields in your forms, you can encapsulate individual `useState` hooks in a custom hook.

```
import React, { useState } from "react";

// custom hook
const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    return [values, e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }]
}

const App = () => {
    const [values, handleChange] = useForm({ email: '', password: ''})

    return (
        <div>
        <input
            name="email"
            value={values.email}
            onChange={handleChange}
        />
        <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
        />
        </div> 
    );
}

export default App;
```

## useEffect

Generally, every time a component renders, `useEffect` gets ran.

In the below example, `useState` updates the component state each time a keystroke is made into the input (loosely speaking), so as the component rerenders, `useEffect` logs some output to the console.

```
import React, { useState, useEffect } from "react";

const App = () => {
  const [myInput, setMyInput] = useState('')

  useEffect(() => {
    console.log("Rendered from useEffect")
  });

  return (
    <div>
      <input value={myInput} onChange={e => setMyInput(e.target.value)}/>
    </div>
  )
}

export default App;
```

You can control when rerenders happen by adding to second argument to the `useEffect` hook, which  is an array (known as the dependency array). In the example below, `useEffect` is ran when `myInput` changes. 

Do note, React does a shallow comparison here, so if you pass an object into the array, it will refresh every single time.

```
import React, { useState, useEffect } from "react";

const App = () => {
  const [myInput, setMyInput] = useState('');
  const [mySecondInput, setMySecondInput] = useState('');

  useEffect(() => {
    console.log("Rendered from useEffect")
  }, [myInput]);

  return (
    <div>
      <input value={myInput} onChange={e => setMyInput(e.target.value)}/>
      <input value={mySecondInput} onChange={e => setMySecondInput(e.target.value)}/>
    </div>
  )
}

export default App;
```

If the dependency array is empty, `useEffect` only runs when the component first loads, making the hook work the way `componentDidMount` would work in a class-based component.

Happy referencing, future self!