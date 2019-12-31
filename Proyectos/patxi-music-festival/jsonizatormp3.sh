#!/bin/bash
echo "{ \"canciones\":["
NUM=1
for f in $(find node_modules/ -name "*.mp3" | sort ); do 
    echo "\"$f\","; 
    ((NUM++))
done
echo "]}"
