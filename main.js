define(function (require, exports, module) {
    "use strict";

    var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

    ExtensionUtils.addEmbeddedStyleSheet("#sidebar *, #main-toolbar *, #titlebar *, #problems-panel *,"+
	"#find-in-files-results *, #e4b-main-panel *, #status-bar *,"+
	"#main-toolbar *, #context-menu-bar *, #codehint-menu-bar *,"+
	"#quick-view-container *, #function-hint-container *  { font-size: 22px !important;"+
	" line-height: 25px !important; }"+
	".sidebar li { min-height: 25px !important;}"+
	".sidebar-selection, .filetree-selection { min-height: 30px !important; margin-top: 3px;}"+
	""
	);
});
