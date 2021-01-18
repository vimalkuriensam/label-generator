# Shipping Label Maker

This is an application that creates label for shipping. The major features of the application includes:
  - Login
  - Register
  - Wizard
  - Shipping Label Maker
  - Sender Address 
  - Reciever Address
  - Option
  - Weight
  - Confirmation
  - Stepper
 
### Features
The app utilizes the step count in `wizard.js` file to determine the stepper state. Based on the stepper value the shipping label maker determines which file to return.
Each time the next button is clicked, the stepper value increases by one and each time the previous value is clicked, the stepper value decreases by one. Each user events are stored in a state value in the shipping label maker file. The confirmation file will printout all the user inputs related to requirements. This includes sender information, reciever information, options and weight. Once confirmation is proceeded, price is calculated in the wizard file.
 

### Insallation
To start the application you need to first install the dependencies
```
npm install
```
This will install all the dependencies required in the project
Next you need to start the development server
```
npm start
```
To run the test in the application you need to type the test command
```
npm test -- --watchAll
```


### Dependencies used
Shipping label maker tries to use 3-rd party dependencies to a minimum and utilizes only those dependencies that are necessary to run the application smoothly. To know the dependencies used please check `package.json` file


License
----

MIT
