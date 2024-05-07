# Assignment for CodeRoof
### Live Link : https://coderoof-assignment.netlify.app/

## Design Preferences

In my design strategy for this project, I've consciously opted to primarily employ pixel values (px) for defining CSS properties such as width, height, margin, and padding. While CSS provides a range of units like percentages (%), ems (em), and rems (rem), I've chosen pixels for their simplicity and precision.

Pixel values offer me fine-grained control over layout and styling, crucial for achieving exactness in design. This meticulous control ensures consistency and accuracy across various screen sizes and resolutions, enhancing the user experience.

However, it's important to acknowledge that while pixels excel in achieving pixel-perfect designs, they may not always be the most adaptable, especially when designs need to dynamically adjust to different screen dimensions. In such scenarios, I'm open to integrating relative units like percentages, ems, or rems.

My preference for pixel values reflects a balanced approach, aiming to deliver both a visually appealing and functionally robust user interface while remaining adaptable when needed.

## Tailwind CSS Integration
Tailwind CSS has been instrumental in streamlining the development process for this project. Its utility-first approach aligns well with my preference for pixel values, allowing me to swiftly apply precise styles without writing custom CSS. By leveraging Tailwind's extensive utility classes, I've maintained consistency in design while minimizing code redundancy.

Moreover, Tailwind's responsive design features complement my design strategy by facilitating seamless adaptation to various viewport sizes. Utilizing Tailwind's responsive breakpoints, I've ensured that the interface remains visually appealing and accessible across different devices and screen resolutions.

## Dynamic Population of Cards and Menu
All cards and the menu in this project are populated dynamically to enhance scalability and maintainability. By fetching data from a backend source or utilizing client-side JavaScript to generate content, I've created a dynamic user interface that can easily accommodate updates and additions without manual intervention.


## Implementation of onClick Event on Menu (Avatar , Styl ...)
The implementation of onClick event handling on the menu enhances interactivity and user engagement. By attaching JavaScript event listeners to menu items, I've enabled responsive navigation that responds to user interactions in real-time.





## Running Vite React Project Locally

This guide will help you set up and run a Vite React project on your local machine.

## Prerequisites

Before you begin, ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher)

## Installation

1. Clone the repository or download the project files to your local machine.

2. Open a terminal and navigate to the project's root directory.

3. Run the following command to install the project dependencies:

   ```
   npm install
   ```

   This will download and install all the necessary packages and libraries required for the project.

## Running the Development Server

1. In the terminal, make sure you are in the project's root directory.

2. Run the following command to start the development server:

   ```
   npm run dev
   ```

   This command will start the Vite development server and compile your React application.

3. Once the server is running, you will see output similar to the following:

   ```
   VITE v5.2.11  ready in 133 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    ➜  press h + enter to show help
   ```

4. Open a web browser and visit `http://localhost:5173` to see your React application running locally.

   The development server supports hot module replacement (HMR), so any changes you make to the source code will be automatically reflected in the browser without requiring a manual refresh.
