import http from '/src/core/services/http'
export class PortfolioService {
    getAllActivities(){
        return http.get('/activities');
    }
    create(item){
        return http.post('/activities', item);
    }
    update(id, item){
        return http.put(`/activities/${id}`, item);
    }
    delete(id){
        return http.delete(`/activities/${id}`);
    }
}