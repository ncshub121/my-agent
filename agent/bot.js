const res = await fetch(`https://api.telegram.org/bot8768116832/setWebhook`, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		url: `https://Eldenwan_bot.versal.app/eve/v1/telegram`,
		secret_token: "1234567890",
		allowed_updates: ["message", "callback_query"],
	}),
});
