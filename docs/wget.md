---
title: Wget
---

## Command syntax

```
wget [option] [URL]
```

## Download sequence of files using Bash range syntax

```
wget http://example.com/file_{1..4}.webp
```

## Useful options

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
