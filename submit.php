<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "personal_website";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 获取表单数据
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// 准备SQL语句
$sql = "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)";

// 使用预处理语句防止SQL注入
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $name, $email, $subject, $message);

// 执行SQL
if ($stmt->execute()) {
    echo "<script>alert('消息已成功保存！'); window.location.href='contact.html';</script>";
} else {
    echo "<script>alert('错误：" . $stmt->error . "'); window.location.href='contact.html';</script>";
}

$stmt->close();
$conn->close();
?> 