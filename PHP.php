<h1>My First PHP Site</h1>
<p>This HTML will get delivered as is</p>
<?php echo "<p>But this code is interpreted by PHP and turned into HTML</p>";?>
<?php echo "<ul><li>You can use any HTML tags,</li><li>like this list.</li></ul>";?>
<footer>
  <p>And this code is back in plain HTML</p>
</footer>
/* Two ways to execute in php */
// This is the second way to make a comment
# and the third

<?php
echo "I love PHP!";?>

<?php
require 'vendor/autoload.php';
# This logic handles connecting to the database, where we store our todo status
$pdo = new \PDO("sqlite:" . "db/sqlite.db");

# This PHP logic handles user actions
# New TODO
if (isset($_POST['submit'])) 
{
  $description = $_POST['description'];
  $sth = $pdo->prepare("INSERT INTO todos (description) VALUES (:description)");
  $sth->bindValue(':description', $description, PDO::PARAM_STR);
  $sth->execute();
}
# Delete TODO
elseif (isset($_POST['delete']))
{ 
  $id = $_POST['id'];
  $sth = $pdo->prepare("delete from todos where id = :id");
  $sth->bindValue(':id', $id, PDO::PARAM_INT);
  $sth->execute();
}
# Update completion status
elseif (isset($_POST['complete']))
{
    $id = $_POST['id'];
    $sth = $pdo->prepare("UPDATE todos SET complete = 1 where id = :id");
    $sth->bindValue(':id', $id, PDO::PARAM_INT);
    $sth->execute();
}
# Here is the HTML:
?>
<!DOCTYPE HTML>
<html lang="en">
<head>
  <title>Todo List</title>
</head>

<body class="container">
  <h1>Todo List</h1>
  <form method="post" action="">
    <input type="text" name="description" value="">
    <input type="submit" name="submit" value="Add">
  </form>
  <h2>Current Todos</h2>
  <table class="table table-striped">
    <thead><th>Task</th><th></th><th></th></thead>
    <tbody>

<?php
  # Entering PHP mode, 
$sth = $pdo->prepare("SELECT * FROM todos ORDER BY id DESC");
$sth->execute();

foreach ($sth as $row) {
  # Exiting PHP Mode
    ?> 
<tr>
  <td>
      <!-- This is PHP shorthand for inserting dynamic text into HTML -->
      <?=htmlspecialchars($row['description'])?></td>
  <td>
    <?php # Here we are mixing HTML and PHP to get the desired document
if (!$row['complete']) {
        ?>
    <form method="POST">
      <button type="submit" name="complete">Complete</button>
      <input type="hidden" name="id" value="<?=$row['id']?>">
      <input type="hidden" name="complete" value="true">
    </form>
    <?php
} else {
        ?>
    Task Complete!
    <?php
}
    ?>
  </td>
  <td>
    <form method="POST">
      <button type="submit" name="delete">Delete</button>
      <input type="hidden" name="id" value="<?=$row['id']?>">
      <input type="hidden" name="delete" value="true">
    </form>
  </td>
</tr>
<?php
}
?>
    </tbody>
  </table>
</body>
</html>

<!-- //PHP strings and variables
//Strings
  echo "Hello, World!";
  //echo command then string of the thing that you want to print on screen and do not forget the semi colon at the end
//Escape Sequence
  
// -->
<?php 
$snake_case_variable_name = "variables starts with a sigil dollar sign, and followed by name using
                            /n the standard snake case name";?>
<?php
$name = "Kido";
$language = "PHP Language";

echo "My nickname is " . $name;
echo "\nA string " . $language;  
?>         

<!-- Parsing variables -->
<?php                   
// Fill in the blanks in the code below:
  $noun = "noun";
  $adjective = "adjective";
  $verb = "verb";

  echo "The world's most beloved $noun was very $adjective and loved to $verb every single day.";



//there is also this trick to add a few letters to your variables
 echo "\nI have always been obsessed with ${noun}s. I'm ${adjective}ish. I'm always ${verb}ing.";
 
 //Concatenating assignment operator
 echo "I'm going on a picnic!";

 $sentence = nl2br("\nI'm going on a picnic, and I'm taking apples");

 echo $sentence;

 $sentence .= ", banana";

 echo $sentence;

 $sentence .= ", cherry, and dragon fruit";

 echo $sentence;
   
 
 ?>

 <!-- PHP Numbers
  Integer and Floating type, integers being the positive and negative whole numbers
  floating being the decimal and fraction/ratio numbers.  -->
  

 
