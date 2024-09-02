---
title: KVM
---

## Enable administration of VMs as non root user

Edit file `/etc/libvirt/libvirtd.conf`.

Uncomment the following lines:

```
unix_sock_group = "libvirt"
unix_sock_rw_perms = "0770"
```

Add current user to the `libvirt` group.

```
sudo usermod -a -G libvirt $USER
```

Log out and log in again.

## Firewall configuration

By default the `libvirt` firewalld zone is used in the host machine for the virtual NIC connected to the VMs' network.
