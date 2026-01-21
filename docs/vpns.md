---
title: VPNs
---

## OpenVPN

### Common issues

- Check path to certificate and key files in connection settings or import connection again with
  all files being in the same folder and agree to copy certificate files to the dir NetworkManager uses
  by default. Otherwise, i.e. on systems with SELinux, NetworkManager might be unable to read these files.
- OpenVPN 2.6+ depreciates an option/key that might be stored in a configuration file crated with a
  previous version. Update it replacing `cipher` with `data-ciphers`.

`sed` command to update all the configuration files in current dir

```bash
sed -i 's/cipher/data-ciphers/' \*.ovpn
```

## ProtonVPN

### Frequently used commands

```
protonvpn-cli login username
```

```
protonvpn-cli connect --fastest --protocol tcp
```

```
protonvpn-cli status
```

```
protonvpn-cli disconnect
```

:::tip
A good practice (balance between speed and privacy) is to choose a server in a country close to your country, but not in the one where you are.
:::

## Start app only if a VPN connection is active

```
nmcli con show --active | grep -q vpn && app || echo 'VPN not connected!'
```

## TCP or UDP

TCP is generally used by default. UDP is a fast but less reliable protocol as it does not guarantee the delivery of packets. It is good for streaming and downloading purposes.

## ZeroTier One

### Disconnect from network and delete its interface from the system

```
sudo zerotier-cli leave networkId
```

### Join network

```
sudo zerotier-cli join networkId
```

### List joined networks' status and assigned ips

```
sudo zerotier-cli listnetworks
```

### Show device status and id

```
sudo zerotier-cli info
```

### Start service

```
sudo systemctl start zerotier-one
```

:::note
Commands tested using zerotier-one-1.2.12-1 on Fedora 29.
:::
