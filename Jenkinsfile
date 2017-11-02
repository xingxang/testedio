#!/usr/bin/env groovy
import groovy.transform.Field

node {
  try {
    stage('Checkout'){
      checkout scm
    }
    stage('Build') {
      sh 'pwd'
      sh 'ls'
      sh 'npm install'
    }

    stage('Generate') {
      sh 'npm run generate'
    }

    stage('Check') {
      sh 'echo test.txt'
    }
  } catch (err) {
    throw err
  }
}
