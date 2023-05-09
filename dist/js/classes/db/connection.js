export class Connection{
    #_URL = "http://localhost:3000"    
    #_Method
    #_Body = {}
    constructor(Data, Method, Url = ''){
        this.#_Method = Method
        if(Data)this.#_Body = Data;
        this.#_URL += Url
    }
    peticion(){
        let options = {
            method: this.#_Method,
            mode: "no-cors",
            headers:{
                "Content-Type": "application/json;charset=utf-8"
            },
            body:this.#_Body        
        }               
        return fetch(this.#_URL,options)
    }

    

    get method(){
        return this.#_Method
    }
    set method(newMethod){
        this.#_Method = newMethod
    }
    get content(){
        return this.#_Body 
    }
    set content(Data){
        this.#_Body = Data
    }
    get Url(){
        return this.#_URL
    }
    set Url(newUrl){
        this.#_URL = newUrl
    }
}