#!/bin/bash
IN=""../../icon.png""
array=($(find . -name "*.png"))
#Image Width: 72 Image Length: 72
for i in "${array[@]}";do 
echo $i
info=`pnginfo $i |grep "Image Width"`
read -r -a Words <<<"$info"
s="${Words[2]}x${Words[5]}!"
command="convert -resize $s $IN $i"
echo $command
$command
done

