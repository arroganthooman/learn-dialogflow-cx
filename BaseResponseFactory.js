let base_response = require('./base_webhook_res.json');

const getBaseResponse = () => {
    return {...base_response};
}

const clearBaseResponse = () => {
    base_response.fulfillment_response.messages[0].text.text = [];
}

exports.getBaseResponse = getBaseResponse;
exports.clearBaseResponse = clearBaseResponse;