#!/bin/bash

mkdir -p dist/wedding-page

mv dist/assets dist/wedding-page/assets
mv dist/audio dist/wedding-page/audio

cd dist/
python3 -m http.server 8888
