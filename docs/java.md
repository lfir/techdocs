---
title: Java
---

## Common directory for JDKs installed with DNF

```
/usr/lib/jvm
```

## Mockito

:::tip
When using `@InjectMocks` objects mocked with `@Mock` need to have EXACTLY the same type in both the original and tests classes (not a subclass/superclass).
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
