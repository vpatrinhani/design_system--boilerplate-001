#!/usr/bin/env bash

NEXT_RELEASE_VERSION=${1:-'1.0.0'}

NX_PROJECTS="mylib-core-js,mylib-core-styles,mylib,mylib-angular,mylib-react"

npx nx run-many --target=prepare-release --projects=${NX_PROJECTS} --args=\"--version=${NEXT_RELEASE_VERSION}\"

npx nx run-many --target=build --projects=${NX_PROJECTS}

npx nx run-many --target=release --projects=${NX_PROJECTS}

npm publish "./pack/libs/mylib-core-js/my-lib-org-mylib-core-js-${NEXT_RELEASE_VERSION}.tgz" --registry http://localhost:4873/

npm publish "./pack/libs/mylib-core-styles/my-lib-org-mylib-core-styles-${NEXT_RELEASE_VERSION}.tgz" --registry http://localhost:4873/

npm publish "./pack/libs/mylib/my-lib-org-mylib-${NEXT_RELEASE_VERSION}.tgz" --registry http://localhost:4873/

npm publish "./pack/libs/mylib-angular/my-lib-org-mylib-angular-${NEXT_RELEASE_VERSION}.tgz" --registry http://localhost:4873/
