#!/bin/bash
#build.sh
rm -rf /proto/js/
rm -rf /proto/ts/
rm -rf /proto/as/
mkdir /proto/js/
mkdir /proto/ts/
mkdir /proto/as/
mkdir /proto/as/messages/
mkdir /proto/json/
cd /proto/
protofile=`find -name '*.proto'`
for file in $protofile
do
bname=`basename $file .proto`
pbjs $file -t json > /proto/json/$bname.json
pbjs -t static-module -w closure -r laya -o /proto/js/$bname.js $file
pbts -o /proto/ts/$bname.d.ts /proto/js/$bname.js
node /fix.js /proto/ts/$bname.d.ts
node /asconverter.js /proto/json/$bname.json
done
rm -rf /proto/json/
