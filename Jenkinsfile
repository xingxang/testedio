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
       branch: "master"
      ) 

      sh '''
        npm run generate
        git add .
        git commit -m "jenkins update"
        git push origin master
        '''
    }
  } catch (err) {
    throw err
  } finally {
    deleteDir()
  }
}
