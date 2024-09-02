---
title: Docker & Docker Compose
---

## Docker

### Build image

```
sudo docker build -t imgName /path/to/dockerfile/dir
```

### Commonly used options

<table>
<thead>
    <tr>
        <th>Option</th>
		<th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>-e VAR=value</td>
		<td>Set environment variable.</td>
    </tr>
    <tr>
        <td>--expose portNum</td>
		<td>Expose a container port.</td>
    </tr>
    <tr>
        <td>-i</td>
		<td>Interactive (for shells).</td>
    </tr>
    <tr>
        <td>-network="host"</td>
		<td>Use host network interfaces.</td>
    </tr>
    <tr>
        <td>-p hostPort:containerPort</td>
		<td>Make a container port accessible from a host port.</td>
    </tr>
    <tr>
        <td>-rm</td>
		<td>Automatically remove the container when it exits.</td>
    </tr>
    <tr>
        <td>-u uid:gid</td>
		<td>Run container as the specified user.</td>
    </tr>
    <tr>
        <td>-v /host/vol:/container/vol</td>
		<td>Mount a host volume in the container.</td>
    </tr>
    <tr>
        <td>-v /target:/dest:Z</td>
		<td>Grant selinux permission to host dir (target) and contents.</td>
    </tr>
    </tbody>
</table>

### Delete container

```
sudo docker rm containerId
```

### Delete image

```
sudo docker rmi imageId
```

### Edit file stored in container volume

Copy it to local machine (current directory) and make changes.

```
sudo docker cp containerName:/path/to/file.ext .
```

Move the edited file back to the volume.

```
sudo docker cp file.ext containerName:/path/to/file.ext
```

### Get installed images

```
sudo docker images
```

### Get running containers

```
sudo docker ps
```

### Kill running container

```
sudo docker kill containerId
```

### Manage Docker as non-root user

```
sudo groupadd docker
```
```
sudo usermod -aG docker $USER
```

Log out and log back in.

:::info
[Reference](https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user).
:::

### Run image

```
sudo docker run [OPTIONS] IMAGE [COMMAND] [COMMAND ARGS]
```

### Start service the first time it is used instead of at boot

```
sudo systemctl enable docker.socket
```

## Docker compose

### Build images defined in yml file

```
sudo docker-compose build
```

:::tip
Option `-f /path/to/yml` can be used to specify the path to the definition file.
:::

### Build images then start services

```
sudo docker-compose up --build
```

### Get info on running containers

```
sudo docker-compose ps
```

### Open interactive shell in running container

```
sudo docker-compose exec -it serviceName bash
```

:::note
- `serviceName` has to match the one in `docker-compose.yml`.
- Other programs that require an interactive shell can be executed using the same syntax.
:::

### Start services in detached mode (bg process)

```
sudo docker-compose up -d
```

When using this mode output from containers can be seen by running:

```
sudo docker-compose logs
```

### Start specific service only

```
sudo docker-compose up --no-start
```
```
sudo docker-compose start serviceName
```

### Stop all running services

```
sudo docker-compose down
```
