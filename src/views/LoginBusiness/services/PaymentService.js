import http from '/src/core/services/http'
export class PaymentService {
    getAll(){
        return http.get('/payments');
    }
    create(item){
        return http.post('/payments', item);
    }
}