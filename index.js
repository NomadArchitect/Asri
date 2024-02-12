import { root, checkVersion, addURLParam, loadScript } from './util/rsc.js';

export async function main() {
    let version = await checkVersion();
    loadScript(addURLParam(root + 'util/module/fastdom.js', { v: version }), '', 'asriFastdom');
    loadScript(addURLParam(root + 'script/index.js', { v: version }), 'module', 'asriMainjs');
}