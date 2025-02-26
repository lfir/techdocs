---
title: Bash
---

## Functions

### Access arguments from within a function

- All: `"@"`
- All starting after x: `"$\{@:x}"`
- Positional: `$1`, `$2`, `$x`
- Make argument list start after the first one: call `shift` or `shift n` to begin after the nth.

### Define function

```bash
function hello () {
    echo "Hello world"
}
```

## Get file count in target directory

### Including dotfiles

```bash
ls -1A | wc -l
```

### Excluding dotfiles

```bash
ls -1 | wc -l
```

:::tip
For directories other than the current one the path can be passed to the `ls` command.
:::

## Get full path of target file or dir

```
readlink -f filename
```

## Iterate over a range of numbers including both limits

```bash
for i in "$(seq 1 3)"; do echo "$i"; done
```

## Jobs

To pause the current job press `Ctrl+z` and to restart the last job run `fg`.

## Merge files in dir with cat and glob

Merges all files in the current dir into a single file.

```bash
cat * >> bigfile.txt
```

:::tip
Use `*.extension` instead of `*` to merge only files with the given extension.
:::

## Return to previous position in history after searching with Ctrl+r

`Ctrl+c` - End of history.

`Ctrl+g` - Last position before starting search.

## Run command during logout

Add command to `~/.bash_logout`.

## Run executable file

Mark the file as executable.

```
chmod +x filename
```

Execute the file in the terminal with one of the following commands.

```bash
./filename
```

```bash
bash filename
```

:::tip
The second option works even if the file doesn't have execution permission.
:::

## Send string or command output to stdin of another command

```bash
# Using pipes.
echo 'testOutput' | cut -c 5-
# With here-docs (strings only).
# Single-line string.
cat <<< 'test str'
# Multi-line string and command options.
cat <<EOF -n -s
"$var"
line 2
EOF
# Using process substitution.
# < is for redirection to stdin, <() is the process substitution syntax.
cat < <(echo 'result sent to stdin')
```

## Set environment variables

### For all users

Add a line to `/etc/profile`.

```
export VARNAME=value
```

Or create a file with **.sh extension** containing it in
`/etc/profile.d`.

### For a given user

Add line to `~/.bash_profile` or `~/.bashrc`.

:::note
These statements are executed after user log in.
:::

## Show pipe operation status with pv

The basic usage is similar to the **cat** command.
For instance to show progress while creating a tarball:

```bash
tar cf - /target | pv > target.tar
```

And when extracting files from one:

```bash
pv target.tar | tar xf -
```

## Use parts of last command in current one

```bash
# Positional arguments
$ echo a
a
$ echo !:1
a

$ echo a b
a b
$ echo !:2
b

$ echo c d
c d
$ echo !:2 q !:1
d q c

# Name of the command
$ rm somefile
$ echo !:0
rm
```

## Useful Environment Variables

```
DISPLAY
```

Display identifier from the display server (e.g. `x11`).

```
EDITOR
```

Text editor used by different applications (e.g. `crontab`, `visudo`).

```
HOME
```

Current user's home directory.

```
HOSTNAME
```

System's name.

```
PATH
```

List of dirs where executables are looked for by the shell.

```
PWD
```

Current working directory.

```
OLDPWD
```

Previous working directory.

```
SHELL
```

Path to the current user's shell.

```
UID
```

Current user's numeric ID.

```
USER
```

Name of the current user.

```
XDG_SESSION_TYPE
```

Graphical session type (i.e. `wayland`, `x11`)

## Watch log file in reverse order and paginated

```bash
tac /var/log/cron-20240211 | less
```
