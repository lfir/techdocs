---
title: LVM
---

## Online resize

:::warning
To use this method the VG has to have free space.
:::

Resize the lv.

```
lvextend -L +size /dev/vg-xfs/lv_name
```

Resize the filesystem.

```
xfs_growfs /dev/vg-xfs/lv-xfs
```
```bash
btrfs filesystem resize max /testBTRFS # Mount to this mountpoint first
```
```
resize2fs /dev/vg-ext4/lv-ext4
```
```
resize_reiserfs /dev/system/lv-reiserfs
```
