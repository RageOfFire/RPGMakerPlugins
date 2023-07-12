//=============================================================================
// ROF_RemoveOptions
//=============================================================================

/*:
 *
 * @plugindesc A simple plugin allow to remove default "Command remember" options.
 * @author RageOfFire
 * @pluginname ROF_RemoveOptions
 *
 * @help This plugin does not provide plugin commands.
 * When enable it will remove "Command remember" option
 *
 */

Window_Options.prototype.addGeneralOptions = function() {
        this.addCommand(TextManager.alwaysDash, 'alwaysDash');  // do not add this option
        // this.addCommand(TextManager.commandRemember, 'commandRemember');
};