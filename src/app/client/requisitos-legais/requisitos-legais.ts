import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Upload } from '../../services/upload';
import { Subscription } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export interface Arquivo {
  _id?: string;
  id: string;
  nome: string;
  tamanho: string;
  descricao: string;
  dataUpload: string;
  src: string;
}

@Component({
  selector: 'app-requisitos-legais',
  imports: [MatButtonModule, MatIconModule, MatCardModule, DatePipe, MatDividerModule, MatProgressBarModule],
  templateUrl: './requisitos-legais.html',
  styleUrl: './requisitos-legais.scss',
})
export class RequisitosLegais implements OnInit {
  private subscription: Subscription = new Subscription();
  profile: 'admin' | 'client' = 'client';
  itens: Arquivo[] = [];
  selectedFile: File | null = null;
  loadData: boolean = true;

  constructor(private uploadService: Upload) {

  }


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const descricao = file.name.substring(0, (file.name.length - 4)); // Pegue isso de um campo de texto

    if (file) {
      this.uploadService.uploadArquivoUnico(file, descricao).subscribe(res => {
        console.log('Upload concluído', res);
        this.download();
      });
    }
  }


  ngOnInit(): void {
    this.download();
  }

  baixar(item: any) {
    this.uploadService.downloadArquivo(item._id).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = item.nomeOriginal; // Nome que aparecerá para o usuário
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  excluir(id: string) {
    if (confirm('Tem certeza que deseja excluir este arquivo?')) {
      this.uploadService.excluirArquivo(id).subscribe({
        next: () => {
          // Filtra a lista local para remover o item sem precisar dar refresh na página
          this.itens = this.itens.filter(item => item.id !== id);
          console.log('Arquivo removido com sucesso');
          this.download();
        },
        error: (err) => {
          console.error('Erro ao excluir:', err);
          alert('Não foi possível excluir o arquivo.');
        }
      });
    }
  }

  download() {
    this.subscription.add(
      this.uploadService.findAllArquivo().subscribe({
        next: (result) => {
          console.log('Dados recebidos:', result); // Veja no console do navegador
          this.itens = result;

          if (result.length === 0) {
            console.warn('O backend retornou uma lista vazia.');
          }
          this.loadData = false;
        },
        error: (err) => {
          console.error('Erro na requisição:', err);
          this.loadData = false;
        }
      })
    );
  }
}
