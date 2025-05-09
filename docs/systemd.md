---
title: Systemd
---

## Get units that failed to start

```
systemctl list-units --state=failed
```

## Journalctl

`journalctl` can be used to browse all systemd journal logs.

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
      <td>_EXE=/usr/bin/docker</td>
      <td>Display logs for a specific executable.</td>
    </tr>
    <tr>
      <td>_PID=5000</td>
      <td>Display logs for a specific process ID.</td>
    </tr>
    <tr>
      <td>_UID=1000</td>
      <td>Show logs for a specific user ID.</td>
    </tr>
    <tr>
      <td>-b</td>
      <td>Display logs starting from the current boot.</td>
    </tr>
    <tr>
      <td>-b -1</td>
      <td>Show logs starting from the previous boot.</td>
    </tr>
    <tr>
      <td>-f</td>
      <td>Follow logs in real-time (similar to `tail -f`).</td>
    </tr>
    <tr>
      <td>--grep "pattern"</td>
      <td>Filter logs by a specific pattern or string.</td>
    </tr>
    <tr>
      <td>-k</td>
      <td>Show kernel logs only.</td>
    </tr>
    <tr>
      <td>--no-page</td>
      <td>Disable output pagination.</td>
    </tr>
    <tr>
      <td>-o json-pretty</td>
      <td>Display logs in JSON format.</td>
    </tr>
    <tr>
      <td>-p err</td>
      <td>Filter logs by priority (e.g. `err`, `warning`, `info`, `debug`).</td>
    </tr>
    <tr>
      <td>-r</td>
      <td>Display logs in reverse order (newest entries first).</td>
    </tr>
    <tr>
      <td>--since today --until now</td>
      <td>Display logs for a specific time range. Each endpoint is optional.</td>
    </tr>
    <tr>
      <td>-u nginx.service</td>
      <td>Show logs for a specific service.</td>
    </tr>
  </tbody>
</table>

## Sample unit file insync.service (app auto start)

```
[Unit]
Description=Insync client

[Service]
Type=oneshot
RemainAfterExit=yes
ExecStartPre=/bin/sleep 10
ExecStart=/usr/bin/insync start
RestartSec=3

[Install]
WantedBy=default.target
```

Place the file in `/home/$USER/.config/systemd/user`

Then run

```
systemctl --user enable insync
```

or

```
sudo systemctl enable insync
```

to start it for all users.
