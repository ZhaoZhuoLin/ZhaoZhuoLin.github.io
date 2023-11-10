# 类式组件
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .native {
            color: aquamarine;
        }
    </style>
</head>

<body>
    <div id="root"></div>
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script type="text/babel">

        class Welcome extends React.Component {
            render() {
                console.log('reader this: ',this)
                // reader是放在哪里的？--Welcome类的原型链上，供实例使用
                //reader中的this是谁？ Welcome组件实例对象 = Welcome的实例化对象
                return <h1>Hello, {this.props.name}</h1>;
            }
        }
        ReactDOM.render(
            <Welcome name="React"/>,
            document.getElementById("root")
        )
         /**
         * 执行ReactDOM.render发生了什么
         * 1.React解析组件标签，找到了Welcom组件
         * 2.发现组件是使用类定义的，随后new出来该类的实例，并通过实例调用到原型上的reader方法
         * 3.将render返回的虚拟DOM转为真实DOM，随后呈现
         */
    </script>
</body>

</html>
```