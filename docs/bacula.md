---
title: Bacula
---

## Compile & install 7.4.4 on SLES 12

Enable sdk repositories.

```
zypper addrepo url name
```

Install dependencies.

```
zypper install mysql ncurses-devel libqt4-devel \
libacl-devel gcc gcc-c++ libmysqlclient-devel
```

Client (**bacula-fd**) installation.

```
CFLAGS="-g -Wall" ./configure \
--sbindir=/opt/bacula/bin \
--sysconfdir=/opt/bacula/etc \
--with-working-dir=/opt/bacula/working \
--with-pid-dir=/opt/bacula/working \
--with-subsys-dir=/opt/bacula/working \
--enable-client-only

make install
```

Server (**bacula-sd**, **bacula-dir**) installation.

```bash
CFLAGS="-g -Wall" ./configure \
--sbindir=/opt/bacula/bin \
--sysconfdir=/opt/bacula/etc \
--with-working-dir=/opt/bacula/working \
--with-pid-dir=/opt/bacula/working \
--with-subsys-dir=/opt/bacula/working \
--enable-conio \
--enable-smartalloc \
--enable-bat \
--with-mysql

make install
make install-autostart # Enable daemons autostart
```

Start db server.

```
service mysql start
```

Create admin db user.

```
mysql -u root
```

Create user **bacula**. Run db scripts (in `/opt/bacula/etc`).

```
./create_mysql_database
```
```
./make_mysql_tables
```
```
./grant_mysql_privileges
```

Start bacula daemons (in `/opt/bacula/bin`).

```
./bacula start
```

:::info
[Reference](http://www.bacula.org/7.4.x-manuals/en/main/Installing_Bacula.html).
:::

## Manage tape device manually

### Check device status

```
mtx -f /dev/xxyy status
```

### Load tape in slot x

```
mtx -f /dev/xxyy load x
```

### Rewind tape

```
mt -f /dev/xxyy rewind
```

### Write EOF

```
mt -f /dev/xxyy weof
```

## Replace tapes

In **bconsole** run `unmount` and then after replacing tapes:

```
update slots scan
```
```
label barcodes storage=nomTapeStorage
```

Choose tape storage/pool when requested.

## Test config syntax

```
bacula-dir -tc /etc/bacula/bacula-dir.conf
```

## Update volume options

In **bconsole** execute `update` and
then select "Volume Parameters" -&gt; "All Volumes from Pool" and
select the pool.
