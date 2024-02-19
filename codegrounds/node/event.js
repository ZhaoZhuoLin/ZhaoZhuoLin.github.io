const EventEmitter  = require('events');
const event = new EventEmitter ()

// 监听
event.on('data',(data)=>{
    console.log(data)
    
})
// 关闭监听
// event.off('data');

event.emit('data',{
    name:"event"
})