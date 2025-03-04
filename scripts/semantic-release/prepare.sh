#!/usr/bin/env bash

while [ $# -gt 0 ]; do

   if [[ $1 == *"--"* ]]; then
        param="${1/--/}"
        declare $param="$2"
        # echo $1 $2 // Optional to see the parameter:value result
   fi

  shift
done

LAST_RELEASE_VERSION=${prev_version:-}
LAST_RELEASE_TAG=${prev_tag:-}
NEXT_RELEASE_VERSION=${next_version}
NEXT_RELEASE_TAG=${next_tag}

NX_EXCLUDE_PROJECTS="sample-react-e2e,sample-react,sample-native,sample-angular,sample-vue"

echo "NX_BASE=$NX_BASE"
echo "NX_HEAD=$NX_HEAD"

echo "[Semantic Release] Script(prepare): The last release was: ${LAST_RELEASE_VERSION}"

echo

echo "[Semantic Release] Script(prepare): Bumping NPM version to: ${NEXT_RELEASE_VERSION}"
npx nx affected --target=prepare-release --base=$NX_BASE --head=$NX_HEAD --args=\"--version=${NEXT_RELEASE_VERSION}\" --exclude="${NX_EXCLUDE_PROJECTS}"

echo

echo "[Semantic Release] Script(prepare): Building Affected Projects..."
npx nx affected --target=build --base=$NX_BASE --head=$NX_HEAD --exclude="${NX_EXCLUDE_PROJECTS}"

echo

echo "[Semantic Release] Script(prepare): Packaging Affected Distributions..."
npx nx affected --target=release --base=$NX_BASE --head=$NX_HEAD --exclude="${NX_EXCLUDE_PROJECTS}"

echo

echo "[Semantic Release] Script(prepare): Creating Commit for the Version Bumping and Trigger Publish Pipeline..."
git commit -am "chore(release): Release version: ${NEXT_RELEASE_VERSION}"
