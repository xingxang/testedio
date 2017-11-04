#!/usr/bin/env groovy
import groovy.transform.Field

def isCiSkip = false;

node {
  try {
    stage('Checkout') {
      def smh = checkout scm

      def commit = sh(script: "git show ${smh.GIT_COMMIT}", returnStdout: true)

      if (commit.contains('[ci-skip]')) {
        isCiSkip = true;
        throw
      }
    }
    stage('Check') {
      def BRANCH_NAME = env.CHANGE_BRANCH || env.BRANCH_NAME;

      withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
        git(
          url: "https://$USERNAME:$PASSWORD@github.com/xingxang/testedio.git",
          credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb',
          branch: "${BRANCH_NAME}"
        )

        sh "npm run generate"
        sh "git add ."
        sh "git commit -m 'localisation [ci skip]'"
        sh "git push origin ${BRANCH_NAME}"
      }
    }
  } catch (err) {
    if (isCiSkip) {
      currentBuild.result = 'SUCCESS'
      return
    }

    throw err
  } finally {
    deleteDir()
  }
}
