---
title: Fedora 42 released
authors: lea
---

[Fedora 42](https://fedoramagazine.org/announcing-fedora-linux-42) was released last Tuesday and
it's another great offering that continues the path of stability and usability combined with the
latest versions of packages that has characterized Fedora lately.

<!--truncate-->

Personally, I've been using the Workstation edition with KDE happily for many years now and always update
yearly two releases forward, when the one I'm currently on is close to EOL. I've not faced any issues
in more than 10 major versions, and going from 40 to 42 was no exception. These are some tips that I
think are important to maintain such level of continuity and stability:

- Don't use programs from third-party repositories, except for [RPMFusion](https://rpmfusion.org).
  They might introduce conflicts with other packages or not provide versions for new Fedora
  releases on time. With so many apps nowadays on RPMFusion and Flatpak this is very easy to avoid.
- Keep **/** and **/home** in separate partitions. This way even if something goes wrong with the
  release upgrade you can reinstall from scratch without any damage to most of your configuration
  and personal files.

Congratulations to Red Hat and the Fedora team and community!
