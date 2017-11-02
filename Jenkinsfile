#!/usr/bin/env groovy
import groovy.transform.Field

node {
  try {
    stage('Checkout'){
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
      sh 'git config --global user.email "a@a.com" && git config --global user.name "D" && git add test.txt && git commit -m "jenkins update"'
    }
  } catch (err) {
    throw err
  }
}
