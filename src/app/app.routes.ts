import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Produtos } from './components/produtos/produtos';
import { ProdutoDetalhe } from './components/produto-detalhe/produto-detalhe';

export const routes: Routes = [
  {
    path: '',
    component: Layout, 
    children: [
      { 
        path: '', 
        component: Home 
      },
      { 
        path: 'sobre', 
        component: About 
      },
      { 
        path: 'contato', 
        component: Contact 
      },
      {
        path: 'produtos/:id',
        component: ProdutoDetalhe
      },
      { 
        path: 'produtos', 
        component: Produtos
      },
    ]
  },
  { // Se digitar qualquer rota errada, joga de volta pra home
    path: '**', 
    redirectTo: '' 
  }
];