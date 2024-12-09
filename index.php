<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = htmlspecialchars($_POST["name"]);
    $correo = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["message"]);

    $to = "yorbisleyva14@gmail.com"; 
    $subject = "Nuevo mensaje del formulario de contacto";
    $body = "Nombre: $nombre\nCorreo: $correo\nMensaje:\n$mensaje";
    $headers = "From: $correo\r\nReply-To: $correo";

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Error al enviar el mensaje. Intenta nuevamente.";
    }
} else {
    echo "Método no permitido.";
}
?>
