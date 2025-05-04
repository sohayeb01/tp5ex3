// Tableau contenant les questions et les réponses correctes
const QUESTIONS = [
    ["Quelle est la capitale de la France ?", "Paris"],
    ["Combien font 2 + 2 ?", "4"],
    ["Quel est le plus grand océan du monde ?", "Pacifique"],
    ["Quelle est la planète la plus proche du soleil ?", "Mercure"],
    ["Qui a peint La Joconde ?", "Léonard de Vinci"]
];

let questionActuelle = 0;
let score = 0;

// Fonction pour lancer le quiz
function lancerQuiz() {
    // Réinitialiser le quiz
    questionActuelle = 0;
    score = 0;
    
    // Masquer la section d'introduction et afficher la section des questions
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('resultat').innerHTML = '';
    
    // Afficher la première question
    afficherQuestion();
    
    // Configurer le bouton de validation
    document.getElementById('submit-btn').onclick = validerReponse;
}

// Fonction pour afficher la question courante
function afficherQuestion() {
    if (questionActuelle < QUESTIONS.length) {
        document.getElementById('question-text').textContent = QUESTIONS[questionActuelle][0];
        document.getElementById('reponse-input').value = '';
    } else {
        // Toutes les questions sont terminées, afficher le résultat final
        finQuiz();
    }
}

// Fonction pour valider la réponse de l'utilisateur
function validerReponse() {
    const reponseUtilisateur = document.getElementById('reponse-input').value;
    const reponseCorrecte = QUESTIONS[questionActuelle][1];
    
    if (reponseUtilisateur && reponseUtilisateur.toLowerCase() === reponseCorrecte.toLowerCase()) {
        document.getElementById('feedback').innerHTML = '<p style="color: green;">Réponse juste</p>';
        score++;
    } else {
        document.getElementById('feedback').innerHTML = '<p style="color: red;">Réponse fausse</p>';
    }
    
    // Passer à la question suivante
    questionActuelle++;
    
    // Attendre un peu avant d'afficher la question suivante
    setTimeout(afficherQuestion, 1000);
}

// Fonction pour terminer le quiz et afficher le résultat final
function finQuiz() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('resultat').innerHTML = 
        `Vous avez répondu correctement à ${score} questions sur ${QUESTIONS.length}`;
} 