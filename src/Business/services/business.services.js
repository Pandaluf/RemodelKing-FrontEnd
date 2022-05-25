import http from "../../core/services/http";

export class BusinessServices{
    getAll(){
        return http.get("/business");
    }
    getById(id){
        return http.get(`/business/${id}`)
    }
    create(data){
        return http.post("/business/", data)
    }
    delete(id){
        return http.delete(`/business/${id}`)
    }
    update(id, data){
        return http.put(`/business/${id}`, data)
    }
    getProjects(){
        return http.get(`/projects`)
    }
    getProjectById(id){
        return http.get(`/projects/${id}`)
    }
}