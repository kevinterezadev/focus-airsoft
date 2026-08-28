import { Routes } from '@angular/router';
import { Mainlayout } from './components/mainlayout/mainlayout';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Mainlayout, // Este é o componente que tem o header, footer e o router-outlet
    children: [
      { 
        path: '', 
        component: Home // Quando acessar '/', carrega o Mainlayout E o HomeComponent dentro dele
      },
      { 
        path: 'sobre', 
        component: About // Quando acessar '/', carrega o Mainlayout E o HomeComponent dentro dele
      },
      { 
        path: 'contato', 
        component: Contact // Quando acessar '/', carrega o Mainlayout E o HomeComponent dentro dele
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