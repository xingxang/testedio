#!/usr/bin/env groovy
import groovy.transform.Field

node {
  try {
    stage('Checkout') {
      smh = checkout scm
    }
    stage('Check') {
      def CHANGE_BRANCH = env.CHANGE_BRANCH;
      def BRANCH_NAME = env.BRANCH_NAME;

      withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
        if (CHANGE_BRANCH) {
          sh 'echo uname=$USERNAME pwd=$PASSWORD'
            git(
              url: "https://$USERNAME:$PASSWORD@github.com/xingxang/testedio.git",
              credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb',
              branch: "${CHANGE_BRANCH}"
          )

          sh "npm run generate"
          sh "git add ."
          sh "git commit -m 'jenkekekekek'"
          sh "git push origin ${CHANGE_BRANCH}"
        } else {
            git(
              url: "https://$USERNAME:$PASSWORD@github.com/xingxang/testedio.git",
              credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb',
              branch: "${BRANCH_NAME}"
          )

          sh "npm run generate"
          sh "git add ."
          sh "git commit -m 'jenkekekekek'"
          sh "git push origin ${BRANCH_NAME}"
        }      
      }
    }
  } catch (err) {
    throw err
  } finally {
    deleteDir()
  }
}
