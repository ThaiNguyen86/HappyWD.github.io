pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "ngtthai/lab02"
    }
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-credential',
                    url: 'https://github.com/ThaiNguyen86/HappyWD.github.io.git'
            }
        }

        stage('Build Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Push Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-credential') {
                        docker.image("${DOCKER_IMAGE}:${env.BUILD_NUMBER}").push()
                        docker.image("${DOCKER_IMAGE}:${env.BUILD_NUMBER}").push('latest')
                    }
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                  docker pull ${DOCKER_IMAGE}:${BUILD_NUMBER}
                  docker stop lab02_fe_app || true
                  docker rm lab02_fe_app || true
                  docker run -d --name lab02_fe_app -p 3001:3000 ${DOCKER_IMAGE}:${BUILD_NUMBER}
                '''
            }
        }
    }
}

