//number[]
let arr:number[] = [1,2,3]
let arr1:boolean[] = [true,false]
let arr2:String[] = ["AA","BB"]

// 泛型
let arr3:Array<number> = [1,2,3]
let arr4:Array<boolean> = [true,false]
let arr5:Array<String> = ["AA","BB"]

// 数组普通类型
interface Phone{
    name:string,
    price?:Number
}
let phoneList:Phone[] = [
    {name:"小米",price:3500},
    {name:"华为"},
    {name:"OPPO"},
    {name:"VIVO"}
]

// 定义多维数组
let numList:number[][] = [[1,2],[1,2]]
let numList1:Array<Array<number>> = [[1,2],[1,2]]

function func(...args:any){
    console.log(args)
}
func({name:123})
func(false)