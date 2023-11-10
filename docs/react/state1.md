# state简写
```HTML
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

        class Weather extends React.Component {
            // 初始化状态
            state = {
                isHot: false,
            }
            //自定义方法，要用赋值语句的形式+箭头函数
            changeWeather = () => {
                console.log("changeWeather", this)
                let isHot = this.state.isHot;
                this.setState({ isHot: !isHot })
            }
            render() {
                console.log("render", this)
                return <h1 onClick={this.changeWeather}>今天天气很{this.state.isHot ? '炎热' : '凉爽'}</h1>;
            }
        }
        ReactDOM.render(
            <Weather />,
            document.getElementById("root")
        )

    </script>
</body>

</html>
```