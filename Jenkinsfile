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
    stage('Generate') {
      sh 'npm run generate'
    }
    stage('Check') {
      // sh 'cat test.txt'
      // sh 'git config --global user.email "a@a.com" && git config --global user.name "D" && git checkout master && git add test.txt && git commit -m "jenkins update" && git push https://xingxang:%3FprotoType335@github.com/xingxang/testedio.git'
      // sh 'git add . && git commit -m "jenkkk" && git push origin'

      // git(
      //  url: 'https://github.com/xingxang/testedio.git',
      //  credentialsId: 'be7926f0-9204-498f-bb26-d2f8b96864d3',
      //  branch: 'master'
      // )

      // sh 'git status'
      // sh 'git add . && git commit -m "jenkins commit" && git push origin master'
      def msg = smh.GIT_COMMIT
      println msg
      sh "git add . && git commit -m \"$msg\""
    }
  } catch (err) {
    throw err
  } finally {
    deleteDir()
  }
}
