<?php
session_start();

$objectiveData = json_decode(file_get_contents(__DIR__.'/questions/objective.json'), true);
$questionsMap = [];
foreach ($objectiveData as $q) {
    $questionsMap[$q['id']] = $q;
}

if (!empty($_POST['theory'])) {
    // Theory answers submitted
    $theoryAnswers = [];
    foreach ($_POST as $key => $value) {
        if (strpos($key, 't') === 0) {
            $id = substr($key, 1);
            $theoryAnswers[$id] = trim($value);
        }
    }
    $_SESSION['theory_answers'] = $theoryAnswers;
    $message = 'Theory answers submitted successfully.';
} else {
    // Objective answers
    $score = 0;
    $answers = [];
    foreach ($_POST as $key => $value) {
        if (strpos($key, 'q') === 0) {
            $id = substr($key, 1);
            $answers[$id] = $value;
            if (isset($questionsMap[$id]) && $questionsMap[$id]['correctAnswer'] === $value) {
                $score++;
            }
        }
    }
    $_SESSION['objective_score'] = $score;
    $message = "You scored $score out of " . count($_SESSION['objective_questions']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Exam Results</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <h1>Exam Results</h1>
  <p><?php echo htmlspecialchars($message); ?></p>
  <?php if (empty($_POST['theory'])): ?>
    <form action="exam.php?phase=start_theory" method="post">
      <button type="submit">Start Theory Section</button>
    </form>
  <?php else: ?>
    <p>Thank you for completing the exam.</p>
  <?php endif; ?>
</div>
</body>
</html>
