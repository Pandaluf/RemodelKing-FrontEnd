import http from "../../core/services/http";

export class CommentsService{
    getAll(){
        return http.get("/clientComments");
    }
    getById(id){
        return http.get(`/clientComments/${id}`)
    }
    create(data){
        return http.post("/clientComments/", data)
    }
    delete(id){
        return http.delete(`/clientComments/${id}`)
    }
    update(id, data){
        return http.put(`/clientComments/${id}`, data)
    }
}