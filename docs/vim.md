---
title: Vim
---

## Cancel edit

`u` - Undo last change.

`.` - Redo last change.

## Copy & paste

Command `Y` or `yy` copies (yanks) one or more lines. The following variants are available:

```bash
yw  # Copy from cursor to the end of word.
y$  # Copy from cursor to the end of the line.
Y   # Copy one line.
2Y  # Copy two lines.
10Y # Copy ten lines.
yG  # Copy all lines to the end of the file.
```

Paste the text contained in the buffer.

```bash
P # Paste line above or characters before cursor.
p # Paste line below or characters after cursor.
```

## Delete operations

```bash
D  # Delete from cursor to the end of the line.
dG # Delete to the end of file.
dd # Delete line where the cursor is.
x  # Delete one character.
```

## List loaded plugins

```
:scriptnames
```

## Load output of terminal command

```
head -5 file | vim -
```

:::tip
It can then be modified and saved to a new file using `:w /path/to/newFile`.
:::

## Move cursor to another window (cycle)

`Ctrl+W Ctrl+W`

## Open terminal without closing Vim

```
:sh
```

- `Ctrl+D` or `exit` can be used to return to the editor.

## Quit

`Shift+ZZ` or `:wq` - Saving changes.

`Shift+ZQ` or `:q!` - Without saving.

## Replace all instances of regex with string

```
:%s/regEx/string/g
```

:::tip
- Append `i` to the command for a case insensitive match.
- `c` to confirm each substitution.
- Remove `%` to replace only on the current line and `g` to replace only the first occurrence.
- Without a preceding `\\` some regular expression special characters like `{}` and `+` are
  taken literally (basic regular expressions).
:::

## Search

`/regEx` - Forward search.

`?regEx` - Backward search.

:::tip
Press `n` to go to the next occurrence, `N` to the previous one.
:::

## Select text using the mouse

Hold `Ctrl+Alt`.

## Split window

`:split file` - Split window horizontally and load another file.

`:vsplit file` - Vertical division.

## Switch modes

`Insert`/`i` - From Command mode to Edit mode.

`Esc` - From Edit mode to Command mode.
