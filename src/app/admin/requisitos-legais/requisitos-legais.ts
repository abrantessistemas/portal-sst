import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-requisitos-legais',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatIconModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatRadioModule,
    MatExpansionModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './requisitos-legais.html',
  styleUrl: './requisitos-legais.scss',
})
export class RequisitosLegais {
  tarefaFormControl = new FormControl('', [Validators.required]);
  opcoes: string[] = ['Confirmado', 'Não Confirmado', 'Não Aplicável'];
  //01 NR 1
  apresentarPlanoSegurancaObraAcaoFormControl = new FormControl('');
  apresentarPlanoSegurancaObra = '';
  //02 Geral
  apresentarAprovacaoCurriculumVitaeEngenheiroTecnicoSegurancaAcaoFormControl = new FormControl('');
  apresentarAprovacaoCurriculumVitaeEngenheiroTecnicoSeguranca = '';
  //03 4.3.3 4.4 4.4.1
  apresentarComprovacaoEspecializacoesProfissionaisSESMTAcaoFormControl = new FormControl('');
  apresentarComprovacaoEspecializacoesProfissionaisSESMT = '';
  //04 4.4.2
  apresentarComprovacaoVinculoEmpregaticioProfissionaisSESMTAcaoFormControl = new FormControl('');
  apresentarComprovacaoVinculoEmpregaticioProfissionaisSESMT = '';
  //05 4.12.d
  copiaARTProfissionalChefiaSESMTAcaoFormControl = new FormControl('');
  copiaARTProfissionalChefiaSESMT = '';
  //06 4.12.i
  apresentacaoQuadrosIII_IV_V_VIComprovanteEnvioAnualDRT31JaneiroAnoSubsequenteAcaoFormControl = new FormControl('');
  apresentacaoQuadrosIII_IV_V_VIComprovanteEnvioAnualDRT31JaneiroAnoSubsequente = '';
  //07 4.17
  copiaComprovanteRegistroSESMT_DRTAcaoFormControl = new FormControl('');
  copiaComprovanteRegistroSESMT_DRT = '';
  //08 5
  apresentarComposicaoCIPA_ProgramacaoProcessoEleitoralAcaoFormControl = new FormControl('');
  apresentarComposicaoCIPA_ProgramacaoProcessoEleitoral = '';
  //09 5
  apresentarCopiaTreinamentoMembrosCIPA_CertificadosAntesPosseAcaoFormControl = new FormControl('');
  apresentarCopiaTreinamentoMembrosCIPA_CertificadosAntesPosse = '';
  //10 5
  apresentarCopiaAtasInstalacaoPosseCalendarioCIPA_ProtocoladaJuntoDRTAcaoFormControl = new FormControl('');
  apresentarCopiaAtasInstalacaoPosseCalendarioCIPA_ProtocoladaJuntoDRT = '';
  //11 5
  emCasoAcidenteGraveApresentarCopiaReuniaoExtraordinariaCIPA48horasAcaoFormControl = new FormControl('');
  emCasoAcidenteGraveApresentarCopiaReuniaoExtraordinariaCIPA48horas = '';
  //12 5
  apresentarCopiaMapaRiscoAcaoFormControl = new FormControl('');
  apresentarCopiaMapaRisco = '';
  //13 6.6
  apresentarCopiaRegistroTreinamentoSobreUsoEPIAcaoFormControl = new FormControl('');
  apresentarCopiaRegistroTreinamentoSobreUsoEPI = '';
  //14 6.7
  copiaProvaQueUsoEPI_ObrigatorioAcaoFormControl = new FormControl('');
  copiaProvaQueUsoEPI_Obrigatorio = '';
  //15 7.1
  apresentarCopiaPCMSO_ParaAprovacaoAcaoFormControl = new FormControl('');
  apresentarCopiaPCMSO_ParaAprovacao = '';
  //16 7.3.1.c
  apresentarCopiaDocumentosMedicoCoordenadorPCMSO_DesignadoAcaoFormControl = new FormControl('');
  apresentarCopiaDocumentosMedicoCoordenadorPCMSO_Designado = '';
  // 17 7.4.6
  apresentarCopiaRelatorioAnualPCMSOAcaoFormControl = new FormControl('');
  apresentarCopiaRelatorioAnualPCMSO = '';
  // 18 7.4.6.2
  apresentarCopiaAtaCIPAOndePCMSOApresentadoDiscutidoAcaoFormControl = new FormControl('');
  apresentarCopiaAtaCIPAOndePCMSOApresentadoDiscutido = '';
  // 19 7.5.1
  apresentarCopiaTreinamentoPrimeirosSocorrosAcaoFormControl = new FormControl('');
  apresentarCopiaTreinamentoPrimeirosSocorros = '';
  // 20 7
  apresentarCopiasTreinamentosConstantesPCMSO_RealizadosAcaoFormControl = new FormControl('');
  apresentarCopiasTreinamentosConstantesPCMSO_Realizados = '';
  // 21 9.1.1
  apresentarCopiaPPRA_AprovacaoAcaoFormControl = new FormControl('');
  apresentarCopiaPPRA_Aprovacao = '';
  // 22 9.2.1.1
  apresentarRevisaoAnualPPRAAcaoFormControl = new FormControl('');
  apresentarRevisaoAnualPPRA = '';
  // 23 9.2.2.1
  apresentarCopiaAtaCIPA_OndePPRA_ApresentadoDiscutidoAcaoFormControl = new FormControl('');
  apresentarCopiaAtaCIPA_OndePPRA_ApresentadoDiscutido = '';
  // 24 10.3.2.7.1
  apresentarCopiaLaudoTecnicoInstalacoesJuntoARTAcaoFormControl = new FormControl('');
  apresentarCopiaLaudoTecnicoInstalacoesJuntoART = '';
  // 25 10.3.3.1
  apresentarCopiaTreinamentoPrimeirosSocorrosEletricistasTecnicosEletricidade_eletronicaOperadoresInstalacoesEletricasAcaoFormControl = new FormControl('');
  apresentarCopiaTreinamentoPrimeirosSocorrosEletricistasTecnicosEletricidade_eletronicaOperadoresInstalacoesEletricas = '';
  // 26 10.3.3.2
  apresentarCopiaTreinamentoCombateIncendioEletricistasTecnicosEletricidade_EletronicaOperadoresInstalacoesEletricasAcaoFormControl = new FormControl('');
  apresentarCopiaTreinamentoCombateIncendioEletricistasTecnicosEletricidade_EletronicaOperadoresInstalacoesEletricas = '';
  // 27 10.4.1.1.1
  apresentarProcedimentoEmitidoSESMT_SobreAutorizacaoEmpregadosTrabalhosInstalacoesEletricasAcaoFormControl = new FormControl('');
  apresentarProcedimentoEmitidoSESMT_SobreAutorizacaoEmpregadosTrabalhosInstalacoesEletricas = '';
  // 28 10.4.1.4
  apresentarRegistroEmpregadoCarteiraTrabalhoAutorizadoAtuarInstalacoesEletricasAcaoFormControl = new FormControl('');
  apresentarRegistroEmpregadoCarteiraTrabalhoAutorizadoAtuarInstalacoesEletricas = '';
  // 29 10
  apresentarCopiaCertificadosTreinamentoEletricistasAcaoFormControl = new FormControl('');
  apresentarCopiaCertificadosTreinamentoEletricistas = '';
  // 30 11.1.5
  apresentarCopiaTreinamentoEspecificoOperadoresEquipamentoForcaMotrizPropriaDadoPelaEmpresaHabilitaraTalFuncaoAcaoFormControl = new FormControl('');
  apresentarCopiaTreinamentoEspecificoOperadoresEquipamentoForcaMotrizPropriaDadoPelaEmpresaHabilitaraTalFuncao = '';
  // 31 11.1.6
  apresentarCopiaCartaoIdentificacaoFotoOperadorEquipamentosTransporteMotorizadoAcaoFormControl = new FormControl('');
  apresentarCopiaCartaoIdentificacaoFotoOperadorEquipamentosTransporteMotorizado = '';
  // 32 11.1.8
  apresentarPlanoInspecaoEquipamentosTransporteMotorizadoAcaoFormControl = new FormControl('');
  apresentarPlanoInspecaoEquipamentosTransporteMotorizado = '';
  // 33 12.6.2
  apresentarComprovanteCredenciamentoPessoaDarManutencaoInspecaoMaquinasAcaoFormControl = new FormControl('');
  apresentarComprovanteCredenciamentoPessoaDarManutencaoInspecaoMaquinas = '';
  // 34 15
  apresentarLaudoAvaliacoesAmbientaisAcaoFormControl = new FormControl('');
  apresentarLaudoAvaliacoesAmbientais = '';
  // 35 17.2.3
  apresentarCopiaTreinamentoInstrucoesSobreMetodoTransporteManualCargaAcaoFormControl = new FormControl('');
  apresentarCopiaTreinamentoInstrucoesSobreMetodoTransporteManualCarga = '';
  // 36 17.5.2
  apresentarLaudoComprovandoSituacaoAmbienteConformidadeExigenciaAcaoFormControl = new FormControl('');
  apresentarLaudoComprovandoSituacaoAmbienteConformidadeExigencia = '';
  // 37 18.2.1
  apresentarCopiaProtocoladaComunicacaoPreviaAntesInicioObraJuntoDRTAcaoFormControl = new FormControl('');
  apresentarCopiaProtocoladaComunicacaoPreviaAntesInicioObraJuntoDRT = '';
  // 38 18.3.1
  apresentarCopiaPCMAT_AprovacaoAcaoFormControl = new FormControl('');
  apresentarCopiaPCMAT_Aprovacao = '';
  // 39 18
  apresentarCopiaAtaCIPA_OndePCMAT_FoiApresentadoDiscutidoAcaoFormControl = new FormControl('');
  apresentarCopiaAtaCIPA_OndePCMAT_FoiApresentadoDiscutido = '';
  // 40 18.7.1
  apresentarQualificacaoCarpinteirosParaUsoSerraOutrosEquipamentosAcaoFormControl = new FormControl('');
  apresentarQualificacaoCarpinteirosParaUsoSerraOutrosEquipamentos = '';
  // 41 18.11.1
  apresentarCopiaQualificacaoSoldadoresMacariqueiroAcaoFormControl = new FormControl('');
  apresentarCopiaQualificacaoSoldadoresMacariqueiro = '';
  // 42 18.15.1
  apresentarProjetoMontagemAndaimesART_ProfissionalLegalmenteHabilitadoAcaoFormControl = new FormControl('');
  apresentarProjetoMontagemAndaimesART_ProfissionalLegalmenteHabilitado = '';
  // 43 18.6
  apresentarLaudoCabosAcoNBR6327ARTAcaoFormControl = new FormControl('');
  apresentarLaudoCabosAcoNBR6327ART = '';
  // 44 18.22.9
  apresentarCopiaLaudoTecnicoART_ElaboradoProfissionalLegalmenteHabilitadoEquipamentosAcaoFormControl = new FormControl('');
  apresentarCopiaLaudoTecnicoART_ElaboradoProfissionalLegalmenteHabilitadoEquipamentos = '';
  // 45 18.26.5
  apresentarEquipesOperariosOrganizadasEspecialmenteTreinadasCorretoManejoMaterialDisponiveisPrimeiroCombateFogoAcaoFormControl = new FormControl('');
  apresentarEquipesOperariosOrganizadasEspecialmenteTreinadasCorretoManejoMaterialDisponiveisPrimeiroCombateFogo = '';
  // 46 18.28.2
  apresentarTreinamentoAdmissionalCargaHorariaMinima6HorasMinistradoHorarioTrabalhoAntesIniciarAtividadesAcaoFormControl = new FormControl('');
  apresentarTreinamentoAdmissionalCargaHorariaMinima6HorasMinistradoHorarioTrabalhoAntesIniciarAtividades = '';
  // 47 18.32
  copiaComprovanteEncaminhamentoFundacentroResumoEstatisticosAnualUltimoDiaFevereiroAnoSubsequenteFormControl = new FormControl('');
  copiaComprovanteEncaminhamentoFundacentroResumoEstatisticosAnualUltimoDiaFevereiroAnoSubsequente = '';
  // 48 18.37.4
  apresentacaoComprovantesTreinamentoTrabalhadoresHabilitadosQualificadosAcaoFormControl = new FormControl('');
  apresentacaoComprovantesTreinamentoTrabalhadoresHabilitadosQualificados = '';
  // 49 geral
  apresentarQuadroEstatisticoAcidenteIncidente2diaMesSubsequenteAcaoFormControl = new FormControl('');
  apresentarQuadroEstatisticoAcidenteIncidente2diaMesSubsequente = '';
  // 50 geral
  apresentarTodasAnalisesRiscoTarefasExecutadasAprovacaoAcaoFormControl = new FormControl('');
  apresentarTodasAnalisesRiscoTarefasExecutadasAprovacao = '';
  // 51 geral
  emCasoAcidenteComunicacaoMesmoDeveImediataAcaoFormControl = new FormControl('');
  emCasoAcidenteComunicacaoMesmoDeveImediata = '';
  // 52 geral
  apresentarCopiaAnaliseAcidenteAte24horasAposOcorridoQuandoNaoGerarInternacaoAcidentadoAcaoFormControl = new FormControl('');
  apresentarCopiaAnaliseAcidenteAte24horasAposOcorridoQuandoNaoGerarInternacaoAcidentado = '';

}
