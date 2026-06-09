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
        precio: 219999,
        stock: 10,
        categoria: 'indumentaria'
    },
    {
        id: 4, nombre: 'RACING',
        urlImagenTitular: racing,
        precio: 219999,
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
