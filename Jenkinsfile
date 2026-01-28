pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clona o repositório
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                // Instala as dependências do projeto
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                // Executa os testes do Cypress
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            // Arquivos de relatório podem ser publicados aqui, se houver
            archiveArtifacts artifacts: '**/cypress/videos/*.mp4', allowEmptyArchive: true
            archiveArtifacts artifacts: '**/cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
    }
}