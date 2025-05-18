<?php
header('Content-Type: application/json; charset=utf-8');

// Conexão com o banco de dados
$conn = new mysqli("localhost", "root", "", "adm");

if ($conn->connect_error) {
    echo json_encode(["erro" => "Erro na conexão com o banco de dados"]);
    exit;
}

$cardapio = [
    "carne" => [],
    "cerveja" => [],
    "nao_alcoolico" => [],
    "porcoes" => []
];

// Suponha que sua tabela tenha os campos: nome, preco, descricao, imagem, categoria
$sql = "SELECT * FROM cardapio";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    $item = [
        "id" => $row["id"],
        "nome" => $row["nome"],
        "preco" => $row["preco"],
        "descricao" => $row["descricao"],
        "imagem" => $row["imagem"]
    ];

    $categoria = $row["categoria"];

    if (isset($cardapio[$categoria])) {
        $cardapio[$categoria][] = $item;
    }
}

$conn->close();

echo json_encode($cardapio, JSON_UNESCAPED_UNICODE);
