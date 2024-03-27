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
>     - 2.2 Functionality for Parent
>         - Input income streams.
>         - Input expected expenses.
>         - Add accounts (eg. Chequing, savings, credit cards, loans, retirement savings).
>         - Create savings/debt reduction goals.
>         - Synch with partners accounts and share common expenses.
>         - Track and compare actual spending to spending goals, and highlight differences.
>         - Oversee financial information of entire family.
>     - 2.3 Functionality for Child
>         - Input income streams.
>         - Input expenses.
>         - Add savings goals.
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
> .

Provide the class diagram of the whole system by incorporating the two design patterns. 
> .

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
> .

Deployment diagram regarding hardware configuration of the code. Indication the supported Web browser, the application/Web servers and the database solution.
> .

Table of Contents of the System Data
> .

### Technical Documentation
List of Programming Languages
> JavaScript, C++, CSS, HTML

List of reused algorithms and small programs with references
> .

List of software tools and environmets. Provide briefly their benefits specifically for your application.
> -----backend-------- <br/>
> Node.js <br/>
> Express <br/>
> Mongodb <br/>
> dotenv <br/>
> Mongoose <br/>
> JWT <br/>
> Postman <br/>
> Validator <br/>
> bcrypt <br/>
> cookie-parser <br/>
> nodemon <br/>
> cors <br/>
-----frontend-------- <br/>
> axios <br/>
> chart.js <br/>
> moment <br/>
> react <br/>
> react-charsjs-2 <br/>
> react-datepicker <br/>
> react-dom <br/>
> react-scripts <br/>
> styled-components <br/>
> web-vitals <br/>
### Acceptance Testing
Correctness testing using four test cases only (sc of both inputs and outputs).
> .

Robustness testing
> .

Time-efficiency testing of two functions only. Indicate the method you used to measure the time. 
> .

