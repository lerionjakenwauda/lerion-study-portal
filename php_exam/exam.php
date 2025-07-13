<?php
session_start();

// Load questions from JSON files
$objectiveData = json_decode(file_get_contents(__DIR__.'/questions/objective.json'), true);
$theoryData = json_decode(file_get_contents(__DIR__.'/questions/theory.json'), true);

$phase = $_GET['phase'] ?? 'instructions';

// Shuffle and store in session when starting objective section
if ($phase === 'start_objective') {
    // pick up to 60 questions
    shuffle($objectiveData);
    $_SESSION['objective_questions'] = array_slice($objectiveData, 0, 60);
    $_SESSION['start_time'] = time();
    header('Location: exam.php?phase=objective');
    exit();
}

// Start theory section
if ($phase === 'start_theory') {
    shuffle($theoryData);
    $_SESSION['theory_questions'] = array_slice($theoryData, 0, min(60, count($theoryData)));
    $_SESSION['theory_start'] = time();
    header('Location: exam.php?phase=theory');
    exit();
}

function h($str) { return htmlspecialchars($str, ENT_QUOTES); }
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Simple PHP Exam</title>
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
</head>
<body>
<?php if ($phase === 'instructions'): ?>
<div class="container">
  <h1>Biology Exam</h1>
  <p>This demo pulls questions from a JSON bank. Objective section: 60 random questions in 30 minutes. Theory section follows with 40 minutes.</p>
  <form action="?phase=start_objective" method="post">
    <button type="submit">Start Objective Section</button>
  </form>
</div>
<?php elseif ($phase === 'objective'): ?>
<?php $questions = $_SESSION['objective_questions'] ?? [];
      if (!$questions) { header('Location: exam.php'); exit(); }
?>
<div class="container">
  <h2>Objective Questions</h2>
  <div id="timer" data-minutes="30"></div>
  <form action="results.php" method="post">
  <?php foreach ($questions as $index => $q): ?>
    <div class="question">
      <p><strong><?php echo $index+1; ?>.</strong> <?php echo h($q['question']); ?></p>
      <?php foreach ($q['options'] as $letter => $opt): ?>
        <label><input type="radio" name="q<?php echo $q['id']; ?>" value="<?php echo $letter; ?>"> <?php echo h($letter.'. '.$opt); ?></label><br>
      <?php endforeach; ?>
    </div>
  <?php endforeach; ?>
    <button type="submit">Submit Objective</button>
  </form>
</div>
<?php elseif ($phase === 'theory'): ?>
<?php $questions = $_SESSION['theory_questions'] ?? [];
      if (!$questions) { header('Location: exam.php'); exit(); }
?>
<div class="container">
  <h2>Theory Questions</h2>
  <div id="timer" data-minutes="40"></div>
  <form action="results.php" method="post">
  <?php foreach ($questions as $index => $q): ?>
    <div class="question">
      <p><strong><?php echo $index+1; ?>.</strong> <?php echo h($q['question']); ?> (<?php echo $q['maxMarks']; ?> marks)</p>
      <textarea name="t<?php echo $q['id']; ?>" rows="4" cols="80"></textarea>
    </div>
  <?php endforeach; ?>
    <input type="hidden" name="theory" value="1">
    <button type="submit">Submit Theory Answers</button>
  </form>
</div>
<?php endif; ?>
</body>
</html>
