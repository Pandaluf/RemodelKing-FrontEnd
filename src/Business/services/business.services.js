import http from "../../core/services/http";

export class BusinessServices{
    getAll(){
        return http.get("/businesses");
    }
    getById(id){
        return http.get(`/businesses/id/${id}`)
    }
    create(data){
        return http.post("/businesses/", data)
    }
    delete(id){
        return http.delete(`/businesses/${id}`)
    }
    update(id, data){
        return http.put(`/businesses/${id}`, data)
    }
    getProjects(){
        return http.get(`/businessprojects`)
    }
    getProjectById(id){
        return http.get(`/businessprojects/${id}`)
    }
    createProject(data){
        return http.post("/businessprojects", data)
    }
}