```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use a condition to prevent infinite loop
    let intervalId;
    if (count < 10) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [count]);

  return <div>Count: {count}</div>;
}
```