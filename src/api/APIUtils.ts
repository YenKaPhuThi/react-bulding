import Axios, { AxiosRequestConfig} from 'axios';
const axiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_URL,
    timeout: 10000,
    params: {},
    headers: {'X-Custom-Header': 'foobar'}
});

class API {
    private coreAPI = axiosInstance;
    private route: string = '';
    private config: AxiosRequestConfig = {

    };
    constructor(route: string, config?: object){
        this.route = route;
        if(config){
            this.config = config;
        }
        this.setupAxiosInterceptors();
    }

    protected get(){
        return this.coreAPI.get(this.route);
    }

    protected delete(){
        return this.coreAPI.delete(this.route, this.config);
    }

    protected patch(data?: any){
        return this.coreAPI.patch(this.route, data, this.config);
    }

    protected post(data?: any, endpoint: string = ''){
        return this.coreAPI.post(this.route + endpoint, data, this.config);
    }

    protected update(data?: any){
        return this.coreAPI.put(this.route, data, this.config);
    }

    protected all(arrayPromise: Iterable<[] |PromiseLike<[]>>): Promise<[][]> {
        return Promise.all(arrayPromise);
    }


    private setupAxiosInterceptors() {
        // const onRequestSuccess = (config: any) => {
        //     const token = Storage.local.get('jhi-authenticationToken') || Storage.session.get('jhi-authenticationToken');
        //     if (token) {
        //       config.headers.Authorization = `Bearer ${token}`;
        //     }
        //     return config;
        //   };
          
        // Add a request interceptor
        this.coreAPI.interceptors.request.use( config => {
            // Do something before request is sent
            return config;
        }, (error: Error) => {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        this.coreAPI.interceptors.response.use(
            response => response
            , error => {
            // Do something with response error
            Promise.reject(error); 
        });
    }
}

export default API
