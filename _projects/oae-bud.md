---
title: "OAEBud"
excerpt: "Wireless earbuds for low-cost hearing screening — best paper runner up in MobiSys '23 "
header:
  teaser: /assets/projects/oae-bud/oaebud.jpeg
gallery1:
  - url: /assets/projects/oae-bud/pulse-sequence.jpeg
    image_path: /assets/projects/oae-bud/pulse-sequence.jpeg
    alt: "OAE Pulse sequence"
  - url: /assets/projects/oae-bud/oaebud-system.png
    image_path: /assets/projects/oae-bud/oaebud-system.jpeg
    alt: "OAEbud measurement setup"
gallery2:
  - url: /assets/projects/oae-bud/mobisys-awards-1.jpg
    image_path: /assets/projects/oae-bud/mobisys-awards-1.jpg
    alt: "Mobisys 2023 Awards"
  - url: /assets/projects/oae-bud/mobisys-awards-2.jpg
    image_path: /assets/projects/oae-bud/mobisys-awards-2.jpg
    alt: "Mobisys 2023 Awards"
---

{% include gallery id="gallery1" caption="Figures from our paper" %}

# [Wireless Earbuds for low-cost hearing screening — MobiSys '23](https://dl.acm.org/doi/10.1145/3581791.3596856)

Early hearing loss screening is very important for ensuring that newborns obtain access to health care and assistance for cognitive development. In the United States, virtually every newborn undergoes hearing loss screening soonafter childbirth. Unfortunately, the devices that performs this test cost upwards of thousands of dollars which makes them prohibitively expensive for low income communities. Despite their high cost, their mechanism of operation is quite simple — the test only involves playing tones into a person's ear through an earbud and analyzing the frequency content of the sounds that come back. 

To overcome the high cost of traditional devices like this, we built a wireless earbud that could reliably perform this hearing loss screening using commercial off the shelf components for less than $50 dollars. 

# Otoacoustic Emission and Hearing Loss Screening Background

Otoacoustic emissions are sounds emitted by the inner ear (cochlea) in response to sounds coming from the outside world. Yes, your cochela can actually emit detectable sounds and these sounds can be picked up and recorded by an in-ear microphone. These sounds are called otoacoustic emissions (oto refers to ear). The strength of these emitted sounds is indicative of hearing health. These sounds are faint or virtually absent in people with hearing loss and so detecting their presence or absence can be used to screen an individual for hearing loss. And whats more, these sounds are generated without conscious effort! So doctors can test a one hour old newborn's hearing without having to ask them "Did you catch that last sound?".

{% include gallery id="gallery2" caption="Mobisys Awards Ceremony at [The Old Student house in Helsinki](https://www.vanhaylioppilastalo.fi/en/)" %}

[My mobisys certificate of attendance](/assets/posts/Mobisys-confirmation-2023.pdf)