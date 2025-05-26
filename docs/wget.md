---
title: Wget & curl
---

## Wget

### Command syntax

```
wget [option] [URL]
```

### Download sequence of files using Bash range syntax

```
wget http://example.com/file_{1..4}.webp
```

### Useful options

<table>
<thead>
    <tr>
        <th>Option</th>
		<th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>--continue (-c for short)</td>
		<td>Resume a previously interrupted download.</td>
    </tr>
    <tr>
        <td>--debug</td>
		<td>Display request and response headers.</td>
    </tr>
     <tr>
        <td>--header="name: value"</td>
		<td>Add or update a request header.</td>
    </tr>   
    <tr>
        <td>-l depth</td>
		<td>Maximum depth level for recursion, <b>inf</b> can be used for unlimited.</td>
    </tr>
    <tr>
        <td>-m</td>
		<td>Turns on recursion and time-stamping, sets infinite recursion depth and keeps FTP directory listings.</td>
    </tr>
    <tr>
        <td>--no-parent</td>
		<td>Do not ascend to the parent directory when retrieving recursively. Only the files below a certain hierarchy will be downloaded.</td>
    </tr>
    <tr>
        <td>--no-proxy</td>
		<td>Don't use proxies, even if the appropriate *_proxy environment variable is defined.</td>
    </tr>
    <tr>
        <td>-O fileName</td>
		<td>Save target as fileName. If - is used as argument, documents will be printed to standard output.</td>
    </tr>
    <tr>
        <td>-r</td>
		<td>Turn on recursive retrieving. The default maximum depth is 5.</td>
    </tr>
    <tr>
        <td>--show-progress</td>
		<td>Display the progress bar (in any verbosity).</td>
    </tr>
    <tr>
        <td>--user=usr --password=pwd</td>
		<td>Specify the username and password to be used for both FTP and HTTP authentication.</td>
    </tr>
    </tbody>
</table>

## curl

Basic usage of the command is the same as `wget`.

### Useful options

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>-A 'Mozilla/5.0'</td>
      <td>Set user-agent</td>
    </tr>
    <tr>
      <td>-x proxy:port</td>
      <td>Use HTTP proxy</td>
    </tr>
    <tr>
      <td>-H 'Authorization: bearer-token'</td>
      <td>Use custom header</td>
    </tr>
    <tr>
      <td>-u username:password</td>
      <td>HTTP Basic Authentication</td>
    </tr>
    <tr>
      <td>-L</td>
      <td>Follow any redirects until final destination is reached</td>
    </tr>
    <tr>
      <td>-X PUT</td>
      <td>Set request method; if not passed `GET` is used by default</td>
    </tr>
    <tr>
      <td>-X POST -d 'key1=val1&key2=val2'</td>
      <td>Specify key-value pairs in request body</td>
    </tr>
    <tr>
      <td>-X POST -d 'key1=val1' -d 'key2=val2'</td>
      <td>Alternative way of sending multiple keys and values</td>
    </tr>
    <tr>
      <td>-X POST -d '\{"k1":v1\}' -H 'Content-Type: application/json'</td>
      <td>Use JSON data</td>
    </tr>
    <tr>
      <td>-o output.txt</td>
      <td>Save response to a file</td>
    </tr>
    <tr>
      <td>-O</td>
      <td>Download a file and save it as the same name</td>
    </tr>
    <tr>
      <td>-O -C</td>
      <td>Continue a partial download</td>
    </tr>
    <tr>
      <td>-O --limit-rate 1M</td>
      <td>Transfer rate limited to 1MB/s</td>
    </tr>
  </tbody>
</table>
