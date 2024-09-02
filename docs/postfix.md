---
title: Postfix
---

## Allow host to relay through postfix

Add host to `network_trust` file.

## General valid syntax check

```
postfix check
```

## Log subject, recipient and sender of emails

Add to `header_checks` file.

```
/^subject:/      INFO
/^to:/           INFO
/^from:/         INFO
```

## Test regexp matches

```
postmap -q "Subject: news" regexp:/etc/postfix/rewrite_headers
```

## Test transport file matches of addresses to transports

```
postmap -q "addr@dom.com" transport
```
