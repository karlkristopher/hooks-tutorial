import React, { useState } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  const [count, setCount] = useState(0)
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  /*   useEffect(() => {
    console.log('render')
    return () => {
      console.log('unmount')
    }
  }, [values.email]) */

  return (
    <div>
      <div>{loading ? "loading.." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c+1)}>increment</button>
      <input
        type="email"
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
};

export default App;
