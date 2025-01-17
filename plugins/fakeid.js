/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'fakeid ?(.*)', fromMe: true, desc: Lang.EVINS_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `https://docs-jojo.herokuapp.com/api/fake_identity?lang=en&type=json`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n\n *Fakeid : 👿🤬 ' + Lang.EVINS +'* ```' + json.fakeid + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
});
}

else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'fakeid ?(.*)', fromMe: false, desc: Lang.EVINS_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
	const url = `https://docs-jojo.herokuapp.com/api/fake_identity?lang=en&type=json`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '\n\n *Fakeid : 👿🤬 ' + Lang.EVINS +'* ```' + json.fakeid + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDAC, MessageType.text);
	}
});
}