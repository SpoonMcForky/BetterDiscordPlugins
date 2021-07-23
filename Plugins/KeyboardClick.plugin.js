/**
 * @name KeyboardClick
 * @author SpoonMcForky#8008
 * @authorId 333772129868972032
 * @description Plays a click sound when a button is pressed, similarily to OperaGX (uses the same sounds)
 * @version 2.0.0
 * @updateUrl https://raw.githubusercontent.com/SpoonMcForky/BetterDiscordPlugins/main/Plugins/KeyboardClick.plugin.js
 */
// Thanks @ChipChaddleson#0001 for making me realize my incompetence 
module.exports = (() => {
    const config = {
        info: {
            name: "KeyboardClick",
            authors: [{
                name: "SpoonMcForky#8008",
                discord_id: "333772129868972032",
                github_username: "SpoonMcForky"
            }],
            version: "2.0.0",
            description: " Plays a click sound when a button is pressed, similarily to OperaGX (uses the same sounds)",
            github: "https://github.com/SpoonMcForky/BetterDiscordPlugins",
            github_raw: "https://raw.githubusercontent.com/SpoonMcForky/BetterDiscordPlugins/main/Plugins/KeyboardClick.plugin.js"
        }
    };

    return !global.ZeresPluginLibrary ? class {

        constructor() { this._config = config; }
        getName() { return config.info.name; }
        getAuthor() { return config.info.authors.map(a => a.name).join(", "); }
        getDescription() { return config.info.description; }
        getVersion() { return config.info.version; }
        load() {
            BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                confirmText: "Download Now",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                    });
                }
            });
        }
        start() {
            ZeresPluginLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), 'https://raw.githubusercontent.com/SpoonMcForky/BetterDiscordPlugins/main/Plugins/KeyboardClick.plugin.js');
        if (window.PluginUpdates && window.PluginUpdates.plugins) delete PluginUpdates.plugins['https://github.com/SpoonMcForky/BetterDiscordPlugins/blob/main/Plugins/KeyboardClick.plugin.js'];
         }
        stop() { }

    } : (([Plugin, Api]) => {
        const plugin = (Plugin, Api) => {
            const {
                DiscordModules
            } = Api;
    
            const {
                DiscordConstants
            } = DiscordModules;
    
    
            return class clicker extends Plugin {
                onStart() {
                    var click1 = new Audio("https://dl.dropboxusercontent.com/s/vfxrfu2u8jiq6xw/click1.wav?raw=1");
                    var click2 = new Audio("https://dl.dropboxusercontent.com/s/wtw25tzfctkpers/click2.wav?raw=1");
                    var click3 = new Audio("https://dl.dropboxusercontent.com/s/kqjn62hwk035d2w/click3.wav?raw=1");
                    var backspace = new Audio("https://dl.dropboxusercontent.com/s/lluvdpgt8n8ohm0/backspace.wav?raw=1");
                    //var enter = new Audio("https://dl.dropboxusercontent.com/s/lluvdpgt8n8ohm0/backspace.wav?raw=1");
                    document.addEventListener('keydown', clicking);
                    this.clicking = clicking

                    async function clicking(e) {
                        var num = Math.floor(Math.random() * 3) + 1
            
                        async function click() {
/*exceptions*/             if (e.key == "Control" || e.key == "Shift" || e.key == "Alt" || e.key == "MediaPlayPause" || e.key == "MediaNextTrack" || e.key == "MediaTrackPrevious" || e.key == "MediaStop" ) {
                
                            }
                            else if (e.key == "Backspace") {
                                function backspaceFunc() {
                                    click1.pause();
                                    click1.currentTime = 0;
                                    click2.pause();
                                    click2.currentTime = 0;
                                    click3.pause();
                                    click3.currentTime = 0;
                                    backspace.play(backspace)
                                }
                                backspaceFunc()

                            }
                            else if (num == 1) {
                                function click() {
                                    click1.pause();
                                    click1.currentTime = 0;
                                    click2.pause();
                                    click2.currentTime = 0;
                                    click3.pause();
                                    click3.currentTime = 0;
                                    click1.play(click1)
                                }
                                click()

                            }
                            else if (num == 2) {
                                function clickTwo() {
                                    click1.pause();
                                    click1.currentTime = 0;
                                    click2.pause();
                                    click2.currentTime = 0;
                                    click3.pause();
                                    click3.currentTime = 0;
                                    click2.play(click2)
                                }
                                clickTwo()

                            }
                            else if (num == 3) {
                                function clickThree() {
                                    click1.pause();
                                    click1.currentTime = 0;
                                    click2.pause();
                                    click2.currentTime = 0;
                                    click3.pause();
                                    click3.currentTime = 0;
                                    click3.play(click3)
                                }
                                clickThree()

                            }
                        }
                        click()
                    }
                }
                stop() {
                    document.removeEventListener('keydown', this.clicking);
         
                }
            }
        }
    
    return plugin(Plugin, Api);
})(global.ZeresPluginLibrary.buildPlugin(config));
})();
