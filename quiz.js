const QUESTIONS = [
    ["Quelle est la capitale de la France ?", "Paris"],
    ["Combien font 2 + 2 ?", "4"],
    ["Quel est le plus grand océan du monde ?", "Pacifique"],
    ["Quelle est la planète la plus proche du soleil ?", "Mercure"],
    ["Qui a peint La Joconde ?", "Léonard de Vinci"]
];

let questionActuelle = 0;
let score = 0;

function lancerQuiz() {
    questionActuelle = 0;
    score = 0;
    
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('resultat').innerHTML = '';
    
    afficherQuestion();
    
    document.getElementById('submit-btn').onclick = validerReponse;
}

function afficherQuestion() {
    if (questionActuelle < QUESTIONS.length) {
        document.getElementById('question-text').textContent = QUESTIONS[questionActuelle][0];
        document.getElementById('reponse-input').value = '';
    } else {
       
        finQuiz();
    }
}

function validerReponse() {
    const reponseUtilisateur = document.getElementById('reponse-input').value;
    const reponseCorrecte = QUESTIONS[questionActuelle][1];
    
    if (reponseUtilisateur && reponseUtilisateur.toLowerCase() === reponseCorrecte.toLowerCase()) {
        document.getElementById('feedback').innerHTML = '<p style="color: green;">Réponse juste</p>';
        score++;
    } else {
        document.getElementById('feedback').innerHTML = '<p style="color: red;">Réponse fausse</p>';
    }
    
    questionActuelle++;
    
    setTimeout(afficherQuestion, 1000);
}

function finQuiz() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('resultat').innerHTML = 
        `Vous avez répondu correctement à ${score} questions sur ${QUESTIONS.length}`;
} 