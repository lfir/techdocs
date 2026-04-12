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
ffmpeg -i "concat:v0.mkv|v1.mkv|v2.mkv" -c copy output.mkv
```

Alternatively, if freezed frames appear for a couple of seconds in transition points,
specifying the duration of each file (in seconds) can help.

```
echo file vid_0.mkv > list.txt
echo duration 235 >> list.txt
echo file vid_1.mkv >> list.txt
echo duration 17 >> list.txt
```

```
ffmpeg -f concat -i list.txt -c copy output.mkv
```

:::note
Entering the durations in the input file is optional and can also be used to shorten a video in the output.
:::

## Convert one audio/video format to another

```
ffmpeg -i original-file.avi new-file.mp4
```

## Crop video

```
ffmpeg -i demo.mp4 -vf "crop=1100:768:0:0" out.mp4
```

- 1100 = width
- 768 = height
- 0:0 = initial coordinates (from the top-left corner)

## Trim audio or video file

```
ffmpeg -i file.mkv -ss 00:00:20 -to 00:00:40 -c copy file-2.mkv
```
