const chalk = require('chalk');
const inquirer = require('inquirer');
const path = require('path');
const shell = require('shelljs');
const utils = require('./color-utils.js');

// TODO remove this file and run `npm remove chalk inquirer shelljs`

const SATURATION_THRESHOLD = 0.7;

// paths
const LICENSE = path.join(process.cwd(), 'LICENSE');
const PACKAGE_JSON = path.join(process.cwd(), 'package.json');
const PALETTE = path.join(process.cwd(), 'public', 'palette.css');

const FILES_TO_FILL_IN = [
  LICENSE,
  PACKAGE_JSON,
  path.join(process.cwd(), 'public', 'index.html'),
  path.join(process.cwd(), 'public', 'manifest.json'),
  path.join(process.cwd(), 'src', 'App.svelte'),
];

const SETUP_UTILS = {
  LICENSE_TEMPLATE: path.join(__dirname, 'LICENSE_TEMPLATE'),
  COLOR_UTILS: path.join(__dirname, 'color-utils.js'),
};

const banner = () => {
  console.log(
    chalk.bold.magentaBright(
      '' + '┌──────┬────────────────┐\n' + '│  ls  │  Setup Script  │\n' + '└──────┴────────────────┘\n',
    ),
  );
};

const askQuestions = () => {
  const slug = path.basename(process.cwd());
  const prefix = chalk.yellowBright('»');
  const required = (input) => !!input;
  const questions = [
    {
      message: 'Who are you?',
      name: 'AUTHOR',
      type: 'input',
      default: 'Lena Schnedlitz',
      prefix,
    },
    {
      message: "What's your project's name?",
      name: 'TITLE',
      type: 'input',
      default: slug,
      filter: (input) => input.replace(/ /g, '-'),
      prefix,
    },
    {
      message: 'Can you give me a short description?',
      name: 'DESCRIPTION',
      type: 'input',
      validate: required,
      prefix,
    },
    {
      message: 'Do you have a link to the repository?',
      name: 'LINK',
      type: 'input',
      default: `https://gitlab.com/LenaSchnedlitz/${slug}`,
      prefix,
    },
    {
      message: 'Should I add an MIT license for you?',
      name: 'ADD_MIT_LICENSE',
      type: 'confirm',
      default: true,
      prefix,
    },
    {
      message: "I will also prepare a color palette for you. What's your project's theme color?",
      name: 'COLOR',
      type: 'input',
      prefix,
      validate: (input) => required(input) && !!input.match(/#([a-f0-9]{3}){1,2}/),
    },
    {
      message:
        chalk.yellowBright(
          'Note: You can base your palette on this color, but I recommend a color with higher saturation.\n»',
        ) + ' What color do you want to base the palette on?',
      name: 'PRIMARY',
      type: 'input',
      default: (answers) => utils.suggestBaseColor(answers.COLOR),
      prefix: ' ',
      when: (answers) => utils.getSaturation(answers.COLOR) < SATURATION_THRESHOLD,
    },
    {
      name: 'SECONDARY',
      type: 'input',
      message: 'What color do you want to use for highlights?',
      default: (answers) => utils.suggestComplementaryColor(answers.COLOR),
      prefix,
    },
  ];
  return inquirer.prompt(questions);
};

const addLicense = () => {
  shell.cp(SETUP_UTILS.LICENSE_TEMPLATE, LICENSE);
  shell.sed('-i', /"scripts"/, '"license": "MIT",\n  "scripts"', PACKAGE_JSON);
};

const fillIn = (data) => {
  Object.keys(data).forEach((key) => {
    const replacePattern = new RegExp(`_${key}_`, 'g');
    FILES_TO_FILL_IN.forEach((file) => shell.sed('-i', replacePattern, data[key], file));
  });
};

const setUpPalette = (primaryColor, secondaryColor) => {
  const primaryShades = utils.makePalette(primaryColor);
  const secondaryShades = utils.makePalette(secondaryColor);

  const count = primaryShades.length;
  for (let i = 0; i < count; i++) {
    shell.sed('-i', new RegExp(`(?<=^ {2}--primary-color-${i + 1}: )#[a-f0-9]{6}`), primaryShades[i], PALETTE);
    shell.sed('-i', new RegExp(`(?<=^ {4}--primary-color-${count - i}: )#[a-f0-9]{6}`), primaryShades[i], PALETTE);
    shell.sed('-i', new RegExp(`(?<=^ {2}--secondary-color-${i + 1}: )#[a-f0-9]{6}`), secondaryShades[i], PALETTE);
    shell.sed('-i', new RegExp(`(?<=^ {4}--secondary-color-${count - i}: )#[a-f0-9]{6}`), secondaryShades[i], PALETTE);
  }
};

const cleanUp = () => {
  shell.rm(...Object.values(SETUP_UTILS));
  shell.sed('-i', /^.*"setup": "node .*setup\.js.*$/, '', PACKAGE_JSON);
};

const success = () => {
  console.log(chalk.yellowBright("\nEverything's ready! Have fun ♥ "));
};

const run = async () => {
  banner();
  let { ADD_MIT_LICENSE, PRIMARY, SECONDARY, ...projectData } = await askQuestions();

  if (ADD_MIT_LICENSE) {
    addLicense();
  }
  fillIn({ ...projectData, YEAR: new Date().getFullYear() });
  setUpPalette(PRIMARY || projectData.COLOR, SECONDARY);
  cleanUp();
  success();
};

run();
