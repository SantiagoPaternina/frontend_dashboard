//OBJETIVO: RECIBIR DATOSS DEL BACK Y HACERLES (render=PINTARLOS)
//1. QUEMAR O SIMULAR LOS DATOS 
let pacientes=[
    {
        id: 890,
        nombre:"Cristiano Ronaldo JR",
        fechaNacimiento:"1985-02-05",
        ciudad:"medellin",
        correo:"neymarjr@gmail.com",
        telefono:"+1 2290120020",
        ips:"San Diego",
        tienePoliza:true,
        grupoIngreso:"C",
        fechaAfiliacion:"2000-01-01"
    },
    {
        id: 891,
        nombre: "Lionel Messi JR",
        fechaNacimiento: "1987-06-24",
        ciudad: "Rosario",
        correo: "messi.jr@gmail.com",
        telefono: "+1 2290120021",
        ips: "Los Ángeles",
        tienePoliza: true,
        grupoIngreso: "B",
        fechaAfiliacion: "2000-01-01"
    },
    {
        id: 892,
        nombre: "Neymar da Silva",
        fechaNacimiento: "1992-02-05",
        ciudad: "Santos",
        correo: "neymar@gmail.com",
        telefono: "+1 2290120022",
        ips: "Miami",
        tienePoliza: true,
        grupoIngreso: "A",
        fechaAfiliacion: "2000-01-01"
    },
    {
        id: 893,
        nombre: "Kylian Mbappé",
        fechaNacimiento: "1998-12-20",
        ciudad: "Bondy",
        correo: "mbappe@gmail.com",
        telefono: "+1 2290120023",
        ips: "Paris",
        tienePoliza: true,
        grupoIngreso: "D",
        fechaAfiliacion: "2000-01-01"
    },
    {
        id: 894,
        nombre: "Neymar da Silva",
        fechaNacimiento: "1992-02-05",
        ciudad: "Santos",
        correo: "neymar@gmail.com",
        telefono: "+1 2290120022",
        ips: "Miami",
        tienePoliza: true,
        grupoIngreso: "A",
        fechaAfiliacion: "2000-01-01"
    },
    {
        id: 895,
        nombre: "Kylian Mbappé",
        fechaNacimiento: "1998-12-20",
        ciudad: "Bondy",
        correo: "mbappe@gmail.com",
        telefono: "+1 2290120023",
        ips: "Paris",
        tienePoliza: true,
        grupoIngreso: "D",
        fechaAfiliacion: "2000-01-01"
    }
]
//2. CREAR UNA REFERENCIA A UNA ETIQUETA DE HTML DONDE VAMOS A RENDERIZAR
let fila=document.getElementById("fila")

//3. SE RECORREN LOS DATOS PARA OBTENERLOS DE FORMA SEPARADA
pacientes.forEach(function(paciente){
    console.log(paciente)
    //4. SE CREA COLUMNAS 
    let columna=document.createElement("div")
    columna.classList.add("col")


    //5. SE CREA TARJETAS
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","p-5","h-100","shadow")

    //6. SE CREA UNA ETIQUETA PARA PONER EL NOMBRE DEL PACIENTE 
    let nombre=document.createElement("h2")
    nombre.textContent=paciente.nombre
    let fechaNacimiento=document.createElement("p")
    fechaNacimiento.textContent=paciente.fechaNacimiento
    let ciudad=document.createElement("p")
    ciudad.textContent=paciente.ciudad
    let correo=document.createElement("p")
    correo.textContent=paciente.correo
    let telefono=document.createElement("p")
    telefono.textContent=paciente.telefono
    let ips=document.createElement("p")
    ips.textContent=paciente.ips
    let tienePoliza=document.createElement("p")
    tienePoliza.textContent=paciente.tienePoliza
    let grupoIngreso=document.createElement("p")
    grupoIngreso.textContent=paciente.grupoIngreso
    let fechaAfiliacion=document.createElement("p")
    fechaAfiliacion.textContent=paciente.fechaAfiliacion

    //PASO FINAL (ORDENAR LAS CARTAS)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(fechaNacimiento)
    tarjeta.appendChild(ciudad)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(ips)
    tarjeta.appendChild(tienePoliza)
    tarjeta.appendChild(grupoIngreso)
    tarjeta.appendChild(fechaAfiliacion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})