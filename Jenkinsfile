#!/usr/bin/env groovy
import groovy.transform.Field

def isCiSkip = false;
def skipLabel = '[ci-skip]';

node {
  try {
    stage('Checkout') {
      def commit = checkout scm
      def commitMessage = sh(script: "git log --format=%B -n 1 ${commit.GIT_COMMIT}", returnStdout: true).trim()

      if (commitMessage.contains(skipLabel)) {
        isCiSkip = true;
        // throw 'isCiSKip'
        throw new Exception()
      }
    }
    stage('Check') {
      def BRANCH_NAME = env.CHANGE_BRANCH ?: env.BRANCH_NAME;

      withCredentials([[
        $class: 'UsernamePasswordMultiBinding',
        credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb',
        usernameVariable: 'USERNAME',
        passwordVariable: 'PASSWORD'
      ]]) {
        git(
          url: "https://$USERNAME:$PASSWORD@github.com/xingxang/testedio.git",
          credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb',
          branch: BRANCH_NAME
        )

        sh "npm run generate"

        def modifiedFiles = sh(script: "git ls-files -m", returnStdout: true)

        if (modifiedFiles) {
          sh """
            git add ."
            git commit -m 'localisation $skipLabel}'
            git push origin $BRANCH_NAME
            """
        }
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
