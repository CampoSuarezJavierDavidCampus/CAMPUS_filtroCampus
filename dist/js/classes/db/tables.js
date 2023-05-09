export class Proveedor {
    nombre
    constructor(nombre){
        this.nombre = nombre;
    }
}

export class Rol{
    id
    descripcion
    constructor(datos){
        this.id = datos.id;
        this.descripcion = datos.descripcion;
    }
}

export class Usuario{
    id
    img
    nombre
    apellido
    direccion
    telefono
    constructor(datos){
        this.id=datos.id;
        this.img=datos.img;
        this.nombre=datos.nombre;
        this.apellido=datos.apellido;
        this.direccion=datos.direccion;
        this.telefono=datos.telefono;
    }
}

export class Categoria{
    id
    nombre
    descripcion
    constructor(datos){
        this.id= datos.id;
        this.nombre= datos.nombre;
        this.descripcion= datos.descripcion;
    }
    get datos(){
        return {
            id:this.id,
            nombre:this.nombre,
            descripcion:this.descripcion
        }
    }
}

export class Producto{
    id
    nombre
    precio
    stock
    categoriaId
    constructor(datos){
        this.id =  datos.id;
        this.nombre = datos.nombre;
        this.precio = datos.precio;
        this.stock = datos.stock;
        this.categoriaId = datos.categoriaId;
    }
}

export class Empleado{
    id
    user
    password
    email
    rolId
    usuarioId
    constructor(datos){
        this.id =  datos.id;
        this.user = datos.user;
        this.password = datos.password;
        this.email = datos.email;
        this.rolId = datos.rolId;
        this.usuarioId = datos.usuarioId;
    }
}

export class Compra{
    id
    fecha
    cantidad
    proveedorId
    productoId
    constructor(datos){
        this.id = datos.id;
        this.fecha = datos.fecha;
        this.cantidad = datos.cantidad;
        this.proveedorId = datos.proveedorId;
        this.productoId = datos.productoId;
    }
}

export class Factura{
    id
    fecha
    usuarioId
    empleadoId
    constructor(datos){
        this.id = datos.id;
        this.fecha = datos.fecha;
        this.usuarioId = datos.usuarioId;
        this.empleadoId = datos.empleadoId;
    }
}

export class DetallesFactura{
    id
    cantidad
    facturaId
    productoId
    constructor(datos){
        this.id = id;
        this.cantidad = cantidad;
        this.facturaId = facturaId;
        this.productoId = productoId;
    }
}
