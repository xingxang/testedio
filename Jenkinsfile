#!/usr/bin/env groovy
import groovy.transform.Field

def isCiSkip = false;

node {
  try {
    stage('Checkout') {
      def smh = checkout scm

      def commit = sh(script: "git log --format=%B -n 1 ${smh.GIT_COMMIT}", returnStdout: true)

      println "@@@@ COMMIT MESSAGE:"
      sh "git log --format=%B -n 1 ${smh.GIT_COMMIT}"
      println commit.contains('[ci-skip]')
      if (commit.contains('[ci-skip]')) {
        println "@@@@ COMMIT HAS CI-SKIP"
        isCiSkip = true;
        throw 'isCiSKip'
      }
    }
    stage('Check') {
      def BRANCH_NAME = env.CHANGE_BRANCH || env.BRANCH_NAME;
      println BRANCH_NAME
      withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
        git(
          url: "https://$USERNAME:$PASSWORD@github.com/xingxang/testedio.git",
          credentialsId: 'ad5310d2-4edb-4b53-8d80-6b0aaaececcb',
          branch: "${BRANCH_NAME}"
        )

        sh "npm run generate"

        def modifiedFiles = sh(script: "git ls-files -m", returnStdout: true)

        println "@@@@ MODIFIED FILES ${modifiedFiles}"

        if (modifiedFiles) {
          println "@@@@ COMMITING"
          sh "git add ."
          sh "git commit -m 'localisation [ci-skip]'"
          sh "git push origin ${BRANCH_NAME}"
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
