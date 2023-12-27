# 认识Docker
## 基本概念
打包、分发、部署
基于go语言开发，可以让开发者快速打包应用以及依赖包熬到一个轻量级、可移植的容器中，然后发布到任何流行的linux机器上。
## 镜像（Images）
一个镜像想当于一个软件安装包，想当于一个root文件系统，提供容器运行时所需的程序、库、资源、配置等文件。在构建后不会被改变
## 容器（Container）
可以把容器看做一个简易版的linxu环境，包括root用户权限，进程空间，用户空间和网络空间。
容器内的进程是运行在一个个例的环境中，使用起来好像是在一个独立于宿主的系统下操作一样
每一个容器运行时，是以镜像为基础层，在其上创建一个当前容器的存储层。我们可以称这个为容器运行时读写而准备的存储层为容器存储层
## 仓库（Respository）
仓库分为公开仓库和私有仓库，最大的公开仓库Docker Hub，存放了大量的镜像提供下载使用。
## 基本命令
```javascript
docker info   查看docker的所有信息
docker version 查看docker的版本信息
```
## 镜像命令
```javascript
docker commit 创建镜像
docker images 查看所有镜像
docker load 导入镜像
docker pull  镜像｜版本号 拉取镜像
docker push 上传镜像
docker image rm -f 镜像名称｜id 删除镜像

docker save 导出镜像
docker save > nginx.tar nginx:latest
 
docker load 导入镜像
docker load < nginx:tar

docker search 在docker hub查询镜像
docker tag 为镜像打标签
```
## 容器命令
```javascript
docker run [镜像名|镜像ID]  新建容器并启动
docker start [容器id] 启动已终止的容器
docker ps -a 列出本机运行的容器
docker stop [容器id] 停止指定容器
docker kill [容器id] 杀死指定容器
docker restart [容器id] 重启指定容器
docker  rm -f  [容器id] 强制删除指定容器

docker run -d[后台运行] -p 8080:8080[映射宿主机端口,]  containername imagename 
docker run -d -p 8080:8080 --name tomcat 01 tomcat:8.0

docker pause [容器id]  暂停容器
docker unpause [容器id]  恢复容器
Docker logs [容器id&name] 查看容器id
docker logs -f [容器id&name] 实时查看容器id的日志
docker exec -it [容器id&name]  bash 进入容器内部
docker exec -it ef4b492e3912 bash
exit  退出容器
docker top [容器id&name]  吃看容器内进程
docker inspect [容器id&name]  查看容器内指令进程

Docker volume -v  宿主机目录数据卷：容器内路径
 容器数据卷：用来实现容器中数据和宿主机中数据进行映射的，数据卷必须在启动时设置
注意：这种方式会将容器内的原始内容全部清空，
docker run -d -p 8080:8080  --name tomcat -v /Users/zzl/Desktop/Z/Desktop/douyin:/usr/local/tomcat/webapps tomcat:8.0

将容器打包成一个镜像（对自己的软件进行深度定制）
docker commit -m 'msg' 容器id｜name -a '作者' 容器id｜name 镜像名：版本号
docker commit -m 'tomcat server test' -a 'zzl' ef4b492e3912 tomcat-test:8.0     

容器备份
Docker save 容器id｜版本号 -o /Users/zzl/Desktop/Z/Desktop/docker-images
docker save tomcat-test:8.0 -o /Users/zzl/Desktop/Z/Desktop/docker-images/tomcat-8.0.tar

镜像恢复
Docker load  - i  tomcat-8.0.tar
```