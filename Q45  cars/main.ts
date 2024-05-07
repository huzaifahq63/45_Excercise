type car = {
    manufacture: string
    model: string
    [key: string]: any;
}

function createcar (manufacture:string,model: string,optional: Record<string, any>): car{
    return{
        manufacture,
        model,
        ...optional
    }
}
const mycar: car= createcar("Toyota","Fortuner", {colour:"Black", year:"2022"})
console.log(mycar);