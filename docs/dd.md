---
title: Dd
---

## Create bootable USB from ISO image

Find out name of USB drive.

```
lsblk
```

Make sure that it is not mounted. Run command below, replacing `/dev/sdx` with
your drive (do not append a partition number, do not use something like
/dev/sdb1).

```
dd bs=4M if=/path/to/archlinux.iso of=/dev/sdx status=progress oflag=sync
```

## Create swapfile and activate it

Create a 1 GiB file in the current dir to be used as swap space and give
it appropriate format and permissions.

```
sudo dd if=/dev/zero of=swapfile bs=1024 count=1048576
```

:::note

- `bs` = block size, number of **bytes** by default; unit indicators **K**, **M** and **G** can be used, i.e. 1024 = 1K
- `count` = number of times a block will be copied, i.e. if `bs` = 1024 and `count` = 2 then output file size = **2K**

:::

```
sudo chmod 600 swapfile
```

```
sudo mkswap swapfile
```

Add the file to the current swap area.

```
sudo swapon swapfile
```

Add an entry to `/etc/fstab` so the file is used automatically after boot.

```
/path/to/swapfile  swap  swap  defaults  0  0
```

## Save disc contents as ISO file

Verify if the cd is mounted.

```
mount
```

If it is, unmount it.

```
sudo umount /dev/cdrom
```

Create ISO image.

```
sudo dd if=/dev/cdrom of=/tmp/cdimg1.iso
```
