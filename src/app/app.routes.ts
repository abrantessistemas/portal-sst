import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Dashboard } from './admin/dashboard/dashboard';
import { RequisitosLegais } from './admin/requisitos-legais/requisitos-legais';
import { Nr32 } from './admin/nr-32/nr-32';
import { Login } from './auth/login/login';
import { Usuario } from './admin/usuario/usuario';
import { Perfil } from './admin/perfil/perfil';

export const routes: Routes = [
    {
        path: '', component: Login
    },
    {
        path: 'admin', component: Admin, children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'requisitos-legais', component: RequisitosLegais },
            { path: 'nr-32', component: Nr32 },
            { path: 'perfil', component: Perfil },
            { path: 'usuario', component: Usuario },
        ]
    }
];
