#!/usr/bin/env groovy
import groovy.transform.Field

node {
  try {
    stage('Checkout') {
      def smh = checkout scm
      echo smh.GIT_COMMIT
    }
    stage('Build') {
      // tests etc
      // sh 'npm install'
    }
    stage('Generate') {
      // sh 'npm run generate'
    }
    stage('Check') {
      // sh 'cat test.txt'
      // sh 'git config --global user.email "a@a.com" && git config --global user.name "D" && git checkout master && git add test.txt && git commit -m "jenkins update" && git push https://xingxang:%3FprotoType335@github.com/xingxang/testedio.git'
    }
  } catch (err) {
    throw err
  } finally {
    deleteDir()
  }
}
