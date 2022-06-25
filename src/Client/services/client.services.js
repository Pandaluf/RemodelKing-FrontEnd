import http from "../../core/services/http";

export class ClientServices{
    getAll(){
        return http.get("clients")
    }
    getById(id){
        return http.get(`/clients/${id}`)
    }
    create(data){
        return http.post("/clients/", data)
    }
    update(id, data){
        return http.put(`clients/${id}`, data)
    }
    delete(id){
        return http.delete(`clients/${id}`)
    }
}