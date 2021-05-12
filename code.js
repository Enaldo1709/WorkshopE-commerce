"use strict"



class product{

    constructor(name, price, url_img,id){

        
        this.name = name
        this.price =price
        this.url_img= url_img
        this.id=id
        
    }

    add_product(Products_list){
        Products_list.push(this)
    }
}


const pantalon = new product("pantalon",1000,"https://www.instyle.es/medio/2019/02/04/pantalones-vaqueros-cropped-primavera-uterque_b2a5edab_1000x1499.jpg",1)

// pregnuntar por que no se muestra en pantalla: console.log(pantalon)
const buy_list=[]
pantalon.add_product()