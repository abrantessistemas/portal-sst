import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatSelectModule, MatCheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './usuario.html',
  styleUrl: './usuario.scss',
})
export class Usuario {
  usuarioAtivoFormControl = new FormControl('', [Validators.required]);
  nomeFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', Validators.required);
  passwordConfirmFormControl = new FormControl('', Validators.required);

  private router = inject(Router);

  navigateTolistaUsuario() {
    this.router.navigate(['/usuario']);
  }

  hideSenha = signal(true);
  clickSenhaEvent(event: MouseEvent) {
    this.hideSenha.set(!this.hideSenha());
    event.stopPropagation();
  }

  hideConfirmarSenha = signal(true);
  clickConfirmarSenhaEvent(event: MouseEvent) {
    this.hideConfirmarSenha.set(!this.hideConfirmarSenha());
    event.stopPropagation();
  }
}
