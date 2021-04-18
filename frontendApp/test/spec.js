const assert = require('assert');
const path = require('path');
const Application = require('spectron').Application;
const electronPath = require('electron');

const app = new Application({
  path: electronPath,
  args: [path.join(__dirname, '../')]
});

describe('Electron app tests', function () {
	
	this.timeout(5000)

	//Start the electron app before each test
	beforeEach(() => {
		return app.start();
	});

	//Stop the electron app after completion of each test
	afterEach(() => {
		if (app && app.isRunning()) {
			return app.stop();
		}
		done();
	});

	try {
		it('Display the electron app window', async () => {
			const count = await app.client.getWindowCount();
			return assert.equal(count, 1);
		}).timeout(10000);
	} catch (e) {
		return done(e);
	}

	try {
		it('Displays a title', async () => {
			const title = await app.browserWindow.getTitle();
			return assert.equal(title, 'SmartRover - Home');
		}).timeout(10000); 
	} catch (e) {
		return done(e);
	}
});