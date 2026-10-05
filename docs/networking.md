---
title: Networking
---

## Get DNS record information

```
dig domainName
```

:::tip
The record type can also be specified for non-A records, i.e. `dig _acme-challenge.www TXT`
:::

### Useful options

- `-x ipAddr` - Reverse lookup.

## Firewalld

### Persistent vs temporary changes

By default, changes are applied to the runtime configuration only and are lost on reload or reboot. Add `--permanent`
to write the change to the saved configuration (it is not applied to the running firewall until reloaded).

**Save the current runtime configuration as permanent**

```bash
sudo firewall-cmd --runtime-to-permanent
```

### Reload configuration

```bash
sudo firewall-cmd --reload
```

:::note
Reloading applies the permanent configuration and discards runtime-only changes.
:::

### Zones

#### Show active zones

```bash
sudo firewall-cmd --get-active-zones
```

#### Show rules of all zones or a specific zone

```bash
sudo firewall-cmd --list-all-zones
```

```bash
sudo firewall-cmd --zone=public --list-all
```

#### Add a zone

```bash
sudo firewall-cmd --permanent --new-zone=myZone
```

:::note
A new zone is only available after reloading.
:::

#### Zone matching order

For each incoming packet, firewalld picks the zone using the first match in this order:

1. **Source** - a zone with a source matching the packet's source address.
2. **Interface** - the zone the incoming interface is assigned to.
3. **Default zone** - used when neither of the above matches.

#### Get / set default zone

```bash
sudo firewall-cmd --get-default-zone
```

```bash
sudo firewall-cmd --set-default-zone=public
```

### Traffic rules

#### Add a port

```bash
sudo firewall-cmd --permanent --zone=public --add-port=8080/tcp
```

:::warning
If `--zone` is omitted, the change is applied to the default zone. This applies to ports, services, rich rules and other zone-scoped options too.
:::

#### Add a service

```bash
sudo firewall-cmd --permanent --zone=public --add-service=https
```

```bash
sudo firewall-cmd --get-services # list available services
```

#### Add a rich rule

Express policies that services and ports alone can't: match by source/destination address, family, service or port, and apply `accept`, `reject`, `drop`.
They also support rate limiting and timeouts.

```bash
sudo firewall-cmd --permanent --zone=public --add-rich-rule='rule family="ipv4" source address="192.168.1.0/24" port port="8080" protocol="tcp" accept'
```

```bash
sudo firewall-cmd --zone=public --list-rich-rules
```

:::tip
Use `--remove-port`, `--remove-service` and `--remove-rich-rule` (with the same arguments) to undo each of these.
:::

#### Add or remove a source

Assigns traffic coming from an address or network to a zone.

```bash
sudo firewall-cmd --permanent --zone=trusted --add-source=192.168.1.0/24
```

```bash
sudo firewall-cmd --permanent --zone=trusted --remove-source=192.168.1.0/24
```

```bash
sudo firewall-cmd --zone=trusted --list-sources
```

#### Add or remove an interface

Assigns all traffic of an interface to a zone.

```bash
sudo firewall-cmd --permanent --zone=internal --add-interface=eth1
```

```bash
sudo firewall-cmd --permanent --zone=internal --remove-interface=eth1
```

```bash
sudo firewall-cmd --zone=internal --change-interface=eth1 # move to another zone
```

:::note
A source takes precedence over an interface, so a more specific source can be given different rules than the rest of the traffic on the same interface.
:::

## Hostname

### Set

```
sudo hostnamectl set-hostname vm7.orgDomain
```

### View

Use one of the following commands.

```
hostnamectl status
```

```
cat /etc/hostname
```

## HTTP protocol

### Sending arguments

#### GET method

Sent as a query string after the `?` in the url.

```
http://example.com/page?parameter=value&also=another
```

#### POST/PUT methods

Stored as key-value pairs in the body (not visible in the url).

```
{ "key": "value" }
```

## IP

### Add a route temporarily (until reboot)

```
ip route add 192.168.2.1/23 via 10.11.12.3
```

### Add an IP address to an interface temporarily (until reboot)

```
sudo ip address add 192.168.1.1/24 dev eth0
```

### Bring interfaces up and down

```
sudo ip link set eth0 up
```

```
sudo ip link set eth0 down
```

### Delete a route temporarily (until reboot)

```
sudo ip route delete 192.168.2.1/23 via 10.11.12.3
```

```bash
sudo ip route delete 192.168.2.1/23 # for all routes to target
```

### Show ARP cache (MAC addresses)

```
ip -c neighbor show
```

### Show information for all interfaces

```
ip -c link show
```

### Show ip addresses allocated to interfaces

```
ip -c address show
```

### Show public ip address

```
curl ifconfig.me
```

### Show statistics of an interface

```
ip -c -h -s link show eth0
```

:::note
Options `-c` and `-h` add color and human-readable values to output.
:::

## NetworkManager

### Disable IPv6 (GUI)

In the IPv6 tab of the connection's settings set **Method** to **Disabled**.

## Ping

Used to test whether or not a packet can reach a host. Works by sending ICMP echo request (Type 8) packets
to the destination host and waits for an ICMP echo reply (Type 0).

The `icmp_seq` field shows the sequence number of packets sent. If sequence numbers are missing, some
connectivity issue is happening and not all packets are getting through. If the sequence number is out of order,
the connection is probably very slow as packets are exceeding the one second default.

### Useful options

- `-c X` - Stop sending echo request packets after the count has been reached.
- `-I name` - Use the specified interface.
- `-4` or `-6` - Use only IPv4 or v6.

## Route

### Add route temporarily (until reboot)

```
sudo route add -net 192.168.0.0 netmask 255.255.255.0 gw 192.168.0.1
```

```bash
# Add default gateway.
sudo route add default gw 192.168.0.1
```

### Delete route temporarily (until reboot)

```
sudo route del -net 192.168.0.0 netmask 255.255.255.0
```

```bash
# Delete default gateway.
sudo route del default
```

### Show routing table

```
route
```

## Ss

### Useful options

<table>
<thead>
    <tr>
        <th>Option</th>
		<th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>-4</td>
		<td>IPv4 sockets only.</td>
    </tr>
    <tr>
        <td>-a</td>
		<td>Listening and non-listening sockets (established for TCP).</td>
    </tr>
    <tr>
        <td>-l</td>
		<td>Listening sockets only.</td>
    </tr>
    <tr>
        <td>-m</td>
		<td>Socket memory usage.</td>
    </tr>
    <tr>
        <td>-n</td>
		<td>Don't resolve numeric adresses/ports.</td>
    </tr>
    <tr>
        <td>-o</td>
		<td>Options (i.e. state established).</td>
    </tr>
    <tr>
        <td>-p</td>
		<td>Process using socket.</td>
    </tr>
    <tr>
        <td>-t</td>
		<td>TCP sockets.</td>
    </tr>
    <tr>
        <td>-u</td>
		<td>UDP sockets.</td>
    </tr>
    <tr>
        <td>-x</td>
		<td>Unix domain sockets.</td>
    </tr>
    <tr>
        <td>-Z</td>
		<td>Process and security context (SELinux).</td>
    </tr>
    </tbody>
</table>

## Traceroute

See route to target host (how packets are being routed until they get to its final destination).

```
traceroute targetHost
```

:::tip
To bypass firewalls that block ICMP traffic try one of these options: `--udp` or `--tcp`
:::
:::note
The commands on this page were tested on **Fedora 40** (unless otherwise specified).
:::
