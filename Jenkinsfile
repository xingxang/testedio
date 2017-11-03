#!/usr/bin/env groovy
import groovy.transform.Field

def smh

node {
  try {
    stage('Checkout') {
      smh = checkout scm

      smh.each { entry ->
        println "Name: $entry.key Age: $entry.value"
      }
    }
    stage('Build') {
      // tests etc
      sh 'npm install'
    }
    stage('Check') {
      git(
       url: 'https://github.com/xingxang/testedio.git',
       credentialsId: 'be7926f0-9204-498f-bb26-d2f8b96864d3',
       branch: smh.GIT_BRANCH
      ) {
        sh 'git status'
        // sh 'npm run generate'
        // // sh 'git status'
        // // sh 'git add . && git commit -m "jenkins commit" && git push origin master'
        // def msg = smh.GIT_COMMIT
        // def branch = smh.GIT_BRANCH

        // sh "git add . && git commit -m \"$msg\""
        // sh "git checkout -b \"$msg\""
        // sh "git checkout master"
        // sh "git merge $msg"
        // sh "git push origin master"
      }
    }
  } catch (err) {
    throw err
  } finally {
    deleteDir()
  }
}
