import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-requisitos-legais',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatIconModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatRadioModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './requisitos-legais.html',
  styleUrl: './requisitos-legais.scss',
})
export class RequisitosLegais {
  tarefaFormControl = new FormControl('', [Validators.required]);
  opcoes: string[] = ['Confirmado', 'Não Confirmado', 'Não Aplicável'];

  apresentarPlanoSegurancaObraAcaoFormControl = new FormControl('');
  apresentarPlanoSegurancaObra = '';

  apresentarAprovacaoCurriculumVitaeEngenheiroTecnicoSegurancaAcaoFormControl = new FormControl('');
  apresentarAprovacaoCurriculumVitaeEngenheiroTecnicoSeguranca = '';

  apresentarComprovacaoEspecializacoesProfissionaisSESMTAcaoFormControl = new FormControl('');
  apresentarComprovacaoEspecializacoesProfissionaisSESMT = '';

  apresentarComprovacaoVinculoEmpregaticioProfissionaisSESMTAcaoFormControl = new FormControl('');
  apresentarComprovacaoVinculoEmpregaticioProfissionaisSESMT = '';

  copiaARTProfissionalChefiaSESMTAcaoFormControl = new FormControl('');
  copiaARTProfissionalChefiaSESMT = '';

  apresentacaoQuadrosIII_IV_V_VIComprovanteEnvioAnualDRT31JaneiroAnoSubsequenteAcaoFormControl = new FormControl('');
  apresentacaoQuadrosIII_IV_V_VIComprovanteEnvioAnualDRT31JaneiroAnoSubsequente = '';
}
