/**
 * @name KeyboardClick
 * @author SpoonMcForky#8008
 * @authorId 333772129868972032
 * @description Plays a click sound when a button is pressed, similarily to OperaGX (uses the same sounds)
 * @version 1.0.3
 * @updateUrl https://raw.githubusercontent.com/SpoonMcForky/BetterDiscordPlugins/main/Plugins/KeyboardClick.plugin.js
 */
var click1 = new Audio(
  "https://dl.dropboxusercontent.com/s/vfxrfu2u8jiq6xw/click1.wav?raw=1"
);
var click2 = new Audio(
  "https://dl.dropboxusercontent.com/s/wtw25tzfctkpers/click2.wav?raw=1"
);
var click3 = new Audio(
  "https://dl.dropboxusercontent.com/s/kqjn62hwk035d2w/click3.wav?raw=1"
);

module.exports = class Click {
  start() {
    Audio.volume = 0.5;
    document.addEventListener("keydown", clicking);
    this.clicking = clicking;
      async function clicking() {
      var num = Math.floor(Math.random() * 3) + 1;
        async function click() {
            if (num == 1) {
                function click() {
                     click1.play(click1);
                }
                click();
            }
            else if (num == 2) {
                function clickTwo() {
                    click2.play(click2);
                }
                    clickTwo();
            }
            else if (num == 3) {
                function clickThree() {
                    click3.play(click3);
                }
                clickThree();
           }
          }
         click();
      }
      document.addEventListener("keyup", stopAudio);
      this.stopAudio = stopAudio
        function stopAudio() {
            click1.pause()
            click1.currentTime = 0;
            click2.pause()
            click2.currentTime = 0;
            click3.pause()
            click3.currentTime = 0;


      }
  }
    stop() {
    document.removeEventListener("keydown", this.stopAudio);
    document.removeEventListener("keydown", this.clicking);
  }
};
