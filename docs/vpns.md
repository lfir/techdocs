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

### Start app only if a VPN connection is active

```
nmcli con show --active | grep -q vpn && app || echo 'VPN not connected!'
```

### TCP or UDP

TCP is generally used by default. UDP is a fast but less reliable protocol as it does not guarantee the delivery of packets. It is good for streaming and downloading purposes.

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

## WireGuard

Examples use an interface named `wg0`, configured in `/etc/wireguard/wg0.conf`.

### Service management (systemd)

```
sudo systemctl start wg-quick@wg0
```

```
sudo systemctl stop wg-quick@wg0
```

```
sudo systemctl restart wg-quick@wg0
```

Reload configuration without dropping the connection:

```
sudo systemctl reload wg-quick@wg0
```

:::note
`systemctl reload` runs `wg syncconf` under the hood, so it only applies peer and key changes. Changes to `Address`, `DNS`, routes or `PostUp`/`PostDown` require a restart.
:::

Start on boot:

```
sudo systemctl enable wg-quick@wg0
```

### wg-quick usage

```
sudo wg-quick up wg0
```

```
sudo wg-quick down wg0
```

Apply config changes to a running interface without restarting it:

```
sudo bash -c 'wg syncconf wg0 <(wg-quick strip wg0)'
```

### Status

```
sudo wg show
```

```
systemctl status wg-quick@wg0
```

:::tip
If you run `wg-quick` by hand, `systemd` doesn't know about it. `systemctl status` could show the service as inactive even though the interface is up.
Pick one method and stick with it.
:::

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
