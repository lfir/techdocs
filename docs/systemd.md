---
title: Systemd
---

## Get units that failed to start

```
systemctl list-units --state=failed
```

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
