# dockerfile
- 编写dockerfile文件
- 通过docker build 生成镜像文件
- 通过docker run 运行镜像文件，生成容器实例
## DockerHub 上 centos 的 Dockerfile 如下所示：
```javascript
FROM scratch   ## 所有镜像文件的祖先类
ADD centos-7-docker.tar.xz /
 
LABEL org.label-schema.schema-version="1.0" \
    org.label-schema. \
    org.label-schema.vendor="CentOS" \
    org.label-schema.license="GPLv2" \
    org.label-schema.build-date="20181006"
 
CMD ["/bin/bash"]
```
Dockerfile保留字
```javascript
FROM MYSQL:5.6
FROM:基础镜像，当前镜像基于哪个镜像，必须第一行填写

MAINTAINER name<email>
MAINTAINER zzl<zzl7220@163.com>
MAINTAINER:镜像维护者的用户名和邮箱地址

LABEL key1=value1 key2=value2...  #可以设置多个标签，每个标签为一个"key=value"的键值对，如果key中包含空格，可以使用\来进行转义，也可以通过""来进行标示；另外，反斜线\也可以用于续行示例
LABEL "maintainer"=test
LABEL:为镜像指定tag标签

RUN:容器构建时需要运行的指令
RUN yum -y install vim

EXPOSE:指定当前容器与外界交互的端口

WORKDIR:创建容器后终端默认登录进来的工作目录
WORKDIR /path/app

ENV:用来构建镜像过程中设置环境变量
ENV MYPATH /APP
ENV NAME /name
```