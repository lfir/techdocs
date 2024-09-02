---
title: Nagios
---

:::note
Commands tested on version Core 4.3.
:::

## Check connectivity with nrpe agent

From the nagios server.

```
/usr/local/nagios/libexec/check_nrpe -H targetHostAddress
```

## Check main config file for errors

```
/usr/local/nagios/bin/nagios -v /usr/local/nagios/etc/nagios.cfg
```

## Nrpe

### Example nrpe checks from nrpe.cfg

```
command[check_ping]=/usr/lib/nagios/plugins/check_ping -H 127.0.0.1 -w 100.0,20% -c 500.0,60%
command[check_ssh]=/usr/lib/nagios/plugins/check_ssh -H 127.0.0.1
command[check_users]=/usr/lib/nagios/plugins/check_users -w 5 -c 10
command[check_load]=/usr/lib/nagios/plugins/check_load -w 15,10,5 -c 30,25,20
command[check_root]=/usr/lib/nagios/plugins/check_disk -w 10% -c 5% -p /
command[check_opt]=/usr/lib/nagios/plugins/check_disk -w 10% -c 5% -p /opt
command[check_var]=/usr/lib/nagios/plugins/check_disk -w 10% -c 5% -p /var
command[check_boot]=/usr/lib/nagios/plugins/check_disk -w 10% -c 5% -p /boot
command[check_swap]=/usr/lib/nagios/plugins/check_swap -w 10% -c 5%
command[check_zombie_procs]=/usr/lib/nagios/plugins/check_procs -w 5 -c 10 -s Z
command[check_total_procs]=/usr/lib/nagios/plugins/check_procs -w 350 -c 500
command[check_http]=/usr/lib/nagios/plugins/check_http -H localhost -w 45 -c 60
```

### Use nrpe

Include in `commands.cfg`

```
define command {
    command_name check_nrpe
    command_line $USER1$/check_nrpe -H $HOSTADDRESS$ -c $ARG1$
}
```

:::note
**nrpe** package must be installed on the host and the target servers.
:::

## Install from source on SLES 12 SP2

### Enable additional repos, install dependencies

```
SUSEConnect -p sle-sdk/12.2/x86_64
SUSEConnect -p sle-module-web-scripting/12/x86_64
zypper in autoconf gcc glibc make wget unzip apache2 apache2-utils php5 apache2-mod_php5 gd gd-devel
```

### Add to DirectoryIndex section in apache .conf files

```
index.html index.cgi index.pl index.php index.xhtml index.htm
```

### Load apache module for php5

```
a2enmod php5
sudo systemctl restart apache2
```

### Configure and compile source

```
cd /tmp
wget -O nagioscore.tar.gz https://github.com/NagiosEnterprises/nagioscore/archive/nagios-4.3.2.tar.gz
tar xzf nagioscore.tar.gz

cd /tmp/nagioscore-nagios-4.3.2/
./configure --with-httpd-conf=/etc/apache2/vhosts.d
make all
```

### Create user and group

```
useradd nagios
groupadd nagios
usermod -a -G nagios nagios
usermod -a -G nagios wwwrun
```

### Install files and enable services

```
make install
make install-init
systemctl enable nagios

make install-commandmode
make install-config
make install-webconf
systemctl enable apache2
```

### Set web admin password

```
htpasswd2 -c /usr/local/nagios/etc/htpasswd.users nagiosadmin
```

### Start services

```
systemctl start nagios
```

### Build & install nagios plugins

```
zypper in autoconf gcc glibc libmcrypt-devel make libopenssl-devel wget gettext gettext-runtime automake net-snmp perl-Net-SNMP

wget --no-check-certificate -O nagios-plugins.tar.gz https://github.com/nagios-plugins/nagios-plugins/archive/release-2.2.1.tar.gz
tar zxf nagios-plugins.tar.gz

cd /tmp/nagios-plugins-release-2.2.1/
sudo ./tools/setup
sudo ./configure
sudo make
sudo make install
```

## Send email notifications with postfix and a different mail server

`/etc/postfix/main.cf` should contain:

```
relayhost = your_smtp_relay_address
```

Add to `commands.cfg`:

```
'notify-host-by-email' command definition
'notify-service-by-email' command definition
```

From address can be added to mail command with:

```
-r "mail@dir"
```
