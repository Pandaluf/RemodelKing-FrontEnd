import http from "../../core/services/http";

export class AuthenticationServices {
    loginClient(data){
        return http.get(`/client?email=${data.email}`)
    }

}