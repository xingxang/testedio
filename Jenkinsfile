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
    }
  } catch (err) {
    throw err
  }
}
