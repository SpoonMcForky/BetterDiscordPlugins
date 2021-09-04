/**
 * @name KeyboardClick
 * @author SpoonMcForky#8008
 * @authorId 333772129868972032
 * @description Plays a click sound when a button is pressed, similarily to OperaGX (uses the same sounds)
 * @version 2.1.1
 * @updateUrl https://raw.githubusercontent.com/SpoonMcForky/BetterDiscordPlugins/main/Plugins/KeyboardClick.plugin.js
 * @source https://raw.githubusercontent.com/SpoonMcForky/BetterDiscordPlugins/main/Plugins/KeyboardClick.plugin.js
 * @website https://github.com/SpoonMcForky/BetterDiscordPlugins/blob/main/Plugins/KeyboardClick.plugin.js
 */
// Thanks @ChipChaddleson#0001 for making me realize my incompetence
                    const click1 = new Audio('https://dl.dropboxusercontent.com/s/vfxrfu2u8jiq6xw/click1.wav?raw=1');
                    const click2 = new Audio('https://dl.dropboxusercontent.com/s/wtw25tzfctkpers/click2.wav?raw=1');
                    const click3 = new Audio('https://dl.dropboxusercontent.com/s/kqjn62hwk035d2w/click3.wav?raw=1');
                    const backspace = new Audio('https://dl.dropboxusercontent.com/s/lluvdpgt8n8ohm0/backspace.wav?raw=1');
                 //   const enter = new Audio('https://dl.dropboxusercontent.com/s/lluvdpgt8n8ohm0/backspace.wav?raw=1');
module.exports = (() => {
    const config = {
        info: {
            name: 'KeyboardClick',
            authors: [{
                name: 'SpoonMcForky#8008',
                discord_id: '333772129868972032',
                github_username: 'SpoonMcForky'
            }],
            version: '2.1.1',
            description: 'Plays a click sound when a button is pressed, similarily to OperaGX (uses the same sounds)',
            github: 'https://github.com/SpoonMcForky/BetterDiscordPlugins',
            github_raw: 'https://raw.githubusercontent.com/SpoonMcForky/BetterDiscordPlugins/main/Plugins/KeyboardClick.plugin.js'
        },
        version: '2.1.1',
        changelogItems: [
            {
                version: '2.0.2',
                title: 'v2.0.2: Added Key!',
                type: 'added',
                items: [
                    'Added Capslock and Meta buttons (Windows Button) to list of key exceptions.',
                    'Also added this changelog',
                    'Please open an issue or DM me on Discord if you have any problems or would like me to add a key!'
                ]
            },
            {
                version: '2.0.3',
                title: 'v2.0.3: Slight rewrite',
                type: 'added',
                items: [
                    'Moved exceptions to an array',
                    'Got rid of redundant functions',
                    'Attempted to eliminate spaghetti'
                ]
            },
            {
                version: '2.0.5',
                title: 'v2.0.5: Added Exception',
                type: 'added',
                items: [
                    'Added volume up and down keys to exception list'
                ]},

            {
                version: '2.0.6',
                title: 'v2.0.6: Added Exception',
                type: 'fixed',
                items: [
                    'Fixed backspace tempo '
                ]},
                
            {
                version: '2.0.11',
                title: 'v.2.0.11: Volume Slider',
                type: 'added',
                items: [
                    'Added Volume Slider',
                    'If you got spammed with updates, Sorry.'
                ]
            },
            {
                version: '2.1.0',
                title: 'v.2.1.0: New Feature!',
                type: 'added',
                items: [
                    'Added a settings panel for custom exceptions!',
                    'Removed some left over code',
                    ':)'
                ]

            }],
        get changelog() {
            const item = this.changelogItems.find(item => item.version === this.version);
            if (!item) return item;
            return [item];
        },
        defaultConfig: [{
            type: "slider",
            id: "volume",
            name: "Volume",
            note: "Changes volume of clicks",
            value: 50,
            min: 0,
            max: 100,
            markers: Array.from(Array(11), (_, i) => 10 * i),
            stickToMarkers: true
        },
            {
            type: "textbox",
            id: "exceptions",
            name: "Exceptions (Requires Reload)",
            note: "Add keys here to stop them from making a click sound. Separate keys by a comma, no space {Key1,Key2}. Letter keys are formatted like this: \"KeyA\". Easily see key codes here: http://keycode.info",
            value: ",,ControlLeft,ControlRight,ShiftLeft,ShiftRight,AltLeft,AltRight,ArrowUp,ArrowRight,ArrowLeft,ArrowDown,CapsLock,MetaLeft,MetaRight,MediaPlayPause,",
        }]
    };

 return !global.ZeresPluginLibrary ? class {

        constructor() { this._config = config; }
        getName() { return config.info.name; }
        getAuthor() { return config.info.authors.map(a => a.name).join(', '); }
        getDescription() { return config.info.description; }
        getVersion() { return config.info.version; }
        load() {
            BdApi.showConfirmationModal('Library Missing', `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                confirmText: 'Download Now',
                cancelText: 'Cancel',
                onConfirm: () => {
                    require('request').get('https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js', async (error, response, body) => {
                        if (error) return require('electron').shell.openExternal('https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js');
                        await new Promise(r => require('fs').writeFile(require('path').join(BdApi.Plugins.folder, '0PluginLibrary.plugin.js'), body, r));
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
                    var keyArray = this.createExceptions()
                    
                    document.addEventListener('keydown', clicking);
                    this.clicking = clicking;
                    
                    async function clicking(e) {
                        var num = Math.floor(Math.random() * 3) + 1 // Generate a random number, used later to determine which click sound will be played
                        async function click() {

                            if (keyArray.includes(e.code)) { // Checks the array 'keyArray', and if the condition is met, do nothing
                            }
                                else if (e.code == 'Backspace') {
                                    backspace.pause();
                                    backspace.currentTime = 0;
                                    click1.pause();
                                    click1.currentTime = 0;
                                    click2.pause();
                                    click2.currentTime = 0;
                                    click3.pause();
                                    click3.currentTime = 0;
                                    backspace.play(backspace)

                                }
                                else if (num == 1) {
                                    click1.pause();
                                    click1.currentTime = 0;
                                    click2.pause();
                                    click2.currentTime = 0;
                                    click3.pause();
                                    click3.currentTime = 0;
                                    click1.play(click1)
                                }
                                else if (num == 2) {
                                    click1.pause();
                                    click1.currentTime = 0;
                                    click2.pause();
                                    click2.currentTime = 0;
                                    click3.pause();
                                    click3.currentTime = 0;
                                    click2.play(click2)
                                }
                                else if (num == 3) {
                                    click1.pause();
                                    click1.currentTime = 0;
                                    click2.pause();
                                    click2.currentTime = 0;
                                    click3.pause();
                                    click3.currentTime = 0;
                                    click3.play(click3)

                                }
                        }
                        click()
                    }
                }
                stop() {
                    document.removeEventListener('keydown', this.clicking);
                }
                changeVolume() {
                    click1.volume = (this.settings.volume / 100);
                    click2.volume = (this.settings.volume / 100);
                    click3.volume = (this.settings.volume / 100);
                    backspace.volume = (this.settings.volume / 100);
                }
                createExceptions() {
                    return this.settings.exceptions.split(",")
                }
                getSettingsPanel() {
                    const panel = this.buildSettingsPanel();
                    panel.addListener((id) => {
                        if (id == "volume") {
                            this.changeVolume()
                        } else if (id == "exceptions") {
                            this.createExceptions()
                        }

                    });
                    return panel.getElement();
                }
            
            }
        }
    
    return plugin(Plugin, Api);
})(global.ZeresPluginLibrary.buildPlugin(config));
})();
