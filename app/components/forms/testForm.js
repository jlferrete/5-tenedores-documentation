import React from "react";

import t from "tcomb-form-native";

const Form = t.form.From;

export const LoginStruct = t.struct({
  user: t.String,
  password: t.String
});

export const LoginOptions = {
  fields: {
    user: {
      label: "Nombre de Usuario (*)",
      placeholder: "Nombre de usuario"
    },
    password: {
      label: "Contraseña (*)",
      placeholder: "Contraseña",
      password: true,
      secureTextEntry: true
    }
  }
};
