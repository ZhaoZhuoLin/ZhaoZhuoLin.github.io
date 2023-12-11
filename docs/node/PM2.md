# PM2

## PM2-node进程管理工具 
```javascript
pm2 start app.js              # 启动app.js应用程序
pm2 start app.js -i 4         # cluster mode 模式启动4个app.js的应用    
pm2 start app.js --name="api" # 启动应用程序并命名为 "api"
pm2 start app.js --watch      # 当文件变化时自动重启应用
pm2 list  / pm2 ls            # 列表 PM2 启动的所有的应用程序
pm2 logs                      # 显示所有应用程序的日志
pm2 logs [app-name|id]        # 显示指定应用程序的日志
pm2 stop all                  # 停止所有的应用程序
pm2 stop 0                    # 停止 id为 0的指定应用程序
pm2 restart all               # 重启所有应用
pm2 delete all                # 关闭并删除所有应用
pm2 delete 0                  # 删除指定应用 id 0
```