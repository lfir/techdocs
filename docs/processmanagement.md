---
title: Process management
---

## Display all running processes

```
ps aux
```

## Display only PID, USER and COMMAND columns

```
ps -eo pid,user,args
```

Other common options:

- `rss` - Process' resident set size, i.e. how much RAM is currently allocated to it (in kilobytes)
- `pmem` - Ratio of rss to total physical memory on the machine (expressed as a percentage)
- `--sort prop` - Sort processes by specified field (default order is ascending, `-` can be used to reverse it, i.e. `-pid`)

## Find process by name

```
pgrep procName
```

Useful options:

- `-a` adds the full command line to the output.
- `-l` adds only the name of the process.
- `-i` makes the search case insensitive.
- `-u user` will list the processes owned by user.
