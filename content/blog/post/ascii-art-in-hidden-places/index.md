---
title: ASCII art in hidden places
slug: ascii-art-in-hidden-places
date_published: 2018-10-31T01:25:25.000Z
date_updated: 2018-10-31T01:25:25.000Z
tags: research, how to
description: Hiding data in new and interesting places has always been a fun objective for anyone who likes creating and solving challenges. One of the interesting secret hiding places for data I like to use is server headers.
cover: '4TJDOj5.jpg'
author_name: Pips
author_avatar: 'avatars/pips.jpg'
---

Hiding data in new and interesting places has always been a fun objective for
anyone who likes creating and solving challenges. One of the interesting secret
hiding places for data I like to use is server headers.

I found out that you can override server headers live in-page with PHP's
`header()` function. Combine this with some ascii art, and in the header of a
server response you can now show people super hidden ascii art.

![](image-15.png)

Here's the code to make it happen. Replace the `$subject` with new ascii art.

    <?php
    $i = 0;
    $subject= "
    #    ,-''''-.
    #   (.  ,.   L        ___...__
    #   /7} ,-`  `'-==''``        ''._
    #  //{                           '`.
    #  \_,X ,                         : )
    #      7                          ;`
    #      :                  ,       /
    #       \_,                \     ;
    #         Y   L_    __..--':`.    L
    #         |  /| ````       ;  y  J
    #         [ j J            / / L ;
    #         | |Y \          /_J  | |
    #         L_J/_)         /_)   L_J
    #        /_)                   /_)";
    $header_name= "blackmagic-";
    foreach(preg_split("/((\r?\n)|(\r\n?))/", $subject) as $line){

        $pre = "";
        if($i<10)
            $pre = "00";
        elseif ($i<100)
            $pre = "0";



        header( "{$header_name}{$pre}{$i}: {$line}");
        $i++;

    }
    ?>
