import React from "react";

import t from "tcomb-form-native";
const Form = t.form.From;
import Input from './templates/input';

export const LoginStruct = t.struct({
  user: t.String,
  password: t.String
});

export const LoginOptions = {
  fields: {
    user: {
      template: Input,
      config: {
        placeholder: "Introduce tu usuario",
        password: false,
        secureTextEntry: false,
        iconType: "font-awesome",
        iconName: "user"
      }
    },
    password: {
      template: Input,
      config: {
        placeholder: "Introduce tu contraseña",
        password: true,
        secureTextEntry: true,
        iconType: "font-awesome",
        iconName: "lock"
      }
    }
  }
};
