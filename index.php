<?php
// Verificar que el formulario se envió usando el método POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener y sanitizar los datos enviados
    $nombre = htmlspecialchars(trim($_POST["name"]));
    $correo = htmlspecialchars(trim($_POST["email"]));
    $mensaje = htmlspecialchars(trim($_POST["message"]));

    // Validar que los campos no estén vacíos
    if (empty($nombre) || empty($correo) || empty($mensaje)) {
        echo "Por favor, completa todos los campos.";
        exit;
    }

    // Validar el formato del correo
    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor, ingresa un correo válido.";
        exit;
    }

    // Configuración del correo
    $to = "yorbisleyva14@gmail.com"; // Cambia por tu correo de destino
    $subject = "Nuevo mensaje del formulario de contacto";
    $body = "Nombre: $nombre\nCorreo: $correo\nMensaje:\n$mensaje";

    // Configuración de encabezados para evitar problemas de spam
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n";
    $headers .= "From: yorbisleyva14@tudominio.com" . "\r\n"; // Cambia a una dirección válida de tu dominio
    $headers .= "Reply-To: $correo" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Intentar enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Error al enviar el mensaje. Intenta nuevamente.";
    }
} else {
    echo "Método no permitido.";
}
?>
