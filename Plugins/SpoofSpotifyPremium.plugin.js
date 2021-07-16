/**
 * @name SpoofSpotifyPremium.plugin.js
 * @version 1.0.0
 * @description Spoofs Spotify Premium
 * @author SpoonMcForky
*/

module.exports = class premium {
start() { 
    BdApi.findModuleByProps("isSpotifyPremium").isSpotifyPremium = () => true
}
stop() { }
};
