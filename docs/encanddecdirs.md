---
title: Encrypt & compress folder
---

## Using 7zip

### Backup

```
7zz a bk-"$(date +%d-%m-%y)".7z -mx=9 -mhe=on -pmy_password targetDir
```

:::tip
`-spf` can be used to preserve directory structure in the output when adding individual files.
:::

### List archive contents

```
7zz l bkp.7z
```

### Restore (extract files with full paths to current directory)

```
7zz x bkp.7z
```

### Verify archive

```
7zz t bkp.7z
```

## Using gpgtar

### Save dir

```
gpgtar --encrypt --output bk-"$(date +%d-%m-%y)".tar.gpg -r signingKeyEmail directory
```

### List file contents

```
gpgtar --list-archive file.tar.gpg | less
```

### Restore (using key in keyring)

```
gpgtar --decrypt file.tar.gpg
```

:::tip
A key pair (private + public) can be imported into the keyring with command: `gpg --import private.key`.
:::
:::note
On older distributions the program is called `gpg-zip`. The commands above work in the same way with it.
:::

## Using openssl

### Encrypt compressed directory

```
tar cf - directory | openssl enc -e -aes256 -pbkdf2 -out bk-"$(date -I)".tar.enc -pass pass:my_password
```

### Decrypt

```
openssl enc -d -aes256 -pbkdf2 -in dir.tar.enc -out dir.tar -pass pass:my_password
```

:::note
If `-pass` option is not used the password has to be entered manually when prompted.
:::
