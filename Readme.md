# Validación de Formulario con JavaScript

Este es un script JavaScript simple que permite a un usuario completar un formulario de contacto y valida los datos ingresados antes de enviar el formulario.

## Cómo funciona

1. El script utiliza un bucle `while` para asegurarse de que el usuario ingrese datos válidos en cada campo del formulario antes de continuar.

2. El usuario es solicitado a ingresar su nombre, apellido, correo electrónico y un mensaje. 

3. Se verifican varias condiciones:
   - Se valida que ni el nombre ni el apellido estén vacíos.
   - Se valida que el correo electrónico cumpla con el formato de correo electrónico típico.
   - Se valida que el mensaje no esté vacío.

4. Si alguno de los campos no cumple con los criterios de validación, se muestra una alerta correspondiente y se solicita al usuario que vuelva a ingresar los datos.

5. Cuando todos los campos son válidos, se muestra una alerta de éxito y el formulario se considera válido.

## Cómo usar

1. Descarga el archivo `formulario.js` y vincúlalo a tu archivo HTML donde desees usarlo.

2. Asegúrate de que el HTML tenga un botón o algún otro disparador para llamar a la función `validarFormulario()` cuando el usuario desee validar el formulario.

3. Asegúrate de que el código HTML contenga un formulario con los campos necesarios (nombre, apellido, correo electrónico, mensaje).

4. Cuando el usuario haga clic en el botón o activador para validar el formulario, la función `validarFormulario()` se ejecutará y guiará al usuario a través del proceso de ingreso de datos y validación.

## Contribuciones y mejoras

Siéntete libre de contribuir y mejorar este código. Puedes agregar características adicionales o mejorar la interfaz de usuario según tus necesidades.

¡Disfruta de tu formulario de contacto con validación en JavaScript!