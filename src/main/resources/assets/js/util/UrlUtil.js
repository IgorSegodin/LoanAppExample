export default {
    get: function (...inputs) {
        var result = "/";
        inputs.forEach(function(input) {
            result += "/" + input;
        });
        // replace multiple slashes
        return result.replace(/\/{2,}/g, "/");
    }
}