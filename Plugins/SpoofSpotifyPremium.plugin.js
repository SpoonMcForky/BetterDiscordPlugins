/**
 * @name SpoofSpotifyPremium
 * @version 1.0.0
 * @description Spoofs Spotify Premium
 * @author SpoonMcForky
*/


var SpoofSpotifyPremium = (() => {
	const config = {
        "info": {
            "name": "SpoofSpotifyPremium",
            "authors": [{
                "name": "SpoonMcForky",
                "discord_id": "333772129868972032",
                "github_username": "spoonmcforky",
            }],
            "version": "1.0.0",
            "description": "Spoofs Spotify Premium",
            "github": "",
            "github_raw": ""
        },
        "main": "index.js"
    }
        return !global.ZeresPluginLibrary ? class {
            load() {
            }
            start() { }
            stop() { }
        } : (([Plugin, Api]) => {
                const plugin = (Plugin, Api) => {
                    const { Patcher } = Api;
                    return class Spoof extends Plugin {
                        onStart() {
                    
                            Patcher.BdApi.findModuleByProps("getProfile").getProfile, async function (args) {
                                Patcher.BdApi.findModuleByProps("isSpotifyPremium").isSpotifyPremium, async function (_) {
                                    return true;
                                }
                                dispatcher.dispatch({ type: 'SPOTIFY_PROFILE_UPDATE', accountId: args[0], isPremium: true });
                                return;
                            }
    
                        };
                        onStop() {
                            Patcher.unpatchAll();
                         }
                    };
                };
    return plugin(Plugin, Api);
	})(global.ZeresPluginLibrary.buildPlugin(config));
    
})();
