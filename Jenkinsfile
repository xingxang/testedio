#!/usr/bin/env groovy
import groovy.transform.Field

node {
  try {
    stage('Checkout') {
      smh = checkout scm
      smh.each{ k, v -> println "${k}:${v}" }
      sh 'env'
    }
    stage('Check') {
      def BRANCH_NAME = env.CHANGE_BRANCH || env.BRANCH_NAME;

      withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
        git(
          url: "https://$USERNAME:$PASSWORD@github.com/xingxang/testedio.git",
          credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb',
          branch: "${BRANCH_NAME}"
        )

        // sh "npm run generate"
        // sh "git add ."
        // sh "git commit -m 'localisation [ci skip]'"
        // sh "git push origin ${BRANCH_NAME}"
      }
    }
  } catch (err) {
    throw err
  } finally {
    deleteDir()
  }
}
