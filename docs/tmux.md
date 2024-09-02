---
title: Tmux
---

## Attach to a specific session

```
tmux a -t <session-name>
```

## Attach to the last used session

```
tmux a
```

## Execute tmux command

Press and release prefix key combination (`Ctrl+b` by default) and
then press command key (i. e. `c`).

## Frequently used commands

- `<prefix> $`: Name session.
- `<prefix> 0`: Switch to window number 0.
- `<prefix> c`: Create a new window (appears in status bar).
- `<prefix> d`: Detach tmux (exit back to normal terminal).
- `<prefix> x`: Kill current window.
- `<prefix> %`: Split the current pane into two, left and right.
- `<prefix> "`: Split the current pane into two, top and bottom.
- `<prefix> {`: Swap the current pane with the previous pane.
- `<prefix> }`: Swap the current pane with the next pane.

## See all active tmux sessions

```
tmux ls
```
