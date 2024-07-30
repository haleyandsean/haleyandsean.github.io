#!/bin/bash/

for file in img/eng_pics/* 
    do echo "<div class=\"gallery-item\">\n\t<img src=\"${file}\" class=\"gallery-image\">\n</div>"
done