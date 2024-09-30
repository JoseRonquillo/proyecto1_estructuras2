let compra: MaxHeap = new MaxHeap(15);
let venta: MinHeap = new MinHeap(15);
let registro: any[] = [];

class Orden{

    public compania: String;
    public cantidad: number;
    public precio: number;
    public mx_mn: number;
    public tipo: String;
    
    constructor(compania:String, cantidad:number, mx_mn:number, tipo:String,precio:number) {
        this.compania = compania;
        this.cantidad = cantidad;
        this.mx_mn = mx_mn;
        this.tipo = tipo;
        this.precio = precio;
    }

    public str(){
        return this.tipo + " "+ this.cantidad.toString()+" acciones de: "+this.compania;
    }

}

function crearOrden(compania:String, cantidad:number, mx_mn:number, tipo:String ,precio:number){
    if(tipo == "venta"){
        let orden: Orden = new Orden(compania,cantidad,mx_mn,tipo,precio);
        venta.insert(orden);
    }
    else{
        let orden: Orden = new Orden(compania,cantidad,mx_mn,tipo,precio);
        compra.insert(orden);
    }
}

function Emparejar_ordenes(){
    let max = compra.ret_heap();
    let min = venta.ret_heap();
    for (const valmx of max) {
        for (const valmn of min) {
            if(valmx.compania == valmn.compania && valmx.cantidad != 0 && valmn.cantidad != 0){
                if(valmx.cantidad > valmn.cantidad && valmn.precio >= valmx.precio){
                    valmx.cantidad -= valmn.cantidad;
                    registro.push(valmn.str() + valmx.str());
                }
                else if(valmx.cantidad < valmn.cantidad && valmn.precio >= valmx.precio){
                    valmn.cantidad -= valmx.cantidad;
                    registro.push(valmn.str() + valmx.str());
                }
                else if(valmx.cantidad == valmn.cantidad && valmn.precio >= valmx.precio){
                    valmn.cantidad = 0;
                    valmx.cantidad = 0;
                    registro.push(valmn.str() + valmx.str());
                }
            }
        }
    }
    compra.act_heap(max);
    venta.act_heap(min);
}

