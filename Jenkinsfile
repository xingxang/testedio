#!/usr/bin/env groovy
import groovy.transform.Field

node {
  stage('Build') {
    sh 'npm install'
  }

  stage('Generate') {
    sh 'npm run generate'
  }
}