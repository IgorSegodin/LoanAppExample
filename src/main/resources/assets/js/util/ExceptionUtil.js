export default {

    getErrorDescription: function(response) {
        if (400 == response.status) {
            if (response.responseJSON) {
                var json = response.responseJSON;
                if (json.errors.length > 0) {
                    var finalText = "";
                    var first = true;
                    json.errors.forEach(function(error) {
                        if (!first) {
                            finalText += ", ";
                        }
                        if (error.field) {
                            finalText += error.field + " ";
                        }
                        finalText += error.defaultMessage;
                        first = false;
                    });
                    return finalText;
                } else {
                    return json.error;
                }
            } else {
                return response.responseText;
            }
        } else {
            return response.status + " " + response.statusText;
        }
    }

}