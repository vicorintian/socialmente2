<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2014.2.0.284
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Envío de Formulario Inicio',
	'heading' => 'Envío de nuevo formulario',
	'success_redirect' => '',
	'resources' => array(
		'checkbox_checked' => 'Marcada',
		'checkbox_unchecked' => 'No marcada',
		'submitted_from' => 'Formulario enviado desde el sitio web: %s',
		'submitted_by' => 'Dirección IP del visitante: %s',
		'too_many_submissions' => 'Se han realizado recientemente demasiados envíos a través de esta IP',
		'failed_to_send_email' => 'Error al enviar el correo electrónico',
		'invalid_reCAPTCHA_private_key' => 'Clave privada de reCAPTCHA no válida.',
		'invalid_field_type' => 'Tipo de campo desconocido: %s.',
		'unknown_method' => 'Método de solicitud de servidor desconocido'
	),
	'email' => array(
		'from' => 'steve@visualarms.com',
		'to' => 'steve@visualarms.com'
	),
	'fields' => array(
		'custom_U255' => array(
			'type' => 'string',
			'label' => 'Usuario',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'Usuario\' es obligatorio.'
			)
		),
		'Email' => array(
			'type' => 'email',
			'label' => 'Password',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'Password\' es obligatorio.',
				'format' => 'El campo \'Password\' contiene un correo electrónico no válido.'
			)
		)
	)
);

process_form($form);
?>
