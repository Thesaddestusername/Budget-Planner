# Building the Backend

Here are some simple instructions on how to build the backend to be run locally. 

1. Ensure that you have NPM and NodeJS installed.
2. Run ```npm init``` in a terminal.
   - Ensure that you are in the correct directory (and in the backend folder) prior to  
   - Ensure that the entry point is set to index.js. The remainder of the settings can be left default
3. Once that is complete, run ```npm install express mongoose cors nodemon dotenv```
4. In the file ```package.json```, modify or add the following line under scripts: ```"start": "nodemon index.js"```
5. You should be able to run ```npm start``` and should be good to go from here.