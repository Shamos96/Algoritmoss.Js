function saludo(){
    alert("Bienvenido al mundo");
    alert("Acontinuacion encontraras unos botones que ejecutaran algunos algoritmos");

}

function suma(){
    let A=0;
    let B=0;
    let suma=0;

    A=parseInt(prompt("Ingrese el numero primer valor a sumar"));
    B=parseInt(prompt("Ingrese el numero segundo valor a sumar"));
    suma=A+B

    alert("El resultado de la suma es " +suma )
}

function operaciones(){
var A,B,resta,multiplicacion,divicion;

A=parseInt(prompt("Ingrese el primer valor"));
B=parseInt(prompt("Ingrese el segundo valor"));

suma=A+B
resta=A-B
multiplicacion=A*B
divicion=A/B

alert("El resultado de los valores en la suma es " +suma)
alert("El resultado de los valores en la resta es " +resta)
alert("El resultado de los valores en la multiplicacion es " +multiplicacion)
alert("El resultado de los valores en la divición es " +divicion)


}


function cuadrado(){
    
    let A=0;
    

    A=parseInt(prompt("Ingrese el numero para hayar su cuadrado"));
    cuadrado=A*A

    alert("El cuadrado de " + A + "  es : " +cuadrado)
}



function promedio(){
    var nota, alumno;
    var promedio = 0;
    var i=0;
    
    alumno=(prompt("Ingrese el nombre del alumno"))
    for (i=1;i<=7;i++) {
        
        nota = parseInt(prompt("Ingrese la nota :"+(i)));
        promedio += nota;
        alert(promedio);
    }

    if (promedio<=6.2)
    {
        alert(" El estudiante " +alumno+ " reprobo con : " + promedio/7)
    }
    else (promedio>=6.2)
    {
        alert(" El estudiante " +alumno+ " aprobo con : " + promedio/7) 
    }
    
}



function mayor(){
    var v1,v2,v3

    v1=parseInt(prompt("Ingrese valor 1"));
    v2=parseInt(prompt("Ingrese valor 2"));
    v3=parseInt(prompt("Ingrese valor 3"));

    if((v1==v2)&&(v2==v3)){
        alert("Los 3 valores son iguales ")
    }
    else if((v1>v2)&&(v2>v3)){
        alert("El valor" +v1+ " es el mayor")
    }
    else if( (v2>v1)&&(v2>v3)){
        alert("El valor" +v2+ "es el mayor")
    }
    else{
        alert("El valor" +v3+ "es el mayor")
    }

}


function menor(){
    var v1,v2,v3

    v1=parseInt(prompt("Ingrese valor 1"));
    v2=parseInt(prompt("Ingrese valor 2"));
    v3=parseInt(prompt("Ingrese valor 3"));

    if((v1==v2)&&(v2==v3)){
        alert("Los 3 valores son iguales ")
    }
    else if((v1<v2)&&(v1<v3)){
        alert("El valor" +v1+ " es el menor")
    }
    else if( (v2<v1)&&(v2<v3)){
        alert("El valor" +v2+ "es el menor")
    }
    else {
        alert("El valor" +v3+ "es el menor")
    }


}


function area(){
    var B,A
    const C=2

    B=parseInt(prompt("Ingrese la base"));
    A=parseInt(prompt("Ingrese la altura"));

    area=(B*A)/C

    alert("El valor del area del triangulo es : " +area)
}

function inversion(){
        var inversion,años,meses,ganancia,gananciainversion
        const v=1.7

        inversion=parseInt(prompt("Ingrese la cantidad de su inversión"));
        años=parseInt(prompt("Ingrese la cantidad de años de su inversión"));


        mensualidad=(inversion*1.7)/100
        meses=años*12
        gananciainversion=mensualidad*meses

        ganancia=(mensualidad*meses)+inversion

        alert("Su inversion a " + años + " años generara una ganancia de " + gananciainversion + " para un valor neto de ganancia  : " + ganancia  );

}

function descuento(){
    var kilo,descuento,subtotal,pagototal;
    const p=4500

    k=parseInt(prompt("Ingrese la cantidad de kilos"));
    subtotal=k*p

    if(kilo==0&&kilo<=2){
        descuento=0
        
    }
    else if(kilo<=5&&k>=3){
        descuento=(subtotal*10)/100
    }
    else if(kilo>=6&&k<=8){
        descuento=(subtotal*15)/100
    }
    else{
        descuento=(subtotal*20)/100
    }

    pagototal=subtotal-descuento

    alert("El subtotal del producto es : " +subtotal+ " por comprar " +kilo+ " kilos se le hace un descuento de : " +descuento+ " para un pago total de : " +pagototal);
}