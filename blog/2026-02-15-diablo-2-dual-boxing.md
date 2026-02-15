---
title: How to easily dual box Diablo 2 Resurrected on Linux
authors: lea
---

Dual-boxing in Diablo 2 can be useful for a variety of reasons, such as rushing new characters and
being able to create more of them than with a single account.

On Linux this is very easy to do with Steam and Proton, without the need to install
any third-party apps or change settings in the launcher or the game.

<!--truncate-->

**Step by step guide**

**Note:** Two different Battle.net accounts with Diablo 2 Resurrected are required.

1. Download the Battle.net [installer](https://download.battle.net).
2. On _Steam_ in the _Library_ section go to _Add a Game_ `->` _Add a Non-Steam game_ `->` _Browse_ `->` select the file _Battle.net-Setup.exe_ `->` _Add Selected Programs_
3. Right-click on the newly created entry `->` _Properties_ `->` we can name this however we want, such as _Battle.net 1_.
   In the _Compatibility_ tab check _Force the use of a specific Steam Play compatibility tool_ and choose _Proton 10.xx_ in the dropdown below.
   ![Compatibility tab](/img/blog/d2r-db-g0.png)
4. Right-click on the entry again `->` _Play_. This will launch the Battle.net installer.
   We can accept all the default options and when it's finished the Battle.net launcher will be installed in a Wine / Proton prefix automatically created for this program.
5. Go to _Properties_ again and edit the _Target_ and _Start in_ fields, so that they point to the installed app's executable instead of the setup file.
   We can easily find the installation path of the Battle.net app by running this command in a terminal from the `home` directory:

   `find . -name 'Battle.net Launcher.exe' -exec readlink -f {} \;`

   ![Find command results](/img/blog/d2r-db-g1.png)
   Copy the path found, paste it into the _Target_ field, and enclose it in double quotes.

   In the _Start in_ field enter the path as well but remove the `/Battle.net Launcher.exe` part and add quotes to it too.
   ![Properties](/img/blog/d2r-db-g2.png)

6. Now when we click _Play_ the Battle.net app will open and we can log in with our account and install / run Diablo 2 Resurrected.

Since Wine / Proton automatically isolate file systems and processes from each prefix, we can repeat the same steps a second time, creating another entry called _Battle.net 2_ and installing the Battle.net app and the game again, which will go into a different and independent prefix.

In the end we can run both entries simultaneously and log in with a different Battle.net account on each one, enabling dual-boxing without having had to tweak any settings in the game or the launcher or use third-party apps.

Here's a demo video of the finished setup:

<iframe width="560" height="315" src="https://www.youtube.com/embed/BIarE9MHoGY?si=J4hJCAZH9kq-yjFA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
