<p align="center"><img src="https://github.com/DIT112-V21/group-09/blob/master/frontendApp/assets/images/rover-logo.png?raw=true" alt="rover-logo.png" width="480" height="121"></p>

![Electron CI](https://github.com/DIT112-V21/group-09/actions/workflows/electron-ci.yml/badge.svg)
![Arduino Build](https://github.com/DIT112-V21/group-09/actions/workflows/arduino-build.yml/badge.svg)

Autonomous SmartRover that is designed to explore foreign planets, terrain and its environment.

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Testing](#testing)
- [How to use](#how-to-use)
- [Dependencies](#dependencies)
- [Development team](#development-team)
- [License](#license)

## Description

In this repository you can find all the neccessary information to setup and use SmartRover system. By fully 
utilizing SmartCar shield software library capabilities, this system is designed to explore the idea of examining more
territory in the foreign terrain and perform remote robotic vehicle control. 

## Features

The system is developed such that it can perform the following tasks: 

- Connect to the SmartRover and manually drive
- Send console commands to drive the rover
- Connect and receive live camera stream
- Autonomous driving with obstacle avoidance logic built-in
- Build and execute missions by defining each step parameters
- Create user account and login with unique profile
- Save and load user missions

## Installation

Provide step by step series of examples and explanations about how to get a development env running.

## Testing

To run the tests for this project, run:

    $ npm ci

To run the website for testing purposes, run:

    $ npm run test

## How to use

* Launch the app
* [Manual control](https://github.com/DIT112-V21/group-09/wiki/Manual-control-of-the-Rover)
* [Mission control](#)

## Dependencies

- [Arduino IDE](https://www.arduino.cc/en/software)
- [SMCE-gd](https://github.com/ItJustWorksTM/smce-gd)
- [Electron.js](https://www.electronjs.org/)
- [Godot engine](https://godotengine.org/)

## Development team:
- [Alexander Nikolic](https://github.com/nikalc)
- [Altansukh Tumenjargal](https://github.com/axe007)
- [Anwar Ramadi](https://github.com/ramadi-a)
- [Kamila Yosofi](https://github.com/kam56)
- [Markus Juntura](https://github.com/OneMoreOreo)

## Contributing

If you wish to contribute to this website, please fork it on GitHub, push your change to a named branch, then send a pull request. If it is a big feature, you might want to start an issue first to make sure it's something that will be accepted. If it involves code, please also write tests for it.

## License

MIT © Group-09
The source code for the site is licensed under the MIT license, which you can find in the MIT-LICENSE.txt file.

All graphical assets are licensed under the [Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/).
