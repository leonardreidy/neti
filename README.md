# Dev Container for TypeScript and Express.js

This is the complete source code for the article ["A Dev Container Template for TypeScript and Express.js"](https://manfredmlange.medium.com/a-dev-container-template-for-typescript-and-express-js-31c972862785).

# Prerequisites to Run the Dev Container

This dev container is designed and intended to run on Linux, MacOS and Windows. The following software must be installed on your machine:

1. Docker Desktop
2. VS Code with extension "Remote Development" installed
3. git client
4. Windows only: WSL2 installed and running, git configured to use Windows Credentials Manager

# Changes Since the Article

- Added tsoa
- Added inversify including sample Types and binding examples
- Added example for custom jest matcher, for Decimal in this case
- Switched from npm to pnpm for performance and size reasons
- Added example Environment class and IEnvironment interface
- Example controller
- Example for dependency injection using inversify
- File `beforeAllTests.ts` to demonstrate where to put code that runs before any test is run
- `jest.config.ts` to demonstrate setting up jest including custom patterns for micro and integration tests
- script `upgrade-all` that upgrades all dependencies to the latest stable version
- Added Copilot, Copilot Chat and Copilot Labs as extensions to dev container
- upgraded node.js to latest

# Planned Changes

In no particular order:
- Add open API documentation
- Add interaction with NATS
- Add OpenID client
- Add Open Policy Agent (OPA) with examples and tests
- Add nginx demon to demonstrate how to redirect ports to other containers
