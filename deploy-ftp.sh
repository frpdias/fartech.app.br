#!/bin/bash
cd build
lftp -e "set ssl:verify-certificate no; set ftp:ssl-allow no; set ftp:passive-mode on; mirror -R --delete --verbose . /public_html/; bye" -u u624120101 ftp://82.25.67.131:21
