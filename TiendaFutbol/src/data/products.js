import boca from '../assets/images/boca/BocaTitular.jpg'
import river from '../assets/images/river/RiverTitular.jpg'
import argentinos from '../assets/images/argentinos/ArgentinosTitular.jpg'
import racing from '../assets/images/racing/RacingTitular.jpg'
import sanLorenzo from '../assets/images/san lorenzo/SanLorenzoTitular.jpg'
import independiente from '../assets/images/independiente/IndependienteTitular.jpg'
import estudiantes from '../assets/images/estudiantes/titular.jpeg'
import huracan from '../assets/images/huracan/titular.jpeg'
import velez from '../assets/images/velez/titular.jpeg'
import newells from '../assets/images/newell´s/titular.jpeg'
import rosarioCentral from '../assets/images/rosario central/titular.jpeg'
import gimnasia from '../assets/images/gimnasia/titular.jpeg'
import tigre from '../assets/images/tigre/titular.jpeg'


import adidasCourtBlockAzul from '../assets/images/zapatillas/adidas_courtblock_azul.png'
import adidasRunner2 from '../assets/images/zapatillas/adidas_runner2.png'
import jordanCMFT from '../assets/images/zapatillas/JordanCMFT.png'
import nikePegasusPlus from '../assets/images/zapatillas/nike_pegasus_plus.png'


 const productos= [
    {
        id: 1,
        nombre: 'BOCA',
        urlImagenTitular: boca,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 2,
        nombre: 'RIVER',
        urlImagenTitular: river ,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 3,
        nombre: 'ARGENTINOS',
        urlImagenTitular: argentinos,
        precio: 2199,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 4, nombre: 'RACING',
        urlImagenTitular: racing,
        precio: 2999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 5, nombre: 'SAN LORENZO',
        urlImagenTitular: sanLorenzo,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 6,
        nombre: 'INDEPENDIENTE',
        urlImagenTitular: independiente,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 7,
        nombre: 'HURACAN',
        urlImagenTitular: huracan,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 8,
        nombre: 'VELEZ',
        urlImagenTitular: velez,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 9,
        nombre: 'NEWELLS',
        urlImagenTitular: newells,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 10,
        nombre: 'ROSARIO CENTRAL',
        urlImagenTitular: rosarioCentral,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 11,
        nombre: 'GIMNASIA',
        urlImagenTitular: gimnasia,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 12,
        nombre: 'TIGRE',
        urlImagenTitular: tigre,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 13,
        nombre: 'ESTUDIANTES',
        urlImagenTitular: estudiantes,
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    }

]
export const camisetas=productos.map(producto => ({
  ...producto,
  descripcion: `Camiseta titular de ${producto.nombre}`,
  descripcionCompleta:`Camiseta titular de ${producto.nombre} temporada 2026 oficial.`,
  caracteristicas:`100% algodón`  

}));


const zapatillasData = [
    {
        id: 1,
        marca:"Nike",
        nombre:"Nike Pegasus Plus",
        categoria:"Zapatillas de Running para Hombre",
        precio:369999,
        descuento:0.3,
        imagenUrl: nikePegasusPlus,
        stock: 10
    },
    {
        id: 2,
        marca: "Jordan",
        nombre: "Jordan CMFT Era",
        categoria: "Zapatillas Jordan para Mujer",
        precio:269999,
        descuento: 0.35,
        imagenUrl: jordanCMFT
    },

    {
        id: 3,
        marca: "Adidas",
        nombre: "Adidas CourtBlock Azul",
        categoria: "Zapatillas Adidas para Hombre",
        precio:149999,
        descuento: 0.20,
        imagenUrl: adidasCourtBlockAzul
    },
    {
        id: 4,
        marca: "Adidas",
        nombre: "Adidas Runner 2",
        categoria: "Zapatillas Adidas para Hombre",
        precio:199999,
        descuento: 0.50,
        imagenUrl: adidasRunner2
    }



]

// Calculamos la oferta de forma segura
export const zapatillas = zapatillasData.map(zapato => ({
    ...zapato,
    precioOferta: zapato.precio - (zapato.precio * zapato.descuento)
}));
