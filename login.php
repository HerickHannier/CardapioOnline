<?php
// Conexão com o banco de dados
$host = "localhost";
$usuario = "root"; // Usuário do MySQL
$senha = "";       // Senha do MySQL
$banco = "adm";

$conn = new mysqli($host, $usuario, $senha, $banco);

// Verifica se conectou corretamente
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

// Recebe os dados do formulário
$email = $_POST['email'];
$senha = $_POST['senha'];

// Consulta o banco para verificar se o usuário existe
$sql = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
$resultado = $conn->query($sql);

if ($resultado->num_rows == 1) {
    // Exemplo de redirecionamento:
    header("Location: indexadm.html");
} else {
    echo "<script>
        alert('Email ou senha incorretos!');
        window.location.href = 'adm.html';
    </script>";
}

$conn->close();
?>
