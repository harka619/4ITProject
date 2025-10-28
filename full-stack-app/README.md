# Full Stack Application

This is a full stack application built with React for the client-side and Express for the server-side. The application is structured to facilitate easy development and testing.

## Project Structure

```
full-stack-app
├── src
│   ├── client
│   │   ├── components
│   │   ├── pages
│   │   └── app.tsx
│   ├── server
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   └── app.ts
│   └── shared
│       └── types
├── tests
│   ├── client
│   └── server
├── package.json
├── tsconfig.json
└── jest.config.js
```

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd full-stack-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the client and server applications, run the following commands in separate terminal windows:

- For the client:
  ```bash
  npm start --prefix src/client
  ```

- For the server:
  ```bash
  npm start --prefix src/server
  ```

### Running Tests

To run the tests for both client and server applications, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.