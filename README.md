# PruebaTecnicaOri

SDET Take-Home Assessment – Login Automation
📌 Overview

This project implements automated end-to-end tests for the login functionality of:

https://the-internet.herokuapp.com/login

The solution is built using Playwright with TypeScript, following the Page Object Model (POM) design pattern to ensure maintainability, scalability, and clean separation of concerns.

Tech

Framework: Playwright
Language: TypeScript
Design Pattern: Page Object Model (POM)
Configuration Management: dotenv (.env)
Test Runner: Playwright Test Runner

📁 Project Structure
PruebaTecnicaOri/
│
├── e2e/
│   ├── pages/              # Page Object classes
│   └── selectors/          # Centralized selectors
│
├── tests/                  # Test specifications
│   ├── LoginPage.spec.ts
│   └── SecureArea.spec.ts
│
├── playwright.config.ts    # Playwright configuration
├── .env                    # Environment variables
├── package.json
└── README.md

⚙️ Prerequisites
Before running the project, ensure you have:
Node.js (v18 or higher recommended
npm (comes with Node.js)
You can verify your installation with:
node -v
npm -v
🔧 Project Setup

Clone the repository:
git clone <https://github.com/JoelJb20/PruebaTecnicaOri.git>
cd PruebaTecnicaOri
Install dependencies:
npm install
Install Playwright browsers:
npm install dotenv          
npx playwright install
🔐 Environment Variables

The project uses environment variables for credentials and base URL.
Create a .env file in the root directory:
BASE_URL=https://the-internet.herokuapp.com
USERNAME=tomsmith
PASSWORD=SuperSecretPassword!


⚠️ The .env file should not be committed to version control.

▶️ Running the Tests
Run all tests:
npx playwright test
Run tests in headed mode (visible browser):
npx playwright test --headed


Open the HTML report:
npx playwright show-report


✅ Implemented Test Cases
Login Page
Successful login with valid credentials
Login with invalid username
Login with invalid password
Secure Area
User can logout successfully
Unauthorized user cannot access secure area directly

Design Decisions
Page Object Model (POM)
The project follows the Page Object Model pattern:
Pages encapsulate actions and elements
Selectors are centralized
Tests contain only assertions and flow logic
This improves:
Readability
Maintainability
Scalability for larger test suites


Key Implementation Details

Environment variables are used to avoid hardcoding credentials.
Tests are independent and can run in any order.
Assertions are kept in test files, not inside Page Objects.
Centralized selectors improve maintainability.

