@echo off
if "%1" == "h" goto begin
mshta vbscript:createobject("wscript.shell").run("%~nx0 h",0)(window.close)&&exit
:begin


cd G:\ÍøÒ×\ÏîÄ¿\gulp-git-push && G:
npm run bump_version_patch_0.0.1
 
 
 
 
 