/**
 * Displays a message on the STDOUT.
 * @param {String} message The message to display.
 */
function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}
module.exports = displayMessage;
