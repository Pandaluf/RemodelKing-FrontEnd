import http from '/src/core/services/http'
export class ClientService {
    getAll(){
        return http.get('/portfolios');
    }
    getById(id){
        return http.get(`/portfolios/${id}`);
    }
}