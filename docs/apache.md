---
title: Apache & Tomcat
---

## Apache (HTTP Server)

### Clear log file when it grows over 300MB

Add options block to file `/etc/logrotate.d/apache2`.

```
/var/log/apache2/rewrite_log {
	copytruncate
	rotate 0
	size=+300M
	notifempty
	missingok
}
```

:::tip
This method doesn't require restarting the **httpd** daemon or creating a new file.
:::

### Common server daemon control commands

```
apachectl start
```

```
apachectl stop
```

```
apachectl restart
```

```bash
apachectl status # or fullstatus
```

```bash
apachectl configtest # configuration file syntax test
```

## Tomcat

### Main log files in the logs directory

- `access_log.2013-04-09.log`
- `catalina.out`

### Required environment variables

- `CATALINA_HOME` - Full pathname to the root Tomcat directory.
- `JRE_HOME` or `JAVA_HOME` - Used to specify location of a JRE or a JDK.
