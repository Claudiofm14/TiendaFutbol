import boca from '../assets/images/boca/Titular.jpeg'
import river from '../assets/images/river/titular.jpeg'
import argentinos from '../assets/images/argentinos/titular.jpeg'
import racing from '../assets/images/racing/titular.jpeg'
import sanLorenzo from '../assets/images/san lorenzo/titular.jpeg'
import independiente from '../assets/images/independiente/titular.jpeg'
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
        precio: 10000,
        stock: 10
    },
    {
        id: 2,
        nombre: 'RIVER',
        urlImagenTitular: river ,
        precio: 10000,
        stock: 10
    },
    {
        id: 3,
        nombre: 'ARGENTINOS',
        urlImagenTitular: argentinos,
        precio: 10000,
        stock: 10
    },
    {
        id: 4, nombre: 'RACING',
        urlImagenTitular: racing,
        precio: 10000,
        stock: 10
    },
    {
        id: 5, nombre: 'SAN LORENZO',
        urlImagenTitular: sanLorenzo,
        precio: 10000,
        stock: 10
    },
    {
        id: 6,
        nombre: 'INDEPENDIENTE',
        urlImagenTitular: independiente,
        precio: 10000,
        stock: 10
    },
    {
        id: 7,
        nombre: 'HURACAN',
        urlImagenTitular: huracan,
        precio: 10000,
        stock: 10
    },
    {
        id: 8,
        nombre: 'VELEZ',
        urlImagenTitular: velez,
        precio: 10000,
        stock: 10
    },
    {
        id: 9,
        nombre: 'NEWELLS',
        urlImagenTitular: newells,
        precio: 10000,
        stock: 10
    },
    {
        id: 10,
        nombre: 'ROSARIO CENTRAL',
        urlImagenTitular: rosarioCentral,
        precio: 10000,
        stock: 10
    },
    {
        id: 11,
        nombre: 'GIMNASIA',
        urlImagenTitular: gimnasia,
        precio: 10000,
        stock: 10
    },
    {
        id: 12,
        nombre: 'TIGRE',
        urlImagenTitular: tigre,
        precio: 10000,
        stock: 10
    },
    {
        id: 13,
        nombre: 'ESTUDIANTES',
        urlImagenTitular: estudiantes,
        precio: 10000,
        stock: 10
    }

]
export const camisetas=productos.map(producto => ({
  ...producto,
  descripcion: `Camiseta titular de ${producto.nombre}`,
  descripcionCompleta:`Camiseta titular de ${producto.nombre} temporada 2026 oficial.`,
  caracteristicas:`100% algodón`  

}));
