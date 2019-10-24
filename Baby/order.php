<?php
/* Осуществляем проверку вводимых данных и их защиту от враждебных 
скриптов */
$your_name = htmlspecialchars($_POST["your_name"]);
$phone = htmlspecialchars($_POST["phone"]);
/* Устанавливаем e-mail адресата */
$myemail = "elnaumova@ukr.net";
/* Проверяем заполнены ли обязательные поля ввода, используя check_input 
функцию */
$your_name = check_input($_POST["your_name"], "Введите ваше имя!");
$phone = check_input($_POST["phone"], "Укажите ваш номер телефона!");
/* Создаем новую переменную, присвоив ей значение */
$message_to_myemail = "Здравствуйте! 
C вами скоро свяжется наш сотрудник! 
Имя отправителя: $your_name 
Телефон отправителя: $phone
Конец";
/* Отправляем сообщение, используя mail() функцию */f
$from  = "From: $yourname <$email> \r\n Reply-To: $email \r\n"; 
mail($myemail, $tema, $message_to_myemail, $from);
?>
<p>Ваше сообщение было успешно отправлено!</p>
<p>На <a href="index.html">Главную >>></a></p>
<?php
/* Если при заполнении формы были допущены ошибки сработает 
следующий код: */
function check_input($data, $problem = "")
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>
<p>Пожалуйста исправьте следующую ошибку:</p>
<?php echo $myError; ?>
</body>
</html>
<?php
exit();
}
?>