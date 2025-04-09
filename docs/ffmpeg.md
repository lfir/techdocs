---
title: FFmpeg
---

## Change the resolution of a video

```
ffmpeg -i original-video.mp4 -vf scale=640:-1 smaller-video.mp4
```

The first number is the width. The second value is the video's new height and
_-1_ tells ffmpeg to decide for us, based on the file's original ratio.

## Concatenate video files

```
echo file vid_0.mkv > list.txt
echo file vid_1.mkv >> list.txt
```

```
ffmpeg -f concat -i list.txt -c copy output.mkv
```

## Convert one audio/video format to another

```
ffmpeg -i original-file.avi new-file.mp4
```

## Trim audio or video file

```
ffmpeg -i file.mkv -ss 00:00:20 -to 00:00:40 -c copy file-2.mkv
```
