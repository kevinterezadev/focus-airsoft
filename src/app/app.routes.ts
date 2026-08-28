import { Routes } from '@angular/router';
import { Mainlayout } from './components/mainlayout/mainlayout';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Mainlayout, 
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
    //   { 
    //     path: 'produtos', 
    //     component: ProdutosComponent // Quando acessar '/produtos', carrega o Mainlayout E a tela de produtos
    //   }
    ]
  },
  {
    path: '**', 
    redirectTo: '' // Se digitar qualquer rota errada, joga de volta pra home
  }
];