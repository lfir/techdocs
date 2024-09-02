---
title: Text processing
---

## Convert file encoding

Get available encodings.

```
iconv -l
```

Convert text from the ISO 8859-15 character encoding to UTF-8.

```
iconv -f ISO-8859-15 -t UTF-8 < input.txt > output.txt
```

## Get number of lines in targetFile

```bash
wc -l targetFile | grep -Eo '[0-9]+'
```

## Read csv file and extract certain columns in certain order

```bash
awk -F ',' '{print $3 "," $1}' a1.csv > b2.csv
```

:::note
- Saves output to file `b2.csv`.
- Columns are referenced using `$1`, `$2`, `$x`.
- Default fieldsep if not set is space.
:::

## Remove duplicate lines

### Preserving line order in output

```bash
awk '!seen[$0]++' target.csv
```

### Not maintaining line order

```
sort -u target.csv
```

:::tip
`-f` - Case insensitive comparisons.
:::

## Sed

### Delete lines matching regex & print result

```
sed '/regex/d' file
```

### Replace all occurrences of regex in target file with string

```
sed 's/regex/string/g' file
```

### Replace only on lines matching the line pattern

```
sed '/lineregex/s/regex/string/g' file
```

- Remove `g` from any of the expressions above to replace only the first occurrence on each line.

### Useful options

- `-i` - Make changes overwriting the file.
- `--in-place=.bkp` - Also update in-place but create a backup of the original file with .bkp extension.
- `-e` - Apply multiple expressions (i.e. `sed -e 's/regex0/string0/' -e 's/regex1/string1/' file`).
- `-r` - Allow extended regular expressions.

## Sort by first column alphabetically, second numerically

```
sort -k1,1 -k2,2nr
```

:::note
- Last `r` causes reversed output.
- Default fieldsep is space.
:::
