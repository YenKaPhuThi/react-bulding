import {configStore as configDev} from './config.store.dev';
import {configStore as configProd} from './config.store.prod'

const configStore = process.env.NODE_ENV === 'production' ? configProd : configDev;

export default configStore;