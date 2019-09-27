import Loadable from 'react-loadable';
import { Loading } from '../containers';
export class DynamicImport{

    public static initDynamicImport(LoaderComponent : any){
        return Loadable({
            loader: LoaderComponent,
            loading: Loading,
            delay: 0,
          });
    }
}
