#!/bin/bash
#build.sh
rm -rf /proto/js/
rm -rf /proto/ts/
mkdir /proto/js/
mkdir /proto/ts/
cd /proto/
protofile=`find -name '*.proto'`
for file in $protofile
do
bname=`basename $file .proto`
pbjs -t static-module -w closure -r laya -o /proto/js/$bname.js $file
pbts -o /proto/ts/$bname.d.ts /proto/js/$bname.js
node /fix.js /proto/ts/$bname.d.ts
done
