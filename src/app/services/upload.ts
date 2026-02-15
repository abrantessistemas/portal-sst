import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Upload {
  private readonly API_URL = 'http://localhost:4000/arquivos';

  constructor(private http: HttpClient) { }

  uploadArquivos(arquivos: File[]): Observable<any> {
    const formData = new FormData();

    arquivos.forEach(arquivo => {
      formData.append('files', arquivo);
    });

    return this.http.post(this.API_URL, formData);
  }

  uploadArquivoUnico(arquivo: File, descricao: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', arquivo); // O nome 'file' deve ser o mesmo no multer (.single('file'))
    formData.append('descricao', descricao); // Enviando a descrição junto

    return this.http.post(this.API_URL, formData);
  }

  findAllArquivo(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }

  downloadArquivo(id: string): Observable<Blob> {
    // Importante: informar que a resposta é um arquivo (blob)
    return this.http.get(`${this.API_URL}/download/${id}`, {
      responseType: 'blob'
    });
  }

  // upload.service.ts
  excluirArquivo(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
}
