# Infinite Loop in React useEffect Hook

This repository demonstrates a common error in React's `useEffect` hook that can lead to an infinite loop. The problem arises from incorrectly specifying the dependency array, causing the effect to run continuously and update the state, which in turn triggers the effect again.