# 进程模型
## 何为进程？
:::tip
是一个程序运行的实例。每个进程都拥有独立的内存空间和系统资源。当一个程序运行时，操作系统会为它创建一个进程，并为该进程分配相应的资源。进程之间可以并发执行，可以相互通信和协作。每个应用最少一个进程，进程之间相互独立，即使双方同意，也需要同意。
进程通常包括堆栈，例如临时数据，函数参数。
进程中的堆，是进程运行时的动态分配的内存，在JavaScript中，堆和栈的内存分配是通过不同方式进行的

1. **堆内存分配**
- Javascript中的对象、数组和函数等复杂数据类型都存储在堆内存中
- 使用new关键字或对象字面量语法创建对象是，会在堆内存中动态分配相应的内存空间
-  堆内存的释放由垃圾回收机制自动处理，当一个对象不被引用时，垃圾回收机制自动回收其占用的堆内存并释放资源
2. **栈内存分配**
- 当函数被调用时,会在栈内存中创建一个称为栈帧 stack frame 的数据结构,用于存储函数的参数、局部变量、返回地址等信息;
- 当函数执行完毕或从函数中返回时,对应的栈帧会被销毁,栈内存中的数据也随之释放;
- 栈内存的分配是静态的，编译器在编译阶段就确定了变量的内存空间大小
- 栈内存的分配是静态的，编译器在编译阶段就确定了变量的内存空间大小
:::
## 何为线程？
:::tip
是进程内的一个可执行单元，它是比进程更小的执行单位。每个线程都有自己的指令指针和栈空间，可以独立执行。一个进程可以包含多个线程，这些线程可以共享进程的所有资源，包括内存空间、文件描述符等。线程之间可以相互通信和协作，实现并发操作。
例如：王者荣耀游戏，启动的时候产生，主线程、游戏线程、网络线程等。
在许多语言和操作系统中，主线程是程序启动后自动创建的线程，负责执行程序的主要业务逻辑，主线程会按照顺序执行代码，从入口到结束
:::

## 进程和线程的关系？
:::tip
一个进程可以创建多个线程，这些线程共享一个地址空间和资源，并发的执行任务
线程是在进程内部创建和销毁的
每个进程至少包含一个主线程，主线程用于执行进程的主要业务逻辑，其他线程作为辅助线程完成特定的任务（例子：浏览器的渲染进程）
浏览器有哪些进程和线程？
浏览器是一个多进程多线程的应用程序，当启动浏览器后，会启动多个进程。
暂时无法在飞书文档外展示此内容
其中，主要的进程有：
1. **浏览器进程**：主要负责界面显示、用户交互、子进程管理，内部会启动多个线程处理不同任务
2. **网络进程**：负责网络加载资源，网络进程内部会启动多个线程处理不同的网络任务。
3. **渲染进程**：渲染进程启动后开启一个渲染主线程，负责执行HTML、CSS、JS代码。
默认情况下，浏览器会给每个标签也开启一个新的渲染进程，保证不同的标签页互不影响。
Chrome多进程浏览器
浏览器进程：主要负责界面、用户交互、子进程管理同时提供存储功能
网络进程：负责浏览器内发起所有网络请求，加载网页、资源文件、xmlhttorequest等请求
渲染进程： 负责渲染网页的逻辑，处理HTML、JavaScript图像等。
:::
## 渲染主线程是浏览器中最繁忙的线程，需要它处理的任务包括：
:::tip
1. 解析HTML、CSS、JS
2. 计算样式
3. 布局
4. 处理图层
5. 渲染页面60次/s （FPS帧）
6. 执行全局JS代码、事件处理函数，计时器的回调函数
思考：为什么渲染进程不用多个线程来处理这些事情？
要处理这么多的任务，主线程如何进行调度任务？
暂时无法在飞书文档外展示此内容
1. 在最开始的时候，渲染主线程会进入一个无线循环
2. 每次循环会检查消息队列中是否有任务存在，如果有，就取出第一个任务执行，执行完后进入下次循环。没有进入休眠
:::

## 浏览器渲染主进程是如何工作的？（事件循环）
