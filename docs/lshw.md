---
title: Lshw
---

## Show all available hardware info

```
sudo lshw
```

## Show info about one or more hardware classes

```
sudo lshw -C class -C class
```

Where class can be one of the following terms:

- bus
- bridge
- communication
- disk
- display
- generic
- input
- memory
- multimedia
- network
- power
- processor
- storage
- system
- volume

## Show summary info only

Add option `-short`.

## Supported output formats

Add one of the following options:

- `-html`
- `-json`
- `-xml`

:::note
These can't be used together with `-short`.
:::
