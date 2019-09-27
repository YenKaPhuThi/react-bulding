import * as _ from 'lodash';
import { MagicKeyValue } from '../constants/constants';

const required = (value: string) => {
  return !!value.toString().trim().length;
};

const email = (value: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !!re.test(String(value).toLowerCase());
};

// export const number = (value) => {

// }

// export const dateOfbirth = (value) => {

// }

export const validation : MagicKeyValue = {
  required: {
    errors: [],
    test : required,
    isValid: false,
  },
  email: {
    errors: [],
    test : email,
    isValid: false,
  }
}

export class ValidatorHelper{
  private static validation = validation;

  public static validate(label: string, value: any){
      return this.validation[label].test(value);
  }

  public static validateAll(els: any, callback: Function){
    let name, type, fieldValid = true, formValid = true;
    _.forEach(els, (el ) => {
        name = el.getAttribute('name') || '';
        type = el.getAttribute('data-type-validate') || '';
        if(name.length && type.length){
          fieldValid = callback(name, type);
          if(formValid && !fieldValid){
            formValid = false;
          }
        }
    });

    return formValid;
  }
}