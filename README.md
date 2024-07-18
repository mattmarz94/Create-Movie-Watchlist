# Create-Movie-Watchlist

This application will search the Movie Database API for any movie you may think of, and if it is not available it will provide a message. Once the movies are rendered you may add (+) any movie you would like to your "watchlist". You can go to your watchlist and find your favorite movies you would love to watch! Once done you can simply remove the movie from your watchlist by clicking the (-) button.

Creating this application was a great opportuninty to practice and fine tune these programming concepts and practices below.

JavaScript and Asynchronous Programming

Local Storage Operations:
Usage: Storing, retrieving, and removing movie data.
In-Depth: Local storage allows web applications to store data locally within the user's browser, enabling persistent data even after the browser is closed. By utilizing local storage, I could save user-specific watchlists, making the application stateful and user-friendly.

Callback Functions: To handle asynchronous code, I extensively used callback functions. These functions are crucial for managing tasks that take an indeterminate amount of time to complete, such as API calls or timers. By passing a function as an argument, I ensured that certain actions only executed once the previous ones were finished, preventing potential issues with timing and data availability.

Promises and Async/Await: Building on the foundation of callbacks, I worked with promises to streamline asynchronous operations. Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Using async and await, I wrote cleaner and more readable asynchronous code. This syntactic sugar allowed me to handle promises in a way that resembles synchronous code, significantly reducing complexity and improving error handling.

Fetch Method: The fetch method was pivotal in fetching resources from a server. It returns a promise that resolves to the response of the request. By focusing on the fulfilled state and utilizing the .then method, I effectively handled the resolved values of these promises, allowing for seamless data retrieval and manipulation.

CSS and Code Formatting
CSS Styling: This project also honed my CSS skills. I improved my ability to style elements dynamically based on user interactions and application state. Consistent and responsive styling is essential for user experience, and this project helped me solidify best practices in CSS.

Code Formatting: Proper code formatting is vital for maintainability and readability. Throughout this project, I emphasized writing clean, well-organized code. This not only makes it easier for others to understand and collaborate on the code but also helps in debugging and future updates.

Overall Impact
Creating the Movie Watchlist application led to a deeper understanding and appreciation of these programming concepts. By applying these principles in a real-world project, I gained insights into the inner workings of asynchronous JavaScript, efficient resource fetching, and the importance of clean, maintainable code. This experience has significantly enhanced my proficiency as a developer and my ability to build robust, user-friendly applications.
