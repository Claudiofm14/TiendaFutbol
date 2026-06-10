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
import realMadrid from '../assets/images/europa/realtitular.webp'
import barcelona from '../assets/images/europa/barcelonatitular.webp'
import arsenal from '../assets/images/europa/arsenaltitular.jpeg'
import atletico from '../assets/images/europa/atleticotitular.webp'
import bayern from '../assets/images/europa/bayerntitular.avif'
import city from '../assets/images/europa/citytitular.jpeg'
import inter from '../assets/images/europa/intertitular.jpeg'
import juventus from '../assets/images/europa/juventustitular.webp'
import milan from '../assets/images/europa/milantitular.jpg'
import liverpool from '../assets/images/europa/liverpooltitular.webp'
import psg from '../assets/images/europa/psgtitular.jpeg'
import manchester from '../assets/images/europa/manchestertitular.webp'
import argentinatitular from '../assets/images/seleccion/argentinatitular.webp'
import argentinasuplente from '../assets/images/seleccion/argentinasuplente.jpeg'
const productos = [
    {
        id: 1,
        nombre: 'BOCA',
        urlImagenTitular: boca,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 2,
        nombre: 'RIVER',
        urlImagenTitular: river,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 3,
        nombre: 'ARGENTINOS',
        urlImagenTitular: argentinos,
        precio: 2199,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 4, 
        nombre: 'RACING',
        urlImagenTitular: racing,
        precio: 2999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 5, 
        nombre: 'SAN LORENZO',
        urlImagenTitular: sanLorenzo,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 6,
        nombre: 'INDEPENDIENTE',
        urlImagenTitular: independiente,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 7,
        nombre: 'HURACAN',
        urlImagenTitular: huracan,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 8,
        nombre: 'VELEZ',
        urlImagenTitular: velez,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 9,
        nombre: 'NEWELLS',
        urlImagenTitular: newells,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 10,
        nombre: 'ROSARIO CENTRAL',
        urlImagenTitular: rosarioCentral,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 11,
        nombre: 'GIMNASIA',
        urlImagenTitular: gimnasia,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 12,
        nombre: 'TIGRE',
        urlImagenTitular: tigre,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 13,
        nombre: 'ESTUDIANTES',
        urlImagenTitular: estudiantes,
        precio: 219999,
        stock: 10,
        categoria: 'Clubes Argentinos'
    },
    {
        id: 14,
        nombre: 'ARGENTINA',
        urlImagenTitular: argentinatitular, 
        precio: 250000,
        stock: 10,
        categoria: 'Selección'
    },
    {
        id: 15,
        nombre: 'REAL MADRID',
        urlImagenTitular: realMadrid, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 16,
        nombre: 'BARCELONA',
        urlImagenTitular: barcelona, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 17,
        nombre: 'ATLETICO DE MADRID',
        urlImagenTitular: atletico, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 18,
        nombre: 'ARSENAL',
        urlImagenTitular: arsenal, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 19,
        nombre: 'LIVERPOOL',
        urlImagenTitular: liverpool, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 20,
        nombre: 'MANCHESTER CITY',
        urlImagenTitular: city, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 21,
        nombre: 'MANCHESTER UNITED',
        urlImagenTitular: manchester, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 22,
        nombre: 'JUVENTUS',
        urlImagenTitular: juventus, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 23,
        nombre: 'INTER DE MILAN',
        urlImagenTitular: inter, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 24,
        nombre: 'MILAN',
        urlImagenTitular: milan, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 25,
        nombre: 'PARIS SAINT GERMAIN',
        urlImagenTitular: psg, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },
    {
        id: 26,
        nombre: 'BAYERN MUNICH',
        urlImagenTitular: bayern, 
        precio: 280000,
        stock: 10,
        categoria: 'Clubes de Europa'
    },

    {
        id: 27,
        nombre: 'ARGENTINA SUPLENTE',
        urlImagenTitular: argentinasuplente, 
        precio: 250000,
        stock: 10,
        categoria: 'Selección'
    }
    

]

export const camisetas = productos.map(producto => ({
  ...producto,
  descripcion: `Camiseta titular de ${producto.nombre}`,
  descripcionCompleta: `Camiseta titular de ${producto.nombre} temporada 2026 oficial.`,
  caracteristicas: `100% algodón`  
}));

const zapatillasData = [
    {
        id: 101,
        marca: "Nike",
        nombre: "Nike Pegasus Plus",
        categoria: "Zapatillas",
        descripcion: "Zapatillas de Running para Hombre",
        precio: 369999,
        descuento: 0.3,
        urlImagenTitular: nikePegasusPlus,
        stock: 10
    },
    {
        id: 102,
        marca: "Jordan",
        nombre: "Jordan CMFT Era",
        categoria: "Zapatillas",
        descripcion: "Zapatillas Jordan para Mujer",
        precio: 269999,
        descuento: 0.35,
        urlImagenTitular: jordanCMFT,
        stock: 10
    },
    {
        id: 103,
        marca: "Adidas",
        nombre: "Adidas CourtBlock Azul",
        categoria: "Zapatillas",
        descripcion: "Zapatillas Adidas para Hombre",
        precio: 149999,
        descuento: 0.20,
        urlImagenTitular: adidasCourtBlockAzul,
        stock: 10
    },
    {
        id: 104,
        marca: "Adidas",
        nombre: "Adidas Runner 2",
        categoria: "Zapatillas",
        descripcion: "Zapatillas Adidas para Hombre",
        precio: 199999,
        descuento: 0.50,
        urlImagenTitular: adidasRunner2,
        stock: 10
    }
]

export const zapatillas = zapatillasData.map(zapato => ({
    ...zapato,
    precioOferta: zapato.precio - (zapato.precio * zapato.descuento)
}));

export const todosLosProductos = [...camisetas, ...zapatillas];