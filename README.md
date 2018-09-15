# DAW-DisenyoInterfaces
Temario Disenyo


## Utilidades

Paso de MKV a WebM para la Web.
```
ffmpeg -i grunt.mkv -f webm -c:v libvpx -b:v 1M -acodec libvorbis example.webm -hide_banner
```