import http from '/src/core/services/http'

const USER_KEY = "user";
export class BusinessLoginService {
    id = "";
    getAll(){
        return http.get('/businesses');
    }
    getAccount(email){
        return http.get(`/businesses/account/${email}`)
    }

    isSignedIn(email){
        return http.get(`/businesses/${email}`);
    }
    async signIn(request){
        return await http.post(`/users/sign-in`, request).then(res => {
            console.log(`${res.data.token}`);
            if (res.data.token) {
                console.log(`user: ${JSON.stringify(res.data)}`);
                localStorage.setItem(USER_KEY, JSON.stringify(res.data));
            }
            return res.data;
        })
    }
    async signUp(item){
        return await http.post('/users/sign-up', item).then(res=>{
            console.log("JAJAJAJAJAJA", res.data.id)
            return res.data.id;
        })
    }
    async signOut(){
        await localStorage.removeItem(USER_KEY);
    }
    async isSigned(){
        return await JSON.parse(localStorage.getItem(USER_KEY));

    }
}