---
title: Scheduled tasks
---

## Anacron jobs

- Files under `/etc/cron.xyz` (i.e. `daily`) dirs.
- These files have to be executable, owned by root, not writable by
  group or other.
- Symlinks have to point to files owned by root.
- File names must be made up of letters, digits, underscores or
  hyphens only.

Test (manually run) scripts.

```
sudo run-parts /etc/cron.daily
```

:::note
Tested on Fedora 29.
:::

## Logging cron jobs

Redirect STDOUT and STDERR to a file.

```
* * * * * myjob.sh >> /var/log/myjob.log 2>&1
```

:::note
Whether cron tried to execute the job is stored in `/var/log/syslog` or `/var/log/cron.log`.
:::
