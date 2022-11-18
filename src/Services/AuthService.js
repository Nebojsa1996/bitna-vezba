import { httpService } from "./HttpService";

class AuthService{
    constructor(){
        this.axiosInstance = httpService.axiosInstance
    }

    setAxiosAuthorizationHeader(tokenParam = null){
        let token = tokenParam ? tokenParam : localStorage.getItem('token')
        if(token){
            this.axiosInstance.default.headers.common[
            "Authorization"
        ] = `Bearer ${token}`;
        }
    }
    register(){

    }
    async login(data){
        try {
         let response = httpService.axiosInstance.post('/login', data);
        if(response.date){
            localStorage.setItem('token', response.data.authorization.token);
            this.setAxiosAuthorizationHeader(response.data.authorization.token)
        }   
        } catch(error){
            
        }
        
        
    }
    logout(){

    }

    async refresh(){
        try {
         const date = await this.axiosInstance.post('./refresh');
        if(response.data) {
            setAxiosAuthorizationHeader(response.data.authorization.token)
        }   
        } catch(error){}
    }
}


export const authService = new AuthService();