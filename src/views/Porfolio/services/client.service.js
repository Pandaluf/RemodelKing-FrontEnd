import http from '/src/core/services/http'
export class ClientService {
    getAll(){
        return http.get('/clientInformation');
    }
    getById(id){
        return http.get(`/clientInformation/${id}`);
    }
}