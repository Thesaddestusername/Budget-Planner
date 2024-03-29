# Budget-Planner-Project-Report
476 Software Development Project Report
---
## Contributers
- Hunter Bayliss (Thesaddestusername)   *baylissh@uregina.ca*
- Levi Brown (Lebbl)           *lsb360@uregina.ca*
- Braden Breit (Bradenzee)     *bbb560@uregina.ca*
- Reanne Daviduk (reannedaviduk)   *rcd714@uregina.ca*
---
### Problem Definition: outline the problem requirements and include the application domain and motivations of your project. 
>  1. Problem Description
>     - Develop a web application for a personal budget tracker that tracks and organises income, expenses, and overall spending. The software prioritises user-friendliness, customizability, and privacy. 
>  2. Requirements Elicitation
>     - 2.1 User Roles
>         - Parent
>         - Child
>     - 2.2 Functionality for Parent<br/>
>       Sign up: Parents should be able to sign up with their email.<br/>
>       Log in: Parents should be able to login using the same credentials used to sign up.<br/>
>       Add Child: Parents should be able to add children to their accounts. <br/>
>       Viewing Transactions: Parents should be able to view their transactions. <br/>
>       Viewing Childs transactions: Parents should be able to view the transactions of the children they have added included in all transactions. <br/>
>       Adding income: Parents should be able to add their own incomes. <br/>
>       Deleteing income: Parents should be able to delete incomes from themselves and their children. <br/>
>       Adding expenses: Parents should be able to add their own expenses. <br/>
>       Deleting expenses: Parens should be able to delete expenses from themselves and their children. <br/>
>     - 2.3 Functionality for Child<br/>
>     Sign up: children should be able to sign up with their email.<br/>
>     Log in: children should be able to login using the same credentials used to sign up.<br/>
>     Viewing Transactions: Children should be able to view ONLY THEIR OWN transactions. <br/>
>     Adding income: Children should be able to add their own incomes. <br/>
>     Deleteing income: Children should be able to delete ONLY THEIR OWN incomes. <br/>
>     Adding expenses: Children should be able to add their own expenses. <br/>
>     Deleting expenses: Children should be able to delete ONLY THEIR OWN expenses. <br/>
>     - 2.4 Qualities Requirements
>         - **User-Friendliness:**  displays information in an aestetically pleasing manner, highlighting important information, easy and intuitive navigation through the application and its functions.
>         - **Customizability:**  provide a well-rounded template for the user to tailor the system to their needs.
>         - **Correctness:**  application should display current figures with accuracy.
>         - **Privacy:**  although banking information is not exchanged with the application, a secure login procedure protects the privacy of the user.
>  4. Application Domain
>     - The application domain of our project is personal finance management. Our software aids in effectively managing personal finances by tracking income, expeneses, savings, investmenets, and other transactions. It is specifically desgined for managing finances of individuals and immediate families. 
>  5. Motivations
>     - The inspiration for this application comes from the lack of accessible and easy-to-use online budget tracking and planning services. Traditional banking apps can be hard to use and extract meaningful information from. Competing online budget planners and trackers come with a price tag and are missing key functionalities.

### Application Benefits: what are the benefits of your application when compared to existing systems. Choose two systems only and include their reference. 
> According to Rachel Murphy and Courtney Reilly-Larke in Forbes Advisor's [Best Budgeting Apps for Febrary 2024](https://www.forbes.com/advisor/ca/banking/best-budgeting-apps/), YNAB (You Need a Budget) holds the title of best budgeting app for achieving financial goals, and PocketGuard is named best budgeting app for tracking spending. These applications were selected to best compare our software to based on the basic functions and principles we have built our application around.\
> \
> Firstly, [YNAB](https://www.ynab.com/) is best recognized for “focusing on your present situation and future possibilities” to help consumers meet their financial goals. Some of the main pros to this application are accessibility from several different devices, shareability (with one other person), and live assistance from staff. Whereas the cons outlined in the Forbes Advisor column state that the user interface isn’t much different from a Microsoft Excel spreadsheet, and there is a lack of investment tracking. YNAB offers a 34 day, risk-free trial followed by a subscription at $20 CAD a month or $132.20 CAD a year.\
> ![image](https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/e08d8ef9-142b-4fba-bf85-2004b76acbec)

> \
> In contrast, our budget tracker and planner website offers free services that meet the same needs YNAB fills and more. Our unique approach prioritises families financial needs by not only allowing a shared account with one other person, but with the whole family. Our website is so user-friendly that even children are able to use it and gain experience with planning budgets and tracking finances. Unlike YNAB, we offer the ability to input and track your investments. Although there can be benefits in only looking at the present and future of your finances, we believe that there is valuable information that lies within previous spending habits that can be useful when making financial goals. That is why our budget tracker and planner utilises your past spending habits to analyse and point out trends that can help steer you in the right direction when it comes to paying off debt, acquiring savings, etc.\
> \
> The next existing application we’ve chosen to compare is [PocketGuard](https://pocketguard.com/), which is said to be most effective to track your spending. With easy to read diagrams like pie charts and drop down menus, it establishes an effective way to visualise overspending. Another major pro of this application is the ability to link and integrate online bank accounts from thousands of different institutions. In addition, PocketGuard makes it easy to build custom budgets and set goals for savings. Some downsides of this application are the limited features to free users and it is said to be quite challenging to navigate. Along with the free version, they also offer a “Plus” version that costs the user $10.67 CAD monthly, $46.72 yearly, or $106.81 CAD for lifetime.\
> ![image](https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/7ae18e57-d92a-4a80-b03d-034dc91be971)

> \
> Unlike PocketGuard, our application is intuitive and easy to navigate. So much so that even children are able to use it with ease. Our application also integrates the use of diagrams that are pleasing to the eye and make it easy to visualise spending patterns. Additionally, we offer full use of all our features to customers for free. Although PocketGuard is substantially more affordable than YNAB, we believe that an application that delivers budgeting and financial tracking capabilities should not add more stress to your bank account.\


### Requirements Elicitation and Specification
Functional Requirements list (only the ones that you have implemented) for each user role. Name each requirement and explain it briefly. 
> In order for both parents and children can properly use their finance app, we have implemented these requirements: <br/>
> PARENT ROLE ----------------------------------- <br/>
> Sign up: Parents should be able to sign up with their email.<br/>
> Log in: Parents should be able to login using the same credentials used to sign up.<br/>
> Add Child: Parents should be able to add children to their accounts. <br/>
> Viewing Transactions: Parents should be able to view their transactions. <br/>
> Viewing Childs transactions: Parents should be able to view the transactions of the children they have added included in all transactions. <br/>
> Adding income: Parents should be able to add their own incomes. <br/>
> Deleteing income: Parents should be able to delete incomes from themselves and their children. <br/>
> Adding expenses: Parents should be able to add their own expenses. <br/>
> Deleting expenses: Parens should be able to delete expenses from themselves and their children. <br/>
> CHILD ROLE ----------------------------------- <br/>
> Sign up: children should be able to sign up with their email.<br/>
> Log in: children should be able to login using the same credentials used to sign up.<br/>
> Viewing Transactions: Children should be able to view ONLY THEIR OWN transactions. <br/>
> Adding income: Children should be able to add their own incomes. <br/>
> Deleteing income: Children should be able to delete ONLY THEIR OWN incomes. <br/>
> Adding expenses: Children should be able to add their own expenses. <br/>
> Deleting expenses: Children should be able to delete ONLY THEIR OWN expenses. <br/>


For each user role, provide the use case diagram with all the use cases and actors.
> ![useCaseBudgetBuddy](https://github.com/Thesaddestusername/Budget-Planner/assets/72892765/2f6093d9-23fa-426a-ba92-f4a5bd512f55)

Describe in detail two use cases using the activity diagram. Choose the most complex use cases.<br/>
> <img width="613" alt="ParentActivityDiagram" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/67f165cc-d624-465e-a320-9e8c9ce1022b"><br/>
> Use Case One: Adding A New Child Using the Parent Role<br/>
> Step 1: Login or create an account, enter a valid email and password to pass authentication.<br/>
> Step 2: From the Graph View page, select Add Child in the navigation bar to view and add new children.<br/>
> Step 4: Enter a valid username and password of a child to pass authentication.<br/>
> Step 5: Submit form and new child will be listed under "My Children".<br/>
> Step 6: Log out.<br/>

> <img width="519" alt="ChildActivityDiagram" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/12a41a16-82eb-4721-8827-383fa8446428"><br/>
> Use Case Two: Add A New Income Source Using the Child Role<br/>
> Step 1: Login or create an account, enter a valid email and password to pass authentication.<br/>
> Step 2: From the Graph View page, select Income in the navigation bar.<br/>
> Step 3: Define income name, amount, date, type, and optional notes on left hand side of income page.<br/>
> Step 4: Save changes to new income, it will appear on the right hand side of the income page.<br/>
> Step 5: Log out.<br/>




Software qualities. Include at least two concrete examples for each quality for each user role. 
> 1. Correctness<br/>
> ---------------------------------<br/>
> Child Role:<br/>
> Use Case: A child adds a 20$ fast-food expense on 02-04-2024 name "mcdonalds"<br/>
> Expected Outcome: The dollar ammount(20$) will be correctly displayed with up to 2 points of precision for the parent and child as well as be reflected in their total balances. The type (fast-food) should display correctly via graphic icon along with the correct name (mcdonalds) and date with correct formatting (DD/MM/YYYY).<br/>
>Parent Role:<br/>
> Use Case: Parent adds a second child (stephanie@gmail.com) to their account.<br/>
> Expected Outcome: The child should display accurately under child 2 with the correct email. The parent should now be able to correctly view and manage stephanie's finances percisely.<br/>
> ---------------------------------<br/>
> 2. Time-Efficiency<br/>
> Child Role:<br/>
> Use Case: Adding an income of 300$ with accompanying fields. (label, type, etc) <br/>
> Expected Outcome: The income should be added to the database and show on the same page immediately. The total balance and graphs should also update quickly/in real time based on this change.<br/>
> Parent Role:<br/>
> Use Case: Deleting a childs income<br/>
> Expected Outcome: The income should be removed from database and be removed from the same page immediately. The total balance and graphs should also update quickly/in real time based on this change.<br/>
> ---------------------------------<br/>
> 3. Robustness <br/>
> Child Role:<br/>
> Use Case: Creating an account.<br/>
> Expected Outcome: An error message will appear displaying the correspoding issue in any of theses cases: any of the required fields are empty, the account already exists, the email is not valid, the password does not match the re-typed password. Otherwise it will sign up and log the user in. <br/>
> Parent Role:<br/>
> Use Case: Adding a child.<br/>
> Expected Outcome:  An error message will appear displaying the correspoding issue in any of theses cases: any of the required fields are empty, the child has already been added, adding the currently logged-in account as a child of itself. Otherwise it will add and display the child.<br/>

### Top-level and low-level Software Design
Provide the MVC architecture according to the selected Web framework. Also, describe at least three benefits of using MVC for your application.
> Our team decided to use React to create our web based application, and it is important to note that React itself is not a framework. However, for this project we did end up using its dedicated framework called "Create React App".<br/>
>The MODEL for this architecture is represented in our code as React's built-in state management system that provides us with useful hooks such as "useState". We also make use of more advanced state manegment systems such as React's Context API, where we create a MainContext to be a provider of crucial information across our system.<br/>
> The VIEW in terms of the "Create React App" framework is simply the components that display our data and change based on user interaction. These components found throughout our project, often as UI components, that we decided to create with javascript and React's component syntax.
> A characteristic that makes React so useful is that The CONTROLLER aspect can also be handle by user defined components. To explain, the components themselves can contain the logic that we need to handle user input and changing states. However, we also use specific controllers, middleware, and axios for our backend queries.

Observer and Factory design patterns. Explain in detail the usability of these two patterns for your specific application. Include the complete class diagram for each pattern. For each class, provide the data types of the attributes and prototypes of the methods. 
> Both of the Observer and Factory pattern are very usable in our application. For example, the observer pattern can be used to pass around data from one provider so our components are as loosely coupled as possible. Our mainContext acts as the provider/publisher/subject in the observer pattern. It passes useful information from the database like income, expense, and user info, as well as states like isLoggedIn to our UI components. These UI components acts as the observer and are loosely coupled as they do not have to rely on each other, just react based on the information they receive from mainContext. <br/> The factory pattern is also extremely useful as We can have cohesive and accurate criteria/data-checking for our information, as well as provide a structured way to create/delete data for our observers. The database is responsible for creating instances based on certain criteria which can be passed to mainContext for observer use.

observer pattern

> ![firefox_G6hGu5R4Lp](https://github.com/Thesaddestusername/Budget-Planner/assets/30159056/dbcf998d-0843-4f09-8339-6f57a94b7636)

factory pattern

> ![firefox_Rj4sXQbKqr](https://github.com/Thesaddestusername/Budget-Planner/assets/30159056/016069df-51a8-4d9c-adcf-d772fe3edf5b)

Provide the class diagram of the whole system by incorporating the two design patterns. 

> ![firefox_UcOLexB1Da](https://github.com/Thesaddestusername/Budget-Planner/assets/30159056/9365c635-03e5-45c3-8d3d-9227f708435a)

### Software Construction
Submit the entire code for observer and factory patterns.
> The code is already submitted above. However the observers, and more specifically subsrcibers, within our code are the components that need to be notified of changes in the data or state. This would include many of our components, epspecially ones related to UI.<br/> A comprehensive list based on file path are as follows:<br/>
>frontend/budget-buddy/src/components/addChild <br/>
>frontend/budget-buddy/src/components/dashboard <br/>
>frontend/budget-buddy/src/components/expenses <br/>
>frontend/budget-buddy/src/components/form <br/>
>frontend/budget-buddy/src/components/form2 <br/>
>frontend/budget-buddy/src/components/graphs <br/>
>frontend/budget-buddy/src/components/incomes <br/>
>frontend/budget-buddy/src/components/logIn <br/>
>frontend/budget-buddy/src/components/logOut <br/>
>frontend/budget-buddy/src/components/navigation <br/>
>frontend/budget-buddy/src/components/recentHistory <br/>
>frontend/budget-buddy/src/components/signup <br/>
>The publisher/provider/subject of the observer pattern is the pertenant data that needs observed. This includes {addIncome(function), getIncomes(function), incomes(array), deleteIncome(function), calcTotalIncome(function), addExpense(function), getExpenses(function), deleteExpense(function), calcTotalExpense(function), expenses(array), calcTotalBalance(function), recentTransactionHistory(array), signUp(function), error(string), getLoggedIn(function), setLoggedIn(function), logOut(function), getChildren(function), userChildren(list of objects), deleteChild(function), getUserInfo(function), userInfo(array), addChild(function), setError(function).}<br/>
>This can be found within:<br/>
>frontend/budget-buddy/src/context/mainContext.js <br/>

> The factory within the factory design pattern is the component responsible for creating instances of objects based on certain criteria. This is best represented in our code, and project, as our database. This includes error-checking/criteria, data generation, and data deletion, which can be grabbed by mainContext for observer use. <br/>
>This can be found within:<br>
>backend/objectmodels

Structure of the code within the web framework.
> ![image](https://github.com/Thesaddestusername/Budget-Planner/assets/72892765/7b3a0d3a-0273-4fbc-b5b0-e442292a87a3)

Deployment diagram regarding hardware configuration of the code. Indication the supported Web browser, the application/Web servers and the database solution.
>![deploymentDiagram (1)](https://github.com/Thesaddestusername/Budget-Planner/assets/72892765/86632ced-bd02-4293-9082-4154549d0f0e)

Table of Contents of the System Data
> System data tables for user information:<br/>
>![image](https://github.com/Thesaddestusername/Budget-Planner/assets/72892765/412f9fc0-2abe-41d8-938b-cef108d0e0b6) <br/>
> System data tables for incomes:<br/>
>![image](https://github.com/Thesaddestusername/Budget-Planner/assets/72892765/fb7c3708-65ed-4030-b581-a718ba55a997)<br/>
> System data table for expenses:<br/>
>![image](https://github.com/Thesaddestusername/Budget-Planner/assets/72892765/55872bc7-4111-456c-be55-4a7556b716a5)

### Technical Documentation
List of Programming Languages
> JavaScript, CSS, HTML

List of reused algorithms and small programs with references
> Inspiration and example for structure: https://github.com/Maclinz/expense-tracker_fullstack<br/>
> Express JWT auth Example for backend purposes: https://github.com/iamshaunjp/node-express-jwt-auth <br/>
> Frontend signup/login page reference and example: https://github.com/gitdagray/react_login_form <br/>

List of software tools and environmets. Provide briefly their benefits specifically for your application.
> -----backend-------- <br/><br/>
> Node.js - Node.js is the backbone of the backend software for our project, making it vital to the opreation of the application. <br/><br/>
> Express - Express is a helpful Node web framework that allows for the use of middleware functions. Express was particularly helpful for this application because middleware functions are a vital part of ensuring users are properly authenticated before they can access sensitive information. <br/><br/>
> Mongodb - Mongodb is described as a widely known and available document oriented database program, classifying as a NoSQL database. Mongo utilises JSON-link documents to store information, making it significantly easier to push and pull information from a web application. For that reason alone, Mongodb was a great fit for our application. <br/><br/>
> dotenv - Dotenv is a node module that allows for the loading of environmental variables from a single .env file. This was beneficial to our application since we could store sensitive information such as Database connection information, JWT Token keys, and port numbers hidden from the public domain. <br/><br/>
> Mongoose - Mongoose is a node extension that is designed to work in asyhcnronous environments for accessing and writing to a Mongodb database. Advantages include the asynchronous functionality, along with the integration with node for simpley database querying. <br/><br/>
> JWT - JWT (JsonWebToken) is a node extension that is designed to generate a web token for user authentication. By generating a unique token for each user and storing it as a cookie, JWT allows our application to authenticate users via cookies. It's also important as a means for protecting the database from unauthorized requests, as the cookie is used to check is the user can query the database. <br/><br/>
> Postman - Postman is a desktop application that is helpful for testing backed API's. While not used in our final product, Postman was monumental for building the backend and performing testing independently of the front-end to help isolate and better understand any issues while under development. <br/><br/>
> Validator - Validator is a simple string verification extension for node. It is helpful for verifying information stored in a string, such as ensuring an email is of valid format. Validator was beneficial for our application since it allowed the verification of data before sending it off to the database. <br/><br/>
> bcrypt - bcrypt is a node extension that was used for password hashing. To ensure that no data is leaked, user passwords are hashed with bcrypt before being stored to ensure better privacy and peace of mind for users. <br/><br/>
> cookie-parser - Cookie-parser was used as a part of our application to parse through the user cookie for authentication purposes. <br/><br/>
> nodemon - Nodemon is a tool that helps with the development of Node.js applications by restarting the application when a file change is detected. While not important for the final product of our application, nodemon was monumental for quickly applying changes to the backend without having to manually restart the node application. <br/><br/>
> cors - Cors serves as a tool for ensuring that requests are only sent by known hosts. This being installed on the backend, it only allows requests from the application to access the database. While not entirely helpful to the functionality of the application, it is an important security measure. <br/><br/>
-----frontend-------- <br/>
> axios - Axios makes communicating with the server via .post, .get, and other commands simple for the frontend.<br/><br/>
> chart.js - Gives the frontend many simple to use tools to display many different kinds of graphs.<br/><br/>
> moment - Moment was only used to create a global date formatting component.<br/><br/>
> React - React makes frotend development easy to manage with is component based architecture and focus on an easy to read type script. <br/><br/>
> react-charsjs-2 - Basically an add on to chartjs for more features and graphs.<br/><br/>
> react-datepicker - was one of the simpliest tools to add datepickers to our forms.<br/><br/>
> react-dom - The react-dom dependency is responsible for rendering React components into the DOM (Document Object Model) and provides additional functionality for working with the DOM in React applications, such as event handling and DOM manipulation <br/><br/>
> react-scripts - The react-scripts dependency is a set of scripts and configuration used by Create React App to streamline the development process it allows for  pre-configured build setup, hot reloading, etc.<br/><br/>
> styled-components The styled-components dependency allows you to write CSS in javascript. This lets you style React components with scoped styles that are easier to read and that can dynamically change based on props. <br/><br/>
> web-vitals - The web-vitals dependency provides a way to measure and track essential user-centric performance metrics, such as Core Web Vitals (LCP, FID, CLS), helping us monitor and improve the overall performance of our application. Even during debugging we did not take full advantage of this dependancy. <br/><br/>
### Acceptance Testing
Correctness testing using four test cases only (sc of both inputs and outputs).
> Correctness Test Case 1: Login<br/>
> <img width="1128" alt="Screenshot 2024-03-27 191609" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/fbfd3f63-f8d4-4b59-a3dd-e5fda8be7d86"><br/>
> <img width="1128" alt="Screenshot 2024-03-27 191628" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/aae1002d-0440-4517-ab26-41022ceaadd7"><br/>
> Correctness Test Case 2: Add Income<br/>
> <img width="1128" alt="Screenshot 2024-03-27 190637" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/ed485eb6-4a72-48bd-b3ef-4f6d6256d961"><br/>
><img width="1128" alt="Screenshot 2024-03-27 190646" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/56d76be1-89a6-42ff-b13b-45fff4c0476c"><br/>
>Correctness Test Case 3: Add Expense<br/>
><img width="1128" alt="Screenshot 2024-03-27 191020" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/3c20fb58-2257-4fd3-bc83-82a26b945cf9"><br/>
><img width="1128" alt="Screenshot 2024-03-27 191027" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/30344ba8-62ca-4135-be7e-a89adbdde1aa"><br/>
>Correctness Test Case 4: Add Child<br/>
><img width="1125" alt="Screenshot 2024-03-27 212249" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/95499af8-cbdb-4728-89d7-4141b7d0326e"><br/>
><img width="1128" alt="Screenshot 2024-03-27 191256" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/8e4fc6ad-9e44-4f5f-9b8e-819fbb6c3a73"><br/>

Robustness testing
> Robustness Test Case 1: Failed Log In - Incorrect Email or Password<br/>
><img width="1128" alt="Screenshot 2024-03-27 180239" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/ed0c9091-3e78-4fb1-9175-17f381a00e3e"><br/>
><img width="1128" alt="Screenshot 2024-03-27 180246" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/c7bb9492-a066-4651-b1a5-4478a4dec087"><br/>
>Robustness Test Case 2: Failed Sign Up - Passwords Do Not Match<br/>
> <img width="1128" alt="Screenshot 2024-03-27 180457" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/159c3f41-861d-41ae-9a41-a17e51aed1a4"><br/>
><img width="1128" alt="Screenshot 2024-03-27 180437" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/112012a7-870b-4a16-b3ac-374dfdafb919"><br/>
>Robustness Test Case 3: Failed Sign up - Invalid Email and/or Password
> <img width="1128" alt="Screenshot 2024-03-27 180320" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/a8914396-354f-4003-bdad-19cf25b0eb88"><br/>
><img width="1128" alt="Screenshot 2024-03-27 180401" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/72fb2ee6-792f-489f-a8aa-a26784d4447e"><br/>
Robustness Test Case 4: Add Child - Cannot Add Yourself As A Child<br/>
><img width="1128" alt="Screenshot 2024-03-27 191503" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/c7dbb5d8-1389-4b82-87d4-f7ffec683fd2"><br/>

Time-efficiency testing of two functions only. Indicate the method you used to measure the time. 
> We used the postman event timer to compare time efficiency between 2 functions: Adding an income vs adding a child. The income adds much faster at 143.67ms while the add child is 367.57ms. <br/>
> Function 1: Adding an Income<br/>
><img width="1128" alt="Screenshot 2024-03-27 190637" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/1108691c-e584-4071-8597-91fc193ff2f9"><br/>
><img width="1128" alt="Screenshot 2024-03-27 190646" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/422ecaa2-a521-4e72-af4e-cafa54e70ec2"><br/>
>![image](https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/d0533d83-2916-436d-87af-3736cfe7190e)


> Function 2: Adding a Child<br/>
><img width="1125" alt="Screenshot 2024-03-27 212249" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/6ecc9f91-1502-4155-9fd9-20f69037fffb"><br/>
><img width="1128" alt="Screenshot 2024-03-27 191256" src="https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/ca468088-d822-4e35-9569-348f5907c18c"><br/>
>![image](https://github.com/Thesaddestusername/Budget-Planner/assets/158781323/57089ea5-86db-4b7b-ae90-5507dc30bc79)
