---
title: Debian & Ubuntu
---

## Compile & install deb package from source

```bash
# Get build dependencies available on the repositories
sudo apt build-dep 
```
```bash
# Download sources
sudo apt source pkgName
```
```bash
# Build package
sudo apt source pkgName --compile
```
```bash
# Install package
sudo dpkg -i pkgName.deb
```

## Frequently used apt commands

### Install and remove packages

Attempt to fix broken packages.

```bash
sudo apt -f install # or remove.
```

Install package.

```
sudo apt install pkgName
```

:::tip
- Can also be used to update only the given packages to the latest version.
- To install a specific version use `pkgName=pkgVersion`.
:::

Search for package.

```bash
apt search pkgName # and/or keywords.
```

:::tip
To get all available versions of a package use `apt policy pkgName`.
:::

Uninstall package.

```
sudo apt remove pkgName
```

Uninstall pkg including config. files.

```
sudo apt purge pkgName
```

### Update the OS

Install every update available (incl. kernels).

```
sudo apt dist-upgrade
```

Install newer versions of the packages that don't replace or erase
previously installed ones.

```
sudo apt upgrade
```

Update list of available packages and their versions.

```
sudo apt update
```

## Remote graphical session with x11vnc

Connect to the server using SSH.

Change to graphical runlevel if needed.

```
sudo systemctl isolate graphical.target
```

Use one of the following options to forward the x11 session via vnc.

Before user login.

```
sudo x11vnc -display :0 -auth /var/run/lightdm/root/:0
```

After login from the **home** dir.

```
x11vnc -display :0 -auth .Xauthority
```

Access the server with a vnc client at serverIP:0.


:::info
- Tested on 16.04 (with display manager **lightdm**).
- [SSH tunnelling guide](https://github.com/LibVNC/x11vnc#tunnelling-x11vnc-via-ssh).
:::

## Sort installed packages by size with synaptic

Enable all size-related columns in preferences so they show up in the main window.

## Turn on ufw and deny all incoming traffic

```
sudo ufw enable && sudo ufw default deny
```
