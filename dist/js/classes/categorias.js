import { Connection } from './db/connection.js';
export default class Categorias extends Connection{        

    constructor(Categoria = null, method = 'GET'){
        super(Categoria,method.toUpperCase(),'/Categorias');        
    }

    async crear(newCategoria){
        this.method = 'POST';
        this.content = newCategoria.datos;            
        let peticion = this.peticion();
        console.log(peticion)
    }
    /* AGREGAR //////////////////////////////////////////////////////// */
    async agregar(datos){
        let 
        id = Math.trunc(parseInt(moment().format('DDMMYYYYhmmss'))*Math.random());
        datos =new FormData(document.getElementById('agregar'));        
        datos.append('id',id)
        
        this.content = datos;
        this.method = 'POST';
        let res = await this.peticion(datos);
        console.log(res);
        

    }

    /* LISTAR ///////////////////////////////////////////////////////// */    
    async listar(){
        let filas = await this.#_tablas();
        
        if(!filas.length) return null;

        const 
        tablaBody = document.querySelector('.main__table-body'),
        tablaHead = document.querySelector('.main__table-head');
        

        let 
        filaHead = this.#_getFila(filas[0],true),
        fragment = document.createDocumentFragment();         

        filas.forEach(datos => {            
            fragment.appendChild(this.#_getFila(datos));                        
        });                
        

        tablaBody.append(fragment);                
        tablaHead.append(filaHead)
    }

    async #_tablas(){        
        return await (await this.peticion()).json();         
    }
    
    #_getFila(datos,isTableHead = false){  
        let 
        options = document.createElement('TD'),
        fila = document.createElement('TR');
        fila.classList.add('main__table-row'); 
               
        
        if (!isTableHead) {
            let 
            
            del = document.createElement('BUTTON'),
            edit = document.createElement('BUTTON')
            options.classList.add('main__table-row-cell','main__table-row-cell--options');

            del.classList.add('btn', 'btn-danger', 'btn-lg','m-2');
            edit.classList.add('btn', 'btn-primary', 'btn-lg');

            del.textContent = 'Borrar';
            edit.textContent = 'Editar';

            options.appendChild(del)
            options.appendChild(edit)
        };                                

        datos = isTableHead? Object.keys(datos) : Object.values(datos);
        if(isTableHead)datos.push('acciones');
        datos.forEach((dato)=>{    
            let
            element = 'TD',
            classes = ['main__table-row-cell'];       
            
            if (isTableHead) {
                element = 'TH';
                classes.push('main__table-row-cell--collumn','py-4','px-2','fs-3');
            }

            element = document.createElement(element)
            element.textContent = dato;            
            element.classList.add(...classes);                        
            fila.appendChild(element);            
        })
                
        
        if (!isTableHead)fila.appendChild(options);

        return fila;
    }
}



