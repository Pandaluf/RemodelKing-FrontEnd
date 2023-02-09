import http from "../../../core/services/http";


export class RequestService{
    getAll(){
        return http.get("/request");
    }
    create(data){
        return http.post(`/request/`, data)
    }
}