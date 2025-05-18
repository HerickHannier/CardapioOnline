<?php
// Conexão com o banco de dados
$host = "localhost";
$dbname = "adm";
$username = "root"; // ou o seu usuário
$password = ""; // ou a sua senha

$conn = new mysqli($host, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verificar se recebeu um ID via POST
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id'])) {
    $id = intval($_POST['id']);

    $stmt = $conn->prepare("DELETE FROM cardapio WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "Prato excluído com sucesso.";
    } else {
        echo "Erro ao excluir o prato.";
    }

    $stmt->close();
} else {
    echo "ID inválido.";
}

$conn->close();
?>
