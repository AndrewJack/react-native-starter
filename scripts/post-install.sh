#!/bin/bash -e

# Apply changes after yarn install

echo "Copying missing RNScreens podspec"
ORIGIN_DIR="scripts/patch-files"
RNSCREENS_PODSPEC="RNScreens.podspec"
cp -r "$ORIGIN_DIR/$RNSCREENS_PODSPEC" "node_modules/react-native-screens/$RNSCREENS_PODSPEC" 
