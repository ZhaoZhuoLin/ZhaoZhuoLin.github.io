// v1.0
// const dom = document.createElement('div')
// dom.id="app"
// const textNode = document.createTextNode("Hello world!")
// dom.append(textNode)
// document.getElementById("app").append(dom)

function createElement (type,props,...children){
    return {
        type,
        props:{
            ...props,
            children:children.map((child)=>{
                return typeof child == "string"? createTextNode(child): child
            }),
        }
    }
}

function createTextNode(text){
    return {
        type:"TEXT_ELEMENT",
        props:{
            nodeValue:text,
            children:[]
        }
    }
}

// v2.0
// const text = createTextNode("Hello world!")
// const app = createElement("div",{id:"app"},text)
// const dom = document.createElement(app.type)
// dom.id=app.props.id
// const textNode = document.createTextNode("")
// textNode.nodeValue = text.props.nodeValue
// dom.append(textNode)
// console.log(dom)
// document.getElementById("root").append(dom)



// v3.0
function render(el,container){
    const dom = el.type==="TEXT_ELEMENT"? document.createTextNode(""):document.createElement(el.type)

    Object.keys(el.props).forEach((key)=>{
        if(key!='children'){
            dom[key] = el.props[key]
        }
    })

    const children = el.props.children
    children.forEach((child)=>{
        render(child,dom)
    })
    console.log(dom)

    container.append(dom)
}

const text = createTextNode("Hello world!")
const App = createElement("div",{id:"app"},"123")
render(App,document.getElementById("root"));