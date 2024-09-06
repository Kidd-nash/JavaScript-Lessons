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
  
<!-- PHP Functions -->

<?php 

function inflateEgo()
{
  echo "a compliment.\n";
}

inflateEgo();

function printStringReturnNumber()
{
  echo "a string\n";
  return 23;
}

$my_num = printStringReturnNumber();

echo $my_num;

function notFound()
{
  echo "ERROR: Page not found!\n";
  return 404;
}

function greetLearner()
{
  echo "Hello, Learner!\n";
  echo "I hope you're (still) enjoying PHP!\n";
  echo "Love, Codecademy\n";
  return "<3";
}

// Don't change the code below:

$error = notFound(); 
$heart = greetLearner();

echo "I received a $error, but it's ok because I also received $heart.";

//Associative Arrays

$php_array = array(
  "language" => "PHP", 
  "creator" => "Rasmus Lerdorf", 
  "year_created" => 1995, 
  "filename_extensions" => [".php", ".phtml", ".php3", ".php4", ".php5", ".php7", ".phps", ".php-s", ".pht", ".phar"]
);

$php_short = [
  "language" => "PHP", 
  "creator" => "Rasmus Lerdorf", 
  "year_created" => 1995, 
  "filename_extensions" => [".php", ".phtml", ".php3", ".php4", ".php5", ".php7", ".phps", ".php-s", ".pht", ".phar"]
];

//Printing Associative Arrays

$september_hits = ["The Sixth Sense" => 22896967,
"Stigmata" => 18309666,
"Blue Streak" => 19208806,
"Double Jeopardy" => 23162542];

echo implode(", ", $september_hits);

print_r($september_hits);

//Adding and Accessing Elements

$assignment_one = ["Alex"=> 87, "Kenny"=> 91, "Natalia"=> 91, "Lily"=> 67, "Dan"=> 81, "Kat"=> 77, "Sara" => 65];

$assignment_two = ["Alex"=> 91, "Kenny"=> 99, "Natalia"=> 100, "Lily"=> 61, "Dan"=> 88, "Kat"=> 90];

$assignment_three = ["Alex"=> 78, "Kenny"=> 92, "Natalia"=> 94, "Lily"=> 79, "Dan"=> 73, "Sara" => 61];

$student_name = "Alex";

$assignment_two["Sara"] = 65;
$assignment_three["Kat"] = 97;

$dans_grades = [$assignment_one["Dan"], $assignment_two["Dan"], $assignment_three["Dan"]];

echo $assignment_two[$student_name];

//Changing and removing elements

$my_car = [
  "oil" => "black and clumpy",
  "brakes" => "new",
  "tires" => "old with worn treads",
  "filth" => "bird droppings", 
  "wiper fluid" => "full", 
  "headlights" => "bright"
];
print_r($my_car);

$my_car["oil"] = "new and premium";

$my_car["tires"] = "new with deep treads";


unset ($my_car["filth"]);

print_r($my_car);

//Numerical Keys

$hybrid_array = ["cat", "dog", 9, 18.2];

$hybrid_array[8] = "five more";

print_r($hybrid_array);

array_push($hybrid_array, rand());

echo $hybrid_array[9];

//Joining Arrays

$giraffe_foods = ["dip"=>"guacamole", "chips"=>"corn", "entree"=>"grilled chicken"];

$impala_foods = ["dessert"=>"cookies", "vegetable"=>"asparagus", "side"=>"mashed potatoes"];

$rat_foods = ["dip"=>"mashed earth worms", "entree"=>"trash pizza", "dessert"=>"sugar cubes", "drink"=>"lemon water"];

$potluck = $giraffe_foods + $impala_foods;

print_r($potluck);

$rat_impala = $rat_foods + $impala_foods;

print_r($rat_impala);

$everybody =  $giraffe_foods + $impala_foods + $rat_foods;

print_r($everybody);

//Assign by Value/Reference

$doge_meme = ["top_text" => "Such Python", "bottom_text" => "Very language. Wow.", "img" => "very-cute-dog.jpg", "description" => "An adorable doge looks confused."];

$bad_meme = ["top_text" => "i don't know", "bottom_text" => "i can't think of anything", "img" => "very-fat-cat.jpg", "description" => "A very fat cat looks happy."];


function createMeme ($meme) 
{
  $meme["top_text"] = "Much PHP";
  $meme["bottom_text"] = "Very programming. Wow.";
  return $meme;
}  

print_r($doge_meme);

$php_doge = createMeme($doge_meme);

print_r($php_doge);

function fixMeme (&$meme) 
{
  $meme["top_text"] = "I can haz";
  $meme["bottom_text"] = "PHP, plz?";
  return $meme;
} 

print_r($bad_meme);

fixMeme ($bad_meme);

print_r($bad_meme);

//While

$count = 1;
while ($count <= 100)
{
  if ($count % 33 === 0) {
    echo $count . " is divisible by 33\n";
  }
  $count += 1;
}

//do while

$plant_height = 22;
do  {
  echo "The plant is $plant_height tall.\n";
  if ($plant_height >= 30) {
    echo "And can produce fruit.\n";
  }
  $plant_height ++;
} while ($plant_height < 31);

//For 

for ($i = 10; $i >= 0; $i--) {
  if ($i === 2) {
    echo "Ready!\n";
  } elseif ($i === 1) {
    echo "Set!\n";
  } elseif ($i === 0) {
    echo "Go!\n";
  } else {
    echo $i . "\n";
  }
}

?>