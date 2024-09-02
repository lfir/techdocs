---
title: SSH
---

## Connect using public key

Add the public key of the user to `"$HOME"/.ssh/config/authorized_keys` (on the host running the SSH server).

## Open graphical app

Edit file `/etc/ssh/sshd_config` on the server and set:

```
X11Forwarding yes
```

:::note
XOrg stack needs to be installed.
:::

Then on the client run:

```
ssh -X appName
```

## Quick connect to remote machine

Add a block with server information to `"$HOME"/.ssh/config` (on the client).

```
Host profileName
HostName hostIP
Port sshPort
User username
```

Command used to connect.

```
ssh profileName
```
