/**
 * @name KeyboardClick
 * @author SpoonMcForky
 * @description Plays a click sound when a button is pressed, similarily to OperaGX (uses the same sounds)
 * @version 1.0.2
 */

 module.exports = class Click {
  
    start() {  
        var click1 = new Audio('https://dl.dropboxusercontent.com/s/vfxrfu2u8jiq6xw/click1.wav?raw=1');
        var click2 = new Audio('https://dl.dropboxusercontent.com/s/wtw25tzfctkpers/click2.wav?raw=1');
        var click3 = new Audio('https://dl.dropboxusercontent.com/s/kqjn62hwk035d2w/click3.wav?raw=1');
        document.addEventListener('keydown', clicking);

        async function clicking() {
            var num = Math.floor(Math.random() * 3) + 1
            async function click() {
                if (num == 1) {
                    function click() {
                        click1.play(click1)
                    }
                    click()
                }
                else if (num == 2) {
                    function clickTwo() {
                        click2.play(click2)
                    }
                    clickTwo()
                }
                else if (num == 3) {
                    function clickThree() {
                        click3.play(click3)
                    }
                    clickThree()
                }
            }
            click()
        }
    }
    stop() {} 
};
