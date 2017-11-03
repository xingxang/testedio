#!/usr/bin/env groovy
import groovy.transform.Field

def smh

node {
  try {
    stage('Checkout') {
      smh = checkout scm

      smh.each { entry ->
        println "$entry.key: $entry.value"
      }
    }
    stage('Build') {
      // tests etc
      sh 'npm install'
    }
    stage('Check') {
      withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'be7926f0-9204-498f-bb26-d2f8b96864d3', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
        sh 'echo uname=$USERNAME pwd=$PASSWORD'
      }
      // git(
      //  url: 'https://github.com/xingxang/testedio.git',
      //  credentialsId: 'be7926f0-9204-498f-bb26-d2f8b96864d3',
      //  branch: "master"
      // )

      // sh '''
      //   npm run generate
      //   git add .
      //   git commit -m "jenkins update"
      //   git log
      //   git push origin master"
      //   '''
    }
  } catch (err) {
    throw err
  } finally {
    deleteDir()
  }
}
