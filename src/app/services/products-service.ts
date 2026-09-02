import { Injectable } from '@angular/core';


interface Product {
  id: number,
  image: string,
  name: string,
  description: string,
  price: number,
  stockQnt: number 
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
   products: Product[] = [
    {
      id: 1,
    image: 'assets/images/products/m4a1.jpg',
    name: 'Fuzil de Assalto M4A1 GBB',
    description: 'Fuzil de assalto a gás com sistema Blowback realista, trilhos Picatinny e suporte para miras ópticas.',
    price: 3499.90,
    stockQnt: 12
  },
  {
    id: 2,
    image: 'assets/images/products/glock-g17.jpg',
    name: 'Pistola Glock G17 AEP',
    description: 'Pistola elétrica secundária ideal para CQB, com acionamento semi/automático e trava de segurança.',
    price: 899.00,
    stockQnt: 25
  },
  {
    id: 3,
    image: 'assets/images/products/ak-47.jpg',
    name: 'Fuzil AK-47 Tactical Spring',
    description: 'Modelo clássico de acionamento manual por mola com acabamento em imitação de madeira e corpo robusto.',
    price: 450.00,
    stockQnt: 8
  },
  {
    id: 4,
    image: 'assets/images/products/vsr10.jpg',
    name: 'Rifle Sniper VSR-10 Bolt-Action',
    description: 'Rifle de precisão a mola de longo alcance, equipado com trilho para luneta e ajuste de Hop-Up de precisão.',
    price: 1850.00,
    stockQnt: 5
  },
  {
      id: 5,
      image: 'assets/images/products/mp5.jpg',
      name: 'Submetralhadora MP5 AEG',
      description: 'Compacta e ágil para combates em ambientes fechados, com coronha retrátil e alta cadência de disparo.',
      price: 1599.00,
      stockQnt: 14
    },
    {
      id: 6,
      image: 'assets/images/products/vest.jpg',
      name: 'Colete Tático Modular Plate Carrier',
      description: 'Colete com sistema MOLLE completo, bolsos porta-magazine inclusos e tecido resistente de alta durabilidade.',
      price: 429.90,
      stockQnt: 20
    }
  ]

  getProductsList() {
    return this.products
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id)
  }
}
