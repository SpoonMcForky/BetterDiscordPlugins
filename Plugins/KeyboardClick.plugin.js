/**
 * @name KeyboardClick
 * @author SpoonMcForky
 * @description troll
 * @version 0.0.1
 */

 module.exports = class Click {
    
    load() {} // Optional function. Called when the plugin is loaded in to memory

    start() {  // Required function. Called when the plugin is activated (including after reloads)
        var click1 = new Audio('https://cdn.discordapp.com/attachments/613540326019432458/867828171739365376/EXmZ1MmEb9fS.mp3');
        var click2 = new Audio('https://cdn.discordapp.com/attachments/613540326019432458/867828173776879616/CwA6AeGaM7Eh.mp3');
        var click3 = new Audio('https://cdn.discordapp.com/attachments/613540326019432458/867828175177646140/VUi0jd5vrhLg.mp3');
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
