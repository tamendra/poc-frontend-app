# POC Frontend App

This is a proof of concept (POC) frontend application designed to test GitHub Actions and secret management.

## Project Structure

```
poc-frontend-app
├── src
│   ├── index.html       # Main HTML document
│   ├── app.js           # JavaScript code for the application
│   └── styles.css       # Styles for the application
├── .github
│   └── workflows
│       └── ci.yml       # GitHub Actions workflow for CI
├── package.json          # npm configuration file
├── README.md             # Project documentation
└── .gitignore            # Files to ignore by Git
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd poc-frontend-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the application:
   ```
   npm start
   ```

## Usage

- Open `src/index.html` in your browser to view the application.
- Modify `src/app.js` to change the application logic.
- Update `src/styles.css` to customize the appearance.

## GitHub Actions

This project includes a GitHub Actions workflow located in `.github/workflows/ci.yml` that automatically builds and tests the application on every push.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.