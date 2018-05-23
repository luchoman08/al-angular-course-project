#! /usr/bin/env python
# -*- coding: utf-8 -*-
from urllib.request import urlopen
from io import BytesIO
import gzip
import json
baseURL = "http://files.tmdb.org/p/exports/"
filename = "tv_series_ids_05_22_2018.json.gz"
outFilePath = "man-pages-3.34.tar"

response = urlopen(baseURL + filename)
compressedFile = BytesIO()
compressedFile.write(response.read())
#
# Set the file's current position to the beginning
# of the file so that gzip.GzipFile can read
# its contents from the top.
#
compressedFile.seek(0)

decompressedFile = gzip.GzipFile(fileobj=compressedFile, mode='r')
json_bytes = decompressedFile.read()
json_str = json_bytes.decode('utf-8') 
json_ready = "[" + json_str.replace("\n",",") [:-1]+ "]"
