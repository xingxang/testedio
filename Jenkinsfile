#!/usr/bin/env groovy
import groovy.transform.Field

def CHANGE_BRANCH = ''
def CHANGE_TARGET = 'master'

node {
  try {
    stage('Checkout') {
      smh = checkout scm
    }
    stage('Check') {
      // git(
      //   url: "https://$USERNAME:$PASSWORD@github.com/xingxang/testedio.git",
      //   credentialsId: 'be7926f0-9204-498f-bb26-d2f8b96864d3',
      //   branch: "${env.CHANGE_BRANCH}"
      // )

      // sh "npm run generate"
      // sh "git add ."
      // sh "git commit -m 'jenkekekekek'"
      // sh "git push origin ${env.CHANGE_BRANCH}"

      withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'be7926f0-9204-498f-bb26-d2f8b96864d3', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
        sh 'echo uname=$USERNAME pwd=$PASSWORD'
      //   git(
      //   url: "https://$USERNAME:$PASSWORD@github.com/xingxang/testedio.git",
      //   credentialsId: 'be7926f0-9204-498f-bb26-d2f8b96864d3',
      //   branch: "master"
      //   )
      //   println env.USERNAME
      //   sh '''
      //     npm run generate
      //     git add .
      //     git commit -m "jenkins update"
      //     git push origin master
      //     '''
      }
    }
  } catch (err) {
    throw err
  } finally {
    deleteDir()
  }
}
