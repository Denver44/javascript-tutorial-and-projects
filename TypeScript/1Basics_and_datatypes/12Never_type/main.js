function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occurred", 500);
console.log(result);
