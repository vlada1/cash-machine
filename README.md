# cash-withdraw
```
I've choosed vue-cli in case to have simple webpack configuration.
Application based on Vue components which allows me to update DOM effectively.
Function that makes notes calculation is placed in utils folder. This approach allows me to test and change such parts
of application easily. 
Calculation approach: I have a loop where I check whether I can use note and hove much notes of one type can be used
to get requested amount. Main cases are covered by tests using Jest.
Also I have basic styling for better UX.
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

