<?php
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'adm';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$preco = $_POST['preco'];
$descricao = $_POST['descricao'];
$categoria = $_POST['categoria'];

// Upload da imagem
$imagem_nome = $_FILES['imagem']['name'];
$imagem_tmp = $_FILES['imagem']['tmp_name'];
$caminho = "imagens/" . basename($imagem_nome);

if (move_uploaded_file($imagem_tmp, $caminho)) {
    $sql = "INSERT INTO cardapio (nome, preco, descricao, imagem, categoria) 
            VALUES ('$nome', '$preco', '$descricao', '$caminho', '$categoria')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>window.location.href='mudarCardapio.html';</script>";
    } else {
        echo "Erro: " . $conn->error;
    }
} else {
    echo "Erro ao fazer upload da imagem.";
}

$conn->close();
?>
