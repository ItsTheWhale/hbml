/**
 * Anything to do with macros ends up here
 */

import {Macro, Parser} from "./classes.js";

/**
 * Macro parser when in build mode. Will expand macros into HBML elements
 * @return {{err: (string | null), ok: (Token | null)}} Returns an error if one is found
 */
Parser.prototype.macro_build = function () {
	let {ok, err} = this.parse_inner("div", false)
	if (err) return {ok: null, err: err}
	// get required macro info
	const count_res = ok.count_child()
	ok = count_res.tok
	this.macros[this.macros.length - 1][ok.type] = new Macro(ok.children, count_res.isVoid)
	return {ok: null, err: null}
}

/**
 * Macro parser when in lint mode. Will treat macros as tags
 */
Parser.prototype.macro_lint = function () {

}