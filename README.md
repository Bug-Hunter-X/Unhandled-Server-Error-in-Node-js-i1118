# Unhandled Server Error in Node.js

This repository demonstrates a common yet easily missed error in Node.js: unhandled server errors. The `bug.js` file showcases a server that crashes silently after 5 seconds due to an unhandled error.  The solution (`bugSolution.js`) shows how to implement proper error handling using the `error` event listener.

## Bug

The server in `bug.js` doesn't properly handle errors, leading to a crash without informative logging. This type of error can be difficult to diagnose in a production environment.

## Solution

The improved server in `bugSolution.js` listens for the `'error'` event emitted by the `http.Server` object. This event provides a mechanism to catch errors gracefully and handle them appropriately, logging the error to the console, and potentially taking other recovery actions (e.g., restarting the server, notifying monitoring systems).

## How to run

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `node bug.js` to observe the unhandled error.
4. Run `node bugSolution.js` to see the solution and proper error handling.