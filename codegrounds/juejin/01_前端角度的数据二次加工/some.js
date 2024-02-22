//对数组基本数据类型和引用数据类型都生效
const like = ["bilibili", "xiaohongshu", "youtube"].some((item) => item == "youtube")
console.log(like)

const likeList = [{
    name: "bilibili",
}, {
    name: "xiaohongshu",
}, {
    name: "youtube"
}]
const result = likeList.some((item) => item.name == "bilibili")
console.log(result) //true