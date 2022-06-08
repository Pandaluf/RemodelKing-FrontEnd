import http from '/src/core/services/http'
export class BusinessLoginService {
    getAll(){
        return http.get('/api/v1/businesses');
    }
    create(item){
        return http.post('/api/v1/businesses', item);
    }
    isSignedIn(email){
        return http.get(`/api/v1/businesses/${email}`);
    }
}