---
title: Logrotate
---

## Clear log file after it grows over a certain size

[Example](apache.md#clear-log-file-when-it-grows-over-300mb) using configuration file for Apache web server.

## Rotate count

Determines how many archived logs are returned before logrotate starts
deleting the older ones. For example: `rotate 4` tells logrotate to keep
four archived logs at a time. If four archived logs exist when the log
is rotated again, the oldest one is deleted.

## Test configuration file without applying changes

```
/usr/sbin/logrotate -d /usr/local/etc/logrotate.d/confFile
```

:::note
Called "Debug mode" in the manual. No logs are rotated, only debug messages are printed.
:::
