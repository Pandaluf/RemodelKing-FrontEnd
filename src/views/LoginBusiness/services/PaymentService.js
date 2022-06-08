import http from '/src/core/services/http'
export class PaymentService {
    getAll(){
        return http.get('/api/v1/payments');
    }
    create(item){
        return http.post('/api/v1/payments', item);
    }
}