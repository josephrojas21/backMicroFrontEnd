import { ConfigService } from '../config/config.service';
import axios from 'axios';

const config = new ConfigService();

export const sap = axios.create({
    baseURL: config.get('URL_BASE_SAP'),
    timeout: config.get('TIMEOUT_SAP'),
    headers: 
        {
            'Authorization':  config.get('AUTH_SAP')
        }
});

export const sapQA = axios.create({
    baseURL: 'http://localhost:8081',
    headers: 
        {
            'Authorization':  config.get('AUTH_SAP')
        }
});