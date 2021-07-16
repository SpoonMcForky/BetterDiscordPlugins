/**
 * @name DisableNSFWGate.plugin.js
 * @version 1.0.0
 * @description Disables the NSFW Gate for users who incorrectly set their birthdate.
 * @author SpoonMcForky
*/

module.exports = class DisableGate {
start() 
{ BdApi.findModuleByProps("getCurrentUser").getCurrentUser().nsfwAllowed = true }
stop() { }
};
