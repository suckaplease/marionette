#!/bin/bash
#coffee -wc -o staticfiles/js/ coffee/*/*
#coffee -wc -o public/js/ client/coffee/*/*
#coffee --watch --compile --output public/js/ client/coffee/
jitter client/coffee/ public/js/
