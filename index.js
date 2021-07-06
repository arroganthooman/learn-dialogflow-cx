const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const { getBaseResponse, clearBaseResponse, pushMessage } = require('./BaseResponseFactory.js');

app.use(bodyParser.json());

app.post("/webhook/endflow", (request, response) => {
    const tag = request.body.fulfillmentInfo.tag;
    let base_response = getBaseResponse();

    if (tag === "thanks") {
        // WebhookResponse object
        pushMessage("Thanks for ordering!")
        pushMessage("Thank you! Hope you like it!")

        response.json(base_response);
    } else {
        // WebhookResponse object
        pushMessage(`No fulfillment with tag ${tag}`);
        response.json(base_response);   
    }

    clearBaseResponse();
});


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Server is running at PORT", PORT));