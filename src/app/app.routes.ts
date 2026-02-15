import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Dashboard } from './admin/dashboard/dashboard';
import { Perfil } from './admin/perfil/perfil';
import { Usuario } from './admin/usuario/usuario';
import { Login } from './auth/login/login';
import { RequisitosLegais } from './client/requisitos-legais/requisitos-legais';

export const routes: Routes = [
    {
        path: '', component: Login
    },
    {
        path: 'admin', component: Admin, children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'requisitos-legais', component: RequisitosLegais },
            // { path: 'requisitos', component: Requisitos },
            // { path: 'nr-32', component: Nr32 },
            { path: 'perfil', component: Perfil },
            { path: 'usuario', component: Usuario },
        ]
    }
];
