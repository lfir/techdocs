---
title: Java
---

## Common directory for JDKs installed with DNF

```
/usr/lib/jvm
```

## Common Maven terminal commands

### Clean _target_ dir and build project

```
./mvnw clean install
```

:::tip
Option `-DskipTests` can be used to ignore the tests
:::

### Generate artifacts

```
./mvnw package
```

### Run the test cases

```
./mvnw test
```

:::tip
To run only specific tests use option `-Dtest=TestClassName`
:::

### Show dependency tree

```
./mvnw dependency:tree
```

### Download sources

```
./mvnw dependency:sources
```

### List available updates

```
./mvnw versions:display-dependency-updates
```

:::warning
If more than one version of Java is installed on the host a suitable one might need to be specified instead of the default before running the commands above, i.e.

```
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk
./mvnw...
```

:::
:::note
If Maven is installed system-wide the [`mvn`](https://manpages.ubuntu.com/manpages/noble/mvn.1.html) command can be used instead of the Maven Wrapper (`mvnw`)
:::

## Ivy

### Duplicate dependencies

When a jar file is added to the classpath more than once (i.e. because it is a sub-dependency of multiple libraries that use different versions of it) the **first** one declared in **ivy.xml** takes precedence.

## Mockito

- Full mocks (created with `Mockito.mock()`) don't execute target code during stubbing, so matchers never become actual arguments. Spies (`Mockito.spy()`) do execute real code, so matchers must be handled with `doXxx().when()` syntax instead of `when().thenSomething()` directly.

- When using `@InjectMocks` objects mocked with `@Mock` need to have EXACTLY the same type in both the original and tests classes (not a subclass/superclass).

## Run program in the terminal without manually compiling it first

### .java source code files

```bash
java src/FileCounter.java
```

### Shebang files

Start the file of the Java program with

```
#!/usr/lib/jvm/java-18/bin/java --source 11
```

Then give it execution permission and run it with `./script` (the .java extension is unnecessary).
The `--source` option can be used to specify a different version of Java used by the program,
although the target JRE needs to support it.

File counter [example](https://github.com/lfir/ex-java-terminal-script).

:::note

- Target file should have a `main` method
- Java 11+ required

:::

## Spring

### Common static imports used in tests

```java
import static org.assertj.core.api.Assertions.*;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.BDDMockito.*;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
```

### Default variable values can also be set in .properties files

For example to default to the blank String when the environment variable is missing:

```
some.property=${SOME_VARIABLE:}
```

### Useful cron expressions that can be used with @Scheduled

Every second

```
* * * * * *
```

Every minute

```
0 0/1 * 1/1 * ?
```

## String

### Comparisons (equals vs. ==)

Generally `.equals()` needs to be used, so the contents are compared.
If the argument is `null` it returns `false`.

With `==` whether both operands refer to the same object is checked.
