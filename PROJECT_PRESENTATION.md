
# Hackathon Week 6 - Codewars style challenge

Our latest Hackathon challenge was to culminate all of our learning for this week and create tests indivdually, similar to how you find them on codewars.

 


##  Working Together

Each of us were given our own individual repo on github, with a test.js file and .js file, along with the accompanying docs required. It was up to us to come up with, create, and implement these tests on our own accord. 

We planned out our ideation together as a team, coming up with a theme we wanted, (to stay consistent with the testing) and discussed the structure, what they should look like, and how hard they should be to complete.

After our ideation phase was complete, it was time to start coding! We knew what test we needed to create and we knew we had the knowledge to succeed, so we got to it! We used pair-programming by having regular stand-ups, checking on eachothers progress and assisting to de-bug where necessary.

## Project Setup Guide
### Installation

1. Clone the project that you would like to test!

-  https://github.com/SchoolOfCode/week-6-hackathon-ConnerConner96
-  https://github.com/fenrissa92/week-6-hackathon-fenrissa92
-  https://github.com/SchoolOfCode/week-6-hackathon-codesungrape.git

2. Navigate to the project folder:
   ```bash
   cd your-project-folder
   ```
   **Why**: You must `cd` into the correct folder first; otherwise, NPM packages will be installed in your current working directory.
3. Initialize a Node.js project:
   ```bash
   npm init -y
   ```
4. Configure `package.json`: Add the following to your `package.json` file:
   ```json
   {
     "type": "module"
   }
   ```
---
### Testing Setup
1. Install Vitest:
   ```bash
   npm install -D vitest
   ```
   **Note**: Vitest is installed as a dev dependency since it's only needed during development/testing.
2. Verify your `package.json` includes Vitest in `devDependencies`:
   ```json
   {
     "devDependencies": {
       "vitest": "^latest_version"
     }
   }
   ```
3. Add a test script to your `package.json`:
   ```json
   {
     "scripts": {
       "test": "vitest"
     }
   }
   ```
4. Verify Vitest installation:
   ```bash
   npx vitest
   ```
   **Why**: Running Vitest verifies it's installed correctly. You should see a "no tests found" message or similar, indicating Vitest is running properly.

5. Now you're ready:
- You can now write your tests in `main.test.js` and run them with `npm test`.
- write your code in main.js ans when youre ready to submit, run the tests with 

```bash
`npm test`
```

Check your results! Did you pass? if so, try to think of a way to refactor the code and see if you can pass again!

Did you fail? if so, why? read through the error messages and check what needs to be corrected!


## Lessons Learned Throughout The Project
- We learned how to write tests for our code and how to test for different types of outputs.
- We learned how to use Vitest, and how to run tests using the command line.
- We learned how to structure our tests and how to write them in a way that is easy to read and understand.

## Authors

- [Conner Adamsons](https://github.com/ConnerConner96)
- [Shanti Rai](https://github.com/codesungrape)
- [Samantha Daly](https://github.com/fenrissa92)


## Acknowledgements

 - [Vitest](https://vitest.dev/guide)
 - [Stack Overflow](https://stackoverflow.com/)
 - [ChatGPT](https:chatgpt.com)
 - [W3School](https://www.w3schools.com/)
 - [readme](https://readme.so/editor)

