import { HttpClient, HttpParams } from '@angular/common/http';
import { take, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';


export class ServicoPadraoService<T> {

    constructor(protected http: HttpClient,
        protected url,
        protected messageService?: MessageService,
        protected serviceCore?: boolean) { }

    httpPost(registro: T, action?: string): Observable<T> {
        let urlservice = this.url;
        if (!!action) {
            urlservice += '/' + action;
        }
        return this.http.post<T>(urlservice, registro).pipe(take(1));
    }

    httpPut(registro: T): Observable<T> {
        return this.http.put<T>(this.url, registro).pipe(take(1));
    }

    httpDelete(id: number): Observable<T> {
        const params = new HttpParams().set('id', id.toString());
        return this.http.delete<T>(this.url, { params }).pipe(take(1));
    }

    httpGetId(id: any): Observable<T> {
        return this.http.get<T>(this.url + '/' + id).pipe(take(1));
    }

    httpGetChave(chave: any): Observable<T> {
        const params = new HttpParams().set('chave', chave);
        return this.http.get<T>(this.url, { params }).pipe(take(1));
    }
    httpGet(): Observable<T[]> {
         return this.http.get<T[]>(this.url).pipe(take(1));
    }
    protected tratarMensagemRetornoSucesso(mensagem) {
        if (!!mensagem) {
            this.emitirMensagem('success', mensagem);
        }
    }

    public emitirMensagem(tipo: string, mensagem: string) {
        this.messageService.add(
            {
                severity: tipo, detail: mensagem,
                life: 5000
            }
        );
    }
}
