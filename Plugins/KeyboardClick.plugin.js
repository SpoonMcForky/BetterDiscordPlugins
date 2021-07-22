/**
 * @name KeyboardClick
 * @author SpoonMcForky
 * @description troll
 * @version 0.0.1
 */

 module.exports = class Click {
    
    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {  // Required function. Called when the plugin is activated (including after reloads)
        var click1 = new Audio('https://dl.dropboxusercontent.com/s/g5flhi55n89c9um/click1.wav?raw=1');
        var click2 = new Audio('https://dl.dropboxusercontent.com/s/w0s9peh6kif3hce/click2.wav?raw=1');
        var click3 = new Audio('https://dl.dropboxusercontent.com/s/3xu1tfg8iln3uil/click3.wav?raw=1');
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
    stop() {} // Required function. Called when the plugin is deactivated

    observer(changes) {} // Optional function. Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
};
