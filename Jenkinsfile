#!/usr/bin/env groovy
import groovy.transform.Field

node {
  try {
    stage('Checkout') {
      checkout scm
      sh 'env'
      author = sh(returnStdout: true, script: "git log -1 --pretty=format:'%an'").trim()
      if (author == 'Dmitri') {
          currentBuild.result = 'ABORTED'
          error('Jenkins update: aborting')
      }
    }
    stage('Build') {
      // tests etc
      sh 'npm install'
    }
    stage('Generate') {
      sh 'npm run generate'
    }
    stage('Check') {
      sh 'cat test.txt'
      sh 'git config --global user.email "a@a.com" && git config --global user.name "D" && git checkout master && git add test.txt && git commit -m "jenkins update" && git push https://xingxang:%3FprotoType335@github.com/xingxang/testedio.git'
    }
  } catch (err) {
    throw err
  } finally {
    deleteDir()
  }
}
