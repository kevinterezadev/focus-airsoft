import { Injectable } from '@angular/core';


interface Product {
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
  private products: Product[] = [
    {
    image: 'assets/images/products/m4a1.jpg',
    name: 'Fuzil de Assalto M4A1 GBB',
    description: 'Fuzil de assalto a gás com sistema Blowback realista, trilhos Picatinny e suporte para miras ópticas.',
    price: 3499.90,
    stockQnt: 12
  },
  {
    image: 'assets/images/products/glock-g17.jpg',
    name: 'Pistola Glock G17 AEP',
    description: 'Pistola elétrica secundária ideal para CQB, com acionamento semi/automático e trava de segurança.',
    price: 899.00,
    stockQnt: 25
  },
  {
    image: 'assets/images/products/ak47.jpg',
    name: 'Fuzil AK-47 Tactical Spring',
    description: 'Modelo clássico de acionamento manual por mola com acabamento em imitação de madeira e corpo robusto.',
    price: 450.00,
    stockQnt: 8
  },
  {
    image: 'assets/images/products/vsr10.jpg',
    name: 'Rifle Sniper VSR-10 Bolt-Action',
    description: 'Rifle de precisão a mola de longo alcance, equipado com trilho para luneta e ajuste de Hop-Up de precisão.',
    price: 1850.00,
    stockQnt: 5
  }
  ]
}
