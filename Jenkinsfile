#!/usr/bin/env groovy
import groovy.transform.Field

node {
  try {
    stage('Checkout'){
      when {
        expression { 'g' == 'greeting' }
      }
      checkout scm
    }
    stage('Build') {
      sh 'npm install'
    }
    stage('Generate') {
      sh 'npm run generate'
    }
    stage('Check') {
      sh 'cat test.txt'
      sh 'git add test.txt && git commit -m "jenkins update"'
    }
  } catch (err) {
    throw err
  }
}
