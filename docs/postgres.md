---
title: PostgreSQL
---

## Convert array to string

```
array_to_string(anArray, aDelimiter, valueOfNullElems)
```
:::note
Last param is optional, if not present null elements are removed.
:::

## Equality comparisons contemplating null values

`<>` and `!=` are equivalent. Both evaluate for values, which `NULL` is
not. `NULL` is a placeholder to say there is absence of a value. You can
only use `IS NULL`/`IS NOT NULL` as predicates for such situations.

```sql
value IS NULL
```

If you know that value is never `-1` (for example) you can say:

```sql
coalesce(value, -1) <> zz
```

## Export table as json

```sql
COPY (SELECT row_to_json(t) FROM tableName AS t) TO '/tmp/myfile';
```

## Group by colA and select any one value of colB to get only one row per group

```sql
SELECT colA, min(colB) FROM tableName GROUP BY colA;
```

:::tip
`min()` works with text columns too.
:::

## Raise notification with row data as JSON after inserts

Add a “after insert” trigger to the table :

```sql
CREATE TRIGGER tblexample_after
AFTER INSERT
ON tblexample
FOR EACH ROW
EXECUTE PROCEDURE notify();
```

Within the trigger function, we send a notify event (`'myEvent'`) with the
row information. We need to send plain text in the notify event so we’ll
use JSON to encode our row data (`row_to_json` is a builtin function).

```sql
CREATE OR REPLACE FUNCTION notify() RETURNS TRIGGER AS
$BODY$
BEGIN
    PERFORM pg_notify('myEvent', row_to_json(NEW)::text);
    RETURN NEW;
END;
$BODY$
LANGUAGE 'plpgsql' VOLATILE COST 100;
```

## pgtap commands

Run tests file with `pg_prove`:

```bash
sudo su postgres -c 'pg_prove --dbname tst test0.sql'
```

## psql options and commands

### Connection options

<table>
<thead>
    <tr>
        <th>Option</th>
		<th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>-h</td>
		<td>Host address.</td>
    </tr>
    <tr>
        <td>-p</td>
		<td>Port number.</td>
    </tr>
    <tr>
        <td>-U</td>
		<td>Username. By default OS user is used.</td>
    </tr>
    </tbody>
</table>

### Other options

<table>
<thead>
    <tr>
        <th>Option</th>
		<th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>--clean</td>
		<td>Drop database.</td>
    </tr>
    <tr>
        <td>--create</td>
		<td>Creates database during restore.</td>
    </tr>
    <tr>
        <td>--dbname</td>
		<td>For initial connection the name of any existing database can be used.</td>
    </tr>
    <tr>
        <td>--if-exists</td>
		<td>Does not raise error if database does not exist.</td>
    </tr>
    <tr>
        <td>--role</td>
		<td>Role used to execute statements in the database.</td>
    </tr>
    </tbody>
</table>

### Backup all dbs (including roles)

```bash
sudo su postgres -c 'pg_dumpall -f /tmp/outputFileName.backup'
```

### Restore all dbs

```bash
sudo su postgres -c 'psql -f /tmp/outputFileName.backup postgres'
```

### Backup one db (without roles)

```bash
sudo su postgres -c 'pg_dump -Fc -d dbName -f /tmp/outputFileName.backup'
```

### Backup one table

```bash
sudo su postgres -c 'pg_dump -Fc -d dbName -t schemaName.tableName -f /tmp/outputFileName.backup'
```

### Restore one db or table

```bash
sudo su postgres -c 'pg_restore -d dbName /tmp/outputFileName.backup'
```

### Export query result to csv file from the shell

```bash
sudo su postgres -c 'psql -d dbName -c "COPY (SELECT * FROM tableName) TO stdout WITH csv header;" -o fileName.csv'
```

## shp2pgsql commands

Import shapefile and create spatial index for the new table (requires
**postgis** package):

```bash
shp2pgsql -I -s <SRID> <PATH/TO/SHAPEFILE> <SCHEMA>.<DBTABLE> | psql -U postgres -d <DBNAME>
```
