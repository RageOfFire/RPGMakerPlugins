//=============================================================================
// ROF_CacheReload
//=============================================================================

/*:
 *
 * @plugindesc This allows to force users to re-load old files
 * @author RageOfFire
 * @pluginname ROF_CacheReload
 *
 * @help Allow to force users to rel-load webpage when new update come
 *
 * This plugin allows you to force users to re-load old files
 * Just need to change the version in the plugin setting before pushing online
 *
 * It does not provide plugin commands.
 * 
 * @param gameVersion
 * @text Game version:
 * @type text
 * @default 1.0.0
 */

(() => {
  const cacheReload = PluginManager.parameters('ROF_CacheReload');
  const storageVersion = localStorage.getItem('gameVersion') ? localStorage.getItem('gameVersion') : null
  const currentVersion = cacheReload['gameVersion'] || "1.0.0";

  // Force loading last file if browser version doesn't match with plugin
  if (storageVersion != currentVersion || storageVersion == null) {
    localStorage.setItem('gameVersion', currentVersion);
    alert("Found new update ! Reload your webpage");
    setTimeout(location.reload(), 3000);
  }

})();