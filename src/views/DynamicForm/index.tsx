import React from 'react';
import ajv from 'ajv';
import {DynamicFormModel} from './constants';

const DynamicForm: React.FC<DynamicFormModel> = () =>{

    const jsonSchema = {
        title: "Todo",
        type: "object",
        required: ["title"],
        properties: {
          title: {type: "string", title: "Title", default: "A new task"},
          done: {type: "boolean", title: "Done?", default: false}
        }
    };

    return (
        <div></div>
    )
}

export default DynamicForm;