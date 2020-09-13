/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"W4A/W4A/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});