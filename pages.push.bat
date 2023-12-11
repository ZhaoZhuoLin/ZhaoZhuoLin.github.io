@echo off  

cd ../docs/.vitepress/dist
  
echo 初始化Git仓库...  
git init
  
echo 添加所有文件到暂存区...  
git add .  

echo 提交更改...  
git commit -m "add commit"  
  
echo 推送更改到远程仓库...  
git push -f https://github.com/ZhaoZhuoLin/ZhaoZhuoLin.github.io.git master:pages
  
echo 完成！
