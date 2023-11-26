# React + Vite Project Setup

This section provides instructions on how to set up the project locally and how to run test cases.

## Working Demo

Experience the live demo of the project here: [Moving Robot Demo](https://moving-robot.netlify.app/)

## Local Setup

To set up the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Run the following commands in the project directory:

   ```bash
   npm install   # Installs project dependencies
   npm run dev   # Starts the development server

## Running Test Cases

To run the test cases for the project, use the following command:

```bash
npm run test  # Executes the test cases
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Robot Movement Simulation

## Challenge Overview

This coding challenge involves creating a program using ReactJS to simulate the movements of a simple robot. The primary goal is to enable the robot to navigate a virtual table without falling off the edges.

## Basic Requirements

1. **Table Dimension**: The robot moves on a square table with dimensions of 5 units x 5 units.
2. **Initial Position**: The robot is initially placed at the cell (1,1).
3. **Movement**: The robot can move North, East, South, or West, one unit at a time. Implement navigation buttons for these movements.
4. **Teleportation**: Clicking/tapping on a cell teleports the robot to that cell, enabling it to travel in any direction from there.

## Optional Enhancements

- **Teleportation Delay**: Implement a delay for teleporting, proportional to the distance the robot must travel.

![Robot Movement Simulation UI](image.png)

*Note: The above image provides a basic UI reference. You are encouraged to enhance both the UI and functionality.*

## Additional Guidelines

- **Best Practices**: Consider design patterns, best practices, and testability in your implementation.
- **Unit Testing**: Include at least one unit test, focusing on the most critical component of your application.
- **Submission**: Submit your solution as a standalone project, an online project hosted on platforms like codesandbox.io, or a GitHub repository.
