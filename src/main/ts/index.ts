import '@babel/polyfill';
import '@webcomponents/webcomponentsjs';
import '@material/mwc-ripple';

import './monitor-app';
import './monitor-app-bar';
import './monitor-body';
import './monitor-drawer';
import './monitor-add-server-dialog';
import './monitor-text-input';
import './monitor-user-list';

import { TdsLanguageClient } from '@totvs/tds-languageclient';

declare global {
	let languageClient: TdsLanguageClient;
}

const app = document.querySelector('monitor-app')
//const settings = window.localStorage.getItem('settings')

//if (settings) {
	//app.settings = JSON.parse(settings);
//}
//else {
	app.settings = JSON.parse(`{
		"servers": [
			{
				"name": "Production 2",
				"address": "LOCALHOST",
				"port": 41701
			},
			{
				"name": "LOBO-GUARA",
				"address": "192.168.168.1",
				"port": 6000
			}
		]
	}`);
//}
