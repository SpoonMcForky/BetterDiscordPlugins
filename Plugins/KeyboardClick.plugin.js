/**
 * @name KeyboardClick
 * @author SpoonMcForky
 * @description Plays a click sound when a button is pressed, similarily to OperaGX (uses the same sounds)
 * @version 1.0.0
 */

 module.exports = class Click {

    start() {
        var click1 = new Audio('https://dl.dropboxusercontent.com/s/vfxrfu2u8jiq6xw/click1.wav?raw=1');
        var click2 = new Audio('https://dl.dropboxusercontent.com/s/wtw25tzfctkpers/click2.wav?raw=1');
        var click3 = new Audio('https://dl.dropboxusercontent.com/s/kqjn62hwk035d2w/click3.wav?raw=1');
        document.addEventListener('keydown', playSound);

        function playSound() {
            var num = Math.floor(Math.random() * 3) + 1
            if (num == 1) {
                click1.play(click1)
            }
            else if (num == 2) {
                click2.play(click2)
            }
            else if (num == 3) {
                click3.play(click3)
            }
        }
         
     }
    stop() {}
};
