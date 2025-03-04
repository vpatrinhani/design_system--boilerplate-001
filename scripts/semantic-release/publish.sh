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

echo "[Semantic Release] Script(publish): Pushing git changes..."
git log -10 --pretty=oneline
git push -u origin ${CI_COMMIT_REF_NAME}

echo "[Semantic Release] Script(publish): Writing ENV Vars Output..."
cat > .env-ci-release-output-vars <<EOL
LAST_RELEASE_VERSION=$LAST_RELEASE_VERSION
LAST_RELEASE_TAG=$LAST_RELEASE_TAG
NEXT_RELEASE_VERSION=$NEXT_RELEASE_VERSION
NEXT_RELEASE_TAG=$NEXT_RELEASE_TAG
EOL

cat .env-ci-release-output-vars >> .env-cijob-release-shared
