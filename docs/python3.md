---
title: Python 3
---

## Check if object is of valid type

```python
hasattr(object, var_or_method_name)
```

:::note

- Arguments are an object and a string.
- Recommended way compatible with duck typing.
  :::

## Conda

### Create virtual env with certain packages (passed as last arguments)

```
conda create -n venvName pip
```

:::tip
Add `python=3.x` after `venvName` to specify interpreter version.
:::

### Remove entire virtual env

```
conda remove -n venvName --all
```

### Update all packages in a virtual env

```
conda update --all --prefix /path/to/prefix
```

### Display current settings

```
conda config --show
```

### Add value to a setting

```
conda config --append envs_dirs /path
```

### Remove value from a setting

```
conda config --remove envs_dirs /path
```

### Clean cached files (may fix http errors)

```
conda clean --all
```

### Update anaconda

```
conda update conda
```

```
conda update anaconda
```

## Don't execute code inside if block when module is imported

```python
if __name__ == '__main__':
```

## Looping methods

### Loop over a list while keeping track of indexes with enumerate

```python
for index, name in enumerate(pokemons, start=1):
    print("Pokemon {}: {}".format(index, name))
```

:::note
Using 1 as first index, 0 by default if not passed.
:::

### Loop over multiple lists at the same time with zip

```python
for name, id in zip(names, ids):
    print("Name: {}; ID: {}".format(name, id))
```

### Unpack dict in a for loop

```python
for key, value in person_dictionary.items():
    print(f"Key {key} has value {value}")
```

## Math

### Division

#### Common division (always returns a float value)

    /

#### Floor div (without reminder)

    //

## Multiple assignment

### Assign first element of iterable to x, second to y

```python
x, y = 'hi'
x, y = [10, 20]
```

### Capture remaining items after unpacking. The two lines are equivalent

```python
head, middle, last = numbers[0], numbers[1:-1], numbers[-1]

head, *middle, last = numbers
```

## Pip

### Install common packages used in development

```
pip install black flake8 mypy pytest
```

### Install local package (from its root directory)

```
pip install .
```

### Install package from a VCS URL

```
pip install git+git://github.com/sample/package
```

### Install package in editable mode

```
pip install -e \<path/url>
```

:::note
Changes to the source files will be available without needing to reinstall
the package (i.e. setuptools "develop mode").
:::

### Install package in the user's home directory

```
pip install --user pkgName
```

:::note
By default packages are installed in a system directory that requires root access.
:::

### Install packages specified in requirements.txt

```
pip install -r requirements.txt
```

### Update installed package

```
pip install -U pkgName
```

## Pipenv

### Create new venv associated with current dir using specified python version

```
pipenv --python 3.7
```

### Generate a Pipfile.lock file

```
pipenv lock
```

Afterwards the created `Pipfile` and `Pipfile.lock` files can be committed into git and others can run the command below in the cloned repository to get the exact same environment.

### Install package and add it to Pipfile

```
pipenv install [OPTIONS] [PACKAGES]
```

:::note
If no package names are given attempts to read packages to install from `Pipfile`.
:::

### Remove virtualenv (inferred from current directory)

```
pipenv --rm
```

### Run a shell in the venv

```
pipenv shell
```

### Run command in the venv

```
pipenv run command args
```

:::tip
Environment variables can be passed, i. e. `PYTHONPATH=../ pipenv run command`.
:::

### Uninstall package

```
pipenv uninstall [OPTIONS] [PACKAGES]
```

## Property notation

```python
@property
def name(self):
    return self.__name

@name.setter
def name(self, val):
    self.__name = val
```

## PyQt

:::info
Fedora packages: qt5-designer python-qt5.
:::

### After saving ui file with qt designer, convert it to python

```
pyuic5 gui.ui > gui.py
```

Then it can be imported into the python project.

## Read command line input into var

```python
path = input("Enter path and press enter: ")
```

## Read environment variable (i.e. db credentials)

```python
import os
env_var = os.getenv("VARNAME")
```

## Simple HTTP server

```python
python -m http.server
```

:::note

- Useful for sharing files over the network if encryption is not needed. Run command from the directory containing target files.
- Incoming traffic on port `8000` needs to be allowed in the firewall.
  :::

## Slice notation

```python
sequence = [1, 2, 3]
# First element.
sequence[0]

# Last element.
sequence[-1]

# Second last element.
sequence[-2]

# Tail of the sequence (starting after first or nth elem).
sequence[1:]

# Tail of the sequence (starting after last or nth elem).
sequence[:-1]
```

## String formatting

```python
name = "tst"
# Format string with format method.
print("hello, {}".format(name))

# Format string with prefix f (3.6+).
print(f"hello, {name}")

# Multi-line literal (newline can be escaped with \).
"""first line
second"""
```

## Testing

### Pytest

#### Run tests

```
pytest testsdir/
```

:::note
Requires PyPI package **pytest**.
:::

#### Run tests with coverage report in a venv

```
python -m venv my_virtenv
```

```
source my_virtenv/bin/activate
```

```
pip install pytest-cov
```

```
pytest --cov-report term-missing --cov=srcdir/ testsdir/
```

:::note
Requires PyPI package **pytest-cov**.
:::

### Unittest

#### Run test module in terminal

```
python -m unittest -v test_module
```

#### Use discovery to find and run tests in dir

```
python -m unittest discover -v /dir
```
