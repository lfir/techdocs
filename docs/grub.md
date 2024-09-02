---
title: Grub 2
---

## Change target environment at boot time for a single session

1.  When the GRUB menu appears, press the `Esc` key to stop the boot
    countdown.
2.  Highlight the desired menu entry with the arrow keys and press the `e`
    key to edit it.
3.  Use the arrow keys to move to the line beginning with `linux` and move
    to the end with arrows or the end key.
4.  Add `<space>systemd.unit=<foo.target>` at the end of the line.
5.  Press `Crtl+x` to resume the boot process.

:::info
[Reference](https://docs.fedoraproject.org/en-US/fedora/rawhide/system-administrators-guide/kernel-module-driver-configuration/Working_with_the_GRUB_2_Boot_Loader/#sec-Making_Temporary_Changes_to_a_GRUB_2_Menu).
:::

## Update Grub2 from live media

### Manually

From the live session mount OS partition on `/mnt`.

```bash
sudo mount /dev/sdXY /mnt # replace XY with drive letter and partition number.
```

Mount other required dirs.

```
sudo mount --bind /dev /mnt/dev
```
```
sudo mount --bind /sys /mnt/sys
```
```
sudo mount --bind /proc /mnt/proc
```

If there is a separate boot partition mount it as well.

```
sudo mount /dev/sdXY /mnt/boot
```

Chroot to start using the mounted directory as the root partition.

```
sudo chroot /mnt
```

Check if `grub.cfg` and **.mod** files are present in `/boot/grub` or
`/boot/grub2`. If not the correct boot partition was not mounted. After
verifying that update grub configuration using the appropriate command
for the distribution.

```bash
update-grub # Debian based systems
```
```bash
grub-mkconfig -o /boot/grub/grub.cfg # Fedora based systems
```
```bash
exit # leave chroot
```

`/mnt/boot/grub/grub.cfg` should now contain entries for the current
systems and kernels installed on the drive. Unmount the filesystems (if
using systemd this is done automatically when reboot is executed).

```
sudo umount /mnt/dev
```
```
sudo umount /mnt/sys
```
```
sudo umount /mnt/proc
```
```bash
sudo umount /mnt/boot # if mounted earlier
```
```
sudo umount /mnt/
```

And then reboot.
