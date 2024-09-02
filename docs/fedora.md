---
title: Fedora & RHEL
---

## Change locale and keyboard layout

### Check current settings

```
localectl
```

### See available locales

```
localectl list-locales
```

### Set locale

```
sudo localectl set-locale LANG=en_US.UTF-8
```

### See available keyboard layouts

```
localectl list-keymaps
```

### Set keyboard layout

```
sudo localectl set-keymap layoutCode
```

```bash
sudo localectl set-x11-keymap layoutCode # For the graphical environment
```

## Delete older kernels & limit max allowed

Install `yum-utils`.

```
sudo dnf install yum-utils
```

Set count as how many old kernels you want left.

```
package-cleanup --oldkernels --count=2
```

To make the amount of installed kernels permanent edit `/etc/yum.conf` or
`/etc/dnf/dnf.conf` and set `installonly_limit` option.

```
installonly_limit=2
```

## Get name of installed packages with rpm

```
rpm -qa --queryformat "%{NAME}\n"
```

## Get release version

```bash
cat /etc/redhat-release  # On RHEL
```

```bash
cat /etc/fedora-release  # On Fedora
```

```bash
lsb_release -ir   # On any of both
```

## Manually build kernel modules installed for current kernel

```
sudo akmods --force
```

## Network proxy

### Set proxy server using environment variables

The `http_proxy` and `https_proxy` environment variables are used to
specify proxy settings to client programs such as curl and wget.

### Package repository

Add line `proxy=proxyAddress` to .repo file in `/etc/yum.repos.d`.

## Package groups

### Get available and installed groups

```
dnf grouplist
```

### List packages in group

```
dnf groupinfo groupName
```

### Install a group of packages

```
sudo dnf groupinstall groupName
```

:::tip
- Option `--with-optional` includes optional packages of the group too.
- Option `-x pkgName` excludes pkgName.
:::

## Release upgrade using dnf

:::warning
Check that no repos exist with hardcoded release version in
  `/etc/yum.repos.d/`
:::

Update current packages and install system upgrade plugin.

```
sudo dnf --refresh upgrade
```

```
sudo dnf install dnf-plugin-system-upgrade
```

Download the newer packages. Replace `xy` with target version.

```
sudo dnf system-upgrade download --refresh --releasever=xy
```

Trigger the upgrade process.

```
sudo dnf system-upgrade reboot
```

## Remote control with VNC over SSH

### Install VNC server

```
sudo yum install tigervnc-server
```

:::note
`xorg-x11` and a desktop environment need to be installed as well.
:::

### Create config. file to give access to root and another user

Save `/etc/sysconfig/vncserver` with the following contents:

```bash
VNCSERVERS="0:root,1:username" # Replace username with the actual name of the user
VNCSERVERARGS[0]="-rfbport 5900"
VNCSERVERARGS[1]="-rfbport 5901"
```

### Set VNC password

```bash
vncpasswd # Run as each allowed user
```

Since the idea is to connect only over SSH, the server will be started
when needed from the remote machine through SSH and the insecure ports
don't need to be allowed in the firewall.

### Start VNC server and tunnel from the remote workstation

```
ssh user@ip 'vncserver -geometry 1280x1024 -autokill'
```

```
ssh -NL 5901:localhost:5901 user@ip
```

### Connect with a VNC client

```bash
localhost:5901 # or 5900
```

:::note
- To disconnect log out from the desktop environment (vnc server is
  stopped automatically thanks to `-autokill` option) and
  `Crtl+C` the SSH tunnel.
- Tested on RHEL 7.
:::

## RH Satellite

### Manually register existing RHEL host

Clean previous registration data.

```
sudo subscription-manager clean
```

Get rhsm data from satellite server to register a host.

```
sudo rpm -Uhv http://satellite.example.com/pub/katello-ca-consumer-latest.noarch.rpm
```

Register host.

```
sudo subscription-manager register --org="orgName" --activationkey="key"
```

```
sudo subscription-manager repos --list
```

```
sudo yum install katello-agent
```

## RH Subscription Manager

### Register host with customer portal

```
sudo subscription-manager register --username userName
```

:::note
Enter password when asked or pass it with `--password passwd`.
:::

### Attach a subscription

```
sudo subscription-manager attach --pool=pool-id
```

### Get host subscription status

```
sudo subscription-manager status
```

### Get available subscriptions

```
sudo subscription-manager list --available
```

### List available repositories

```
sudo subscription-manager repos --list
```

### Remove current registrations

```
sudo subscription-manager remove --all
```

### Remove current registration, subscriptions and local data

```
sudo subscription-manager clean
```

## Upgrade system except kernel

```
sudo dnf upgrade -x kernel*
```
