# 1. Typescript and Node.js Project
Welcome to the Typescript and Node.js projects!.This repoitory contains a CLI projects written in typescript. In this project we use inquirer (for taking user input) and chalk (for styling) NPM package.

## Prerequisites
Before you begin,make sure you have the following installed on your machine:
- Node.js (https://nodejs.org/) 
- You have a code editor installed (preferably VS Code)

# 2. Setup the Typescript and Node.js Project
### Initial Setup

### Setup Node.js package.json
- Using the **-y** flag when creating a package.json will simply approve all the defaults.
  
`npm init -y`

### Add Typescript Globally

`npm install -g typescript`

 After we install typescript, we get access to the command line TypeScript compiler through the tsc command

### Create a Configuration File
The tsconfig.json is where we define the TypeScript compiler options. We can create a tsconfig with several options set.

`tsc -init`

### Compiling Our typescript 
To compile our code, we'll need to run the tsc command using filename. tsc will read the tsconfig.json in the current directory, and apply the configuration against the TypeScript compiler to generate the compiled JavaScript code.

`tsc app.ts`

## Inquirer
Inquirer is an NPM package that provides an easy way to capture user input in your Node. js command line interface applications. It provides several methods for asking questions and returning answers from the user that can be accessed by a . then promise function.

`npm i inquirer`

## Chalk
Chalk module in Node.js is used for styling the format of text and allows us to create our own themes in the Node.js project.

`npm i chalk`

### Install types for TypeScript
Ambient types are types that get added to the global execution scope.

`npm install --save-dev @types/inquirer`
